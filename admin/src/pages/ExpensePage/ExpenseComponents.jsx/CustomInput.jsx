const CustomInput = ({ label, type, name, defaultValue, required, min }) => {
  return (
    <div className="flex flex-col w-4/5 mb-5">
      <label htmlFor={name} className="text-base">
        {label}
      </label>
      <input
        className="rounded-md"
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
