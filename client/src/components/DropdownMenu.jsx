import { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { MdLightMode, MdComputer } from "react-icons/md";

const DropdownMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  const MENU_OPTIONS = [
    {
      id: 1,
      text: "Dark",
      icon: <FaMoon />,
    },
    {
      id: 2,
      text: "Light",
      icon: <MdLightMode />,
    },
    {
      id: 3,
      text: "System",
      icon: <MdComputer />,
    },
  ];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={handleOpenMenu}
          type="button"
          className="inline-flex w-full justify-center gap-x-1 rounded-md p-1.5 text-2xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <AiFillSetting />
        </button>
      </div>

      {openMenu && (
        <div
          className="absolute right-0 z-10 mt-3 md:mt-4 w-40 py-3 px-4 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          {MENU_OPTIONS.map((option) => {
            return (
              <div
                className="py-3 px-2 flex items-center w-full gap-3 cursor-pointer text-xs sm:text-base lg:text-lg font-medium"
                key={option.id}
              >
                <span className="">{option.icon}</span>
                <span className="">{option.text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
