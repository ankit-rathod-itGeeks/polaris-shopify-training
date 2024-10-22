import React, { useState, useRef, useEffect } from "react";

function ColorDropdown() {
  const [selectedColor, setSelectedColor] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const colors = ["Red", "Green", "Blue"];

  const handleSelectColor = (color) => {
    setSelectedColor(color);
    // Keep the dropdown open after selection
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Prevent closing the dropdown when clicking outside
      // You can leave this empty to keep it open
    }
  };

  useEffect(() => {
    // Attach event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <label htmlFor="color-dropdown">Choose a color:</label>
      <div
        onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown
        style={{
          border: "1px solid #ccc",
          padding: "5px",
          cursor: "pointer",
        }}
      >
        {selectedColor || "Select a color"}
      </div>
      {isOpen && (
        <ul
          style={{
            border: "1px solid #ccc",
            padding: 0,
            margin: 0,
            listStyleType: "none",
            position: "absolute",
            backgroundColor: "white",
            zIndex: 1,
          }}
        >
          {colors.map((color) => (
            <li
              key={color}
              onClick={() => handleSelectColor(color)}
              style={{ padding: "5px", cursor: "pointer" }}
            >
              {color}
            </li>
          ))}
        </ul>
      )}
      {selectedColor && <p>You selected: {selectedColor}</p>}
    </div>
  );
}

export default ColorDropdown;
