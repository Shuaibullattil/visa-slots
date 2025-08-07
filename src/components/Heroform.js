import { useState } from 'react'
import Dropdown from '../components/dropdown'
import Flag from 'react-world-flags'

const countries = [
  { value: "estonia", label: "Estonia", countryCode: "EE" },
  { value: "ireland", label: "Ireland", countryCode: "IE" },
  { value: "netherland", label: "Netherlands", countryCode: "NL" },
];

const visaTypes = [
  { value: "business", label: "Business" },
  { value: "others", label: "Others (Except Tourism)" },
  { value: "family", label: "Family and Friends" },
  { value: "tourism", label: "Tourism" },
];

const applications = [
  { value: "finland", label: "Finland", countryCode: "FI" },
  { value: "france", label: "France", countryCode: "FR" },
  { value: "uk", label: "United Kingdom", countryCode: "GB" },
  { value: "ukraine", label: "Ukraine", countryCode: "UA" },
  { value: "italy", label: "Italy", countryCode: "IT" },
];

const cities = [
  { value: "birmingham", label: "Birmingham" },
  { value: "cardiff", label: "Cardiff" },
  { value: "edinburgh", label: "Edinburgh" },
  { value: "london", label: "London" },
  { value: "manchester", label: "Manchester" },
];

export default function HeroForm() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedVisaType, setSelectedVisaType] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const handleVisaTypeChange = (value) => {
    setSelectedVisaType(value);
  };

  const handleApplicationChange = (value) => {
    setSelectedApplication(value);
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  return (
    <div className="flex flex-col items-start justify-center space-y-4 w-full md:pr-32">
      {/* First row: Going to & Visa Type */}
      <div className="flex flex-col items-start justify-center space-y-4 w-full">
        <div className="flex flex-row gap-1 w-full">
          <div className="flex-[0_0_60%] relative">
            <Dropdown
              label="Going to"
              options={countries}
              onChange={handleCountryChange}
            />
          </div>

          <div className="flex-[0_0_37%] mx-2 relative">
            <Dropdown
              label="Visa type"
              options={visaTypes}
              onChange={handleVisaTypeChange}
            />
          </div>
        </div>
      </div>

      {/* Second row: Application & City */}
      <div className="flex flex-row md:flex-row gap-4 w-full">
        <div className="flex-1 relative">
          <Dropdown
            label="Select an application"
            options={applications}
            onChange={handleApplicationChange}
          />
        </div>

        <div className="flex-1 relative">
          <Dropdown
            label="Select application city"
            options={cities}
            onChange={handleCityChange}
          />
        </div>
      </div>

      {/* Third row: Button */}
      <div className="w-full">
        <button className="w-full bg-[#F66F4D] text-white py-3 rounded-full font-semibold shadow hover:scale-105 active:scale-95 transition duration-300 h-[64px] md:h-[70px]">
          Find Appointments
        </button>
      </div>
    </div>
  );
}