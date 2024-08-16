
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-white">
      <footer className="footer footer-center p-5 bg-gray-800 text-base-content rounded">
        <div className="flex justify-between">
          <div className="w-1/3">
            <p className="text-lg font-semibold">Contact Info</p>
            <div className="flex flex-col gap-1 ">
              <Link className="hover:underline hover:text-blue-600" href="/">
                Privacy Policy
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Terms and Conditions
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Return and Refund Policy
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Order Medicine
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Healthcare Products
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Lab Tests
              </Link>
            </div>
          </div>
          <div className=" w-1/3">
            <p className="text-lg font-semibold">Useful Links</p>
            <div className="flex flex-col gap-1 font-">
              <Link className="hover:underline hover:text-blue-600" href="/">
                Request Order
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Upload Prescription
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                FAQ
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Account
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Special Offers
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                How to Order
              </Link>
            </div>
          </div>

          <div className=" w-1/3">
            <p className="text-lg font-semibold">Contact Info</p>
            <section className="flex flex-col gap-1 font-">
              <p className="" >
                Address: B15/2 Mohammadpur,Dhaka,Bangladesh
              </p>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Hot Line: 01575 42 88 13
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Whatsapp: 01575 42 88 13
              </Link>
              <Link className="hover:underline hover:text-blue-600" href="/">
                Email : hasibul.dcc@gmail.com
              </Link>

              <p className="flex gap-2">
                <Link
                  className="hover:underline text-3xl hover:text-blue-600"
                  href="/"
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="hover:underline  text-3xl hover:text-blue-600"
                  href="/"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  className="hover:underline text-3xl hover:text-blue-600"
                  href="/"
                >
                  <FaTwitter />
                </Link>
                <Link
                  className="hover:underline text-3xl hover:text-blue-600"
                  href="/"
                >
                  <FaInstagram />
                </Link>
              </p>
            </section>
          </div>
        </div>

        <div>
          <hr  className="mt-4"/>
          <p className="mt-2 font-robo text-sm font-bold">
            Copyright © 2024 - All right reserved by
            <Link
              className="text-cyan-300 underline"
              target="_blank"
              href="https://hasibul-islam365.netlify.app/"
            >
              {" "}
              E-Care
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
