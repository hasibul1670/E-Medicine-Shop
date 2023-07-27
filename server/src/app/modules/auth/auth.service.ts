/* eslint-disable no-undef */

import { StatusCodes } from 'http-status-codes';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import bcrypt from 'bcrypt';
import { JwtPayload } from 'jsonwebtoken';
import { ApiError } from '../../../handlingError/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { Admin } from '../admin/admin.model';
import { Student } from '../student/student.model';
import {
  IChangePassword,
  ILoginUser,
  ILoginUserResponse,
} from './auth.interface';

const loginStudent = async (
  payload: ILoginUser
): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  // Check if a user with the provided email exists in the Student collection
  const student = await Student.isStudentExist(email);

  // Check if a user with the provided email exists in the Admin collection
  const admin = await Admin.isAdminExist(email);



  // Determine the user collection where the user was found
  let userCollection;
  let userRole;

  if (student) {
    userCollection = 'Student';
    userRole = student.role;
  } else if (admin) {
    userCollection = 'Admin';
    userRole = admin.role;
  }
 else {
    throw new ApiError(StatusCodes.NOT_FOUND, 'User does not exist');
  }



  let isPasswordMatched = false;
  switch (userCollection) {
    case 'Student':
      if (student) {
        isPasswordMatched = await Student.isPasswordMatched(
          password,
          student.password
        );
      }
      break;
    case 'Admin':
      if (admin) {
        isPasswordMatched = await Admin.isPasswordMatched(
          password,
          admin.password
        );
      }
      break;
  }

  if (!isPasswordMatched) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'Password is incorrect');
  }

  // Generate an access token
  const accessToken = jwtHelpers.createToken(
    { email, userRole },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  const refreshToken = jwtHelpers.createToken(
    { email, userRole },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );


  // Return the response object
  return {
    logInUserRole: userRole,
    email,
    accessToken,
    refreshToken,
  };
};




const changePassword = async (
  user: JwtPayload | null,
  payload: IChangePassword
): Promise<void> => {
  const { oldPassword, newPassword } = payload;
  const userType = user?.userRole; 

  let isUserExist;

  switch (userType) {
    case 'admin':
      isUserExist = await Admin.isAdminExist(user?.email);
      break;
    case 'student':
      isUserExist = await Student.isStudentExist(user?.email);
      break;
  }

  if (!isUserExist) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'User does not exist');
  }

  // Checking OLD password
  if (
    isUserExist.password &&
    !(await Student.isPasswordMatched(oldPassword, isUserExist.password))
  ) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'Old Password is incorrect');
  }

  // Hash password
  const newHashPass = await bcrypt.hash(
    newPassword,
    Number(config.default_salt_rounds as string)
  );

  const updatedData = {
    password: newHashPass,

  };

  const query = { email: user?.email };

  // Update in DB based on user type
  switch (userType) {
    case 'admin':
      await Admin.findOneAndUpdate(query, updatedData);
      break;
    case 'student':
      await Student.findOneAndUpdate(query, updatedData);
      break;
    default:
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Invalid user type');
  }
};

export const AuthService = {
  loginStudent,
  changePassword
};
