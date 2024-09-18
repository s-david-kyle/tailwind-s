import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

interface Props {
  routes: string[];
}

const Navigation = ({ routes }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log(isMobileMenuOpen);

  const menuListDiv = `${
    !isMobileMenuOpen ? "hidden" : ""
  } lg:block w-full lg:w-auto`;

  return (
    <>
      <button
        className="lg:hidden p-2 hover:bg-gray-100 focus:ring-2
         focus:ring-gray-200 rounded-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu List */}
      <div className={menuListDiv}>
        <ul
          className="flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent 
        border border-gray-100 lg:border-none p-4 text-lg rounded-lg lg:space-x-8"
        >
          {routes.map((route, i) => (
            <li
              className={`cursor-pointer py-2 px-3 rounded hover:bg-transparent
                lg:hover:text-blue-500 ${
                  i === 0
                    ? "bg-blue-500 lg:bg-transparent text-white lg:text-blue-500"
                    : "hover:bg-gray-100"
                }  ${(i == 3 || i == 4) && "lg:text-white"}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
