import { IoIosArrowDown } from "react-icons/io";

interface Props {
  options: number[];
  title: string;
}

const Select = ({ title, options }: Props) => {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="w-24 appearance-none 
        border border-gray-300 p-4"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
