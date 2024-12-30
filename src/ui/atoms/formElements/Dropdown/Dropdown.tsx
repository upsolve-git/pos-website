import React from "react";
import { Category } from "../../../../interfaces/Category";

interface DropdownProps {
  value: Category;
  label: string;
  options: Category[];
  onChange: (selectedCategory: Category) => void; // Update this to pass Category
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  label,
  options,
  onChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value; // Convert selected value to a number
    const selectedCategory = options.find(option => option.category_name === selectedId); // Find the full Category object
    console.log(options)
    console.log(e.target.value)
    if (selectedCategory) {
      onChange(selectedCategory); // Pass the full Category object to the onChange function
    }
  };
  return (
    <tr className="">
      <td>
        <label className="whitespace-nowrap font-medium">
          {label}
        </label>
      </td>
      <td>
        <select onChange={handleChange} className="w-full border rounded-md px-3 py-2">
          <option>Select a Category</option>
          {options.map(option => (
            <option key={option.category_name}>
              {option.category_name}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

export default Dropdown;
