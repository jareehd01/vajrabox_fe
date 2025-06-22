import React, { useState } from "react";

const Filters = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [selectedCuts, setSelectedCuts] = useState([]);
  const [selectedClarity, setSelectedClarity] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [caratRange, setCaratRange] = useState([0.5, 5]);

  // Dropdown open/close state
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleFilter = (filterArray, setFilterArray, value) => {
    setFilterArray((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const diamondCuts = ["Round", "Princess", "Cushion", "Emerald", "Oval"];
  const clarityGrades = ["FL", "IF", "VVS1", "VVS2", "VS1"];
  const colorGrades = ["D", "E", "F", "G", "H"];
  const ringStyles = ["Solitaire", "Halo", "Three-stone", "Vintage"];
  const metalTypes = ["White Gold", "Yellow Gold", "Rose Gold", "Platinum"];

  const Section = ({ title, id, children }) => (
    <div className="mb-4 border-b pb-2">
      <button
        onClick={() => toggleSection(id)}
        className="w-full text-left font-heading text-lg text-emerald-900 flex justify-between items-center"
      >
        {title}
        <span>{openSection === id ? "−" : "+"}</span>
      </button>
      <div
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          openSection === id ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="w-full md:w-1/4 space-y-4 bg-white p-6 rounded-lg">
      <h3 className="font-body font-semibold text-emerald-950 text-2xl mb-4">Filters</h3>

      <Section title="Price" id="price">
        <div className="flex justify-between mb-2 text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="500"
          max="5000"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full mb-2"
        />
        <input
          type="range"
          min="500"
          max="5000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full"
        />
      </Section>

      <Section title="Diamond Cut" id="cut">
        {diamondCuts.map((cut) => (
          <label key={cut} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedCuts.includes(cut)}
              onChange={() => toggleFilter(selectedCuts, setSelectedCuts, cut)}
              className="mr-2"
            />
            {cut}
          </label>
        ))}
      </Section>

      <Section title="Clarity" id="clarity">
        {clarityGrades.map((grade) => (
          <label key={grade} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedClarity.includes(grade)}
              onChange={() =>
                toggleFilter(selectedClarity, setSelectedClarity, grade)
              }
              className="mr-2"
            />
            {grade}
          </label>
        ))}
      </Section>

      <Section title="Color" id="color">
        {colorGrades.map((grade) => (
          <label key={grade} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedColor.includes(grade)}
              onChange={() =>
                toggleFilter(selectedColor, setSelectedColor, grade)
              }
              className="mr-2"
            />
            {grade}
          </label>
        ))}
      </Section>

      <Section title="Carat" id="carat">
        <div className="flex justify-between mb-2 text-sm">
          <span>{caratRange[0]}ct</span>
          <span>{caratRange[1]}ct</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.1"
          value={caratRange[0]}
          onChange={(e) => setCaratRange([+e.target.value, caratRange[1]])}
          className="w-full mb-2"
        />
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.1"
          value={caratRange[1]}
          onChange={(e) => setCaratRange([caratRange[0], +e.target.value])}
          className="w-full"
        />
      </Section>

      <Section title="Metal Type" id="metal">
        {metalTypes.map((metal) => (
          <label key={metal} className="flex items-center text-sm mb-1">
            <input type="checkbox" className="mr-2" />
            {metal}
          </label>
        ))}
      </Section>

      <Section title="Ring Style" id="ringStyle">
        {ringStyles.map((style) => (
          <label key={style} className="flex items-center text-sm mb-1">
            <input type="checkbox" className="mr-2" />
            {style}
          </label>
        ))}
      </Section>
    </div>
  );
};

export default Filters;
