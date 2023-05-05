import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  value,
  placeholder,
  handleChange,
  handleSurpriseMe,
  isSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-4 my-4">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-600"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-gray-700 bg-gray-300 hover:bg-opacity-80 transition py-1.5 px-4 rounded-sm text-sm"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        required
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="bg-gray-100 border-gray-300 text-gray-600 text-sm rounded-md focus:ring-indigo-600 focus:border-indigo-600 outline-none block w-full p-3 border-2"
      />
    </div>
  );
};

export default FormField;
