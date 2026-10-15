import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  SelectContainer,
  SelectButton,
  OptionsList,
  OptionButton,
} from "./styles";

type CategorySelectProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export function CategorySelect({
  value,
  options,
  onChange,
}: CategorySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  function openSelect() {
    const selectedIndex = options.indexOf(value);

    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setIsOpen(true);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!isOpen) {
        openSelect();
        return;
      }

      setActiveIndex((currentIndex) =>
        Math.min(currentIndex + 1, options.length - 1)
      );
    }

    if (event.key === "ArrowUp" && isOpen) {
      event.preventDefault();

      setActiveIndex((currentIndex) => Math.max(currentIndex - 1, 0));
    }

    if (event.key === "Enter" && isOpen) {
      event.preventDefault();

      const selectedCategory = options[activeIndex];

      if (selectedCategory !== undefined) {
        handleSelect(selectedCategory);
      }
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSelect(category: string) {
    onChange(category);
    setIsOpen(false);
  }

  return (
    <SelectContainer ref={containerRef} onKeyDown={handleKeyDown}>
      <SelectButton
        type="button"
        aria-label="Selecionar categoria"
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            openSelect();
          }
        }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{value || "Selecione"}</span>
        <ChevronDown size={16} />
      </SelectButton>

      {isOpen && (
        <OptionsList role="listbox">
          {options.map((category, index) => (
            <OptionButton
              key={category}
              type="button"
              role="option"
              aria-selected={value === category}
              $active={activeIndex === index}
              onClick={() => handleSelect(category)}
            >
              {category}
            </OptionButton>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  );
}
