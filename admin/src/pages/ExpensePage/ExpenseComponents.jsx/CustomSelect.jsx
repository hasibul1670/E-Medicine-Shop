const CustomSelect = ({ label, name, defaultValue, options, required }) => {
  return (
    <div className="flex flex-col w-4/5 mb-5">
      <label htmlFor={name} className="text-base">
        {label}
      </label>
      <select name={name} defaultValue={defaultValue} required={required}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
