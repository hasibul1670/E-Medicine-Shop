type ICustomInputType = {
  label?: string;
  type?: string;
  name?: string;
  defaultValue?: string;
  required?: boolean;
  min?: string;
};

const CustomInput: React.FC<ICustomInputType> = ({
  label,
  type,
  name,
  defaultValue,
  required,
  min,
}) => {
  return (
    <div className="flex flex-col w-4/5 mb-5">
      <label htmlFor={name} className="text-base">
        {label} :
      </label>
      <input
        className="rounded-md h-12 border-2  border-blue-400"
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        min={min}
      />
    </div>
  );
};

export default CustomInput;
