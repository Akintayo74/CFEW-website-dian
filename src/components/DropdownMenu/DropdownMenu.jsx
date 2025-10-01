import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { GET_INVOLVED_HEADER } from "../../constants";

function Dropdown({ label = "Get Involved", isMobile = false }) {

  if (isMobile) {
    const [toggleIsOpen, setToggleIsOpen] = React.useState(false);
    return (
      <div className="flex flex-col items-center gap-3 ">
        <button
          className="text-cfew-interface font-bold flex hover:text-cfew-primary-400 cursor-pointer"
          onClick={() => setToggleIsOpen(!toggleIsOpen)}
        >
          {label}
          <span>
            <ChevronDown width={24} height={24} />
          </span>
        </button>

        {toggleIsOpen && (
          <div className="flex flex-col items-center gap-3">
            {GET_INVOLVED_HEADER.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-cfew-primary-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="text-cfew-interface flex items-center gap-3 font-bold border-0 hover:text-cfew-primary-400 cursor-pointer">
          Get Involved
          <span>
            <ChevronDown width={24} height={24} />
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="flex flex-col gap-4 bg-cfew-primary-800 p-7 rounded-xl text-white">
        {GET_INVOLVED_HEADER.map((link) => (
          <DropdownMenu.Item>
            <a key={link.href} href={link.href} className="hover:text-cfew-primary-400">
              {link.label}
            </a>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default Dropdown;
