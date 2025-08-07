// components/Dropdown.jsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Flag from 'react-world-flags';

export default function Dropdown({ label = "Select", options = [], onChange }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  const renderFlag = (option) => {
    if (option.countryCode) {
      return (
        <Flag 
          code={option.countryCode} 
          className="w-6 h-4 mr-3 flex-shrink-0 rounded-sm"
        />
      );
    }
    return null;
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="w-full px-4 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 bg-white h-[64px] md:h-[70px] appearance-none border-2 hover:border-[#F66F4D] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F66F4D] flex items-center justify-between pr-4"
        >
          <div className="flex items-center">
            {selected && renderFlag(selected)}
            <span className="text-left">{selected ? selected.label : label}</span>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] p-2"
          align="start"
          sideOffset={5}
        >
          {options.map((option, index) => (
            <DropdownMenu.Item
              key={index}
              onSelect={() => handleSelect(option)}
              className="flex items-center px-3 py-3 text-[14px] md:text-[16px] text-gray-700 hover:bg-gray-50 cursor-pointer rounded-md outline-none transition-colors duration-200 focus:bg-gray-50"
            >
              {renderFlag(option)}
              <span>{option.label}</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}