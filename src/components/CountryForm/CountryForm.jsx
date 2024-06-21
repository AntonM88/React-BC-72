import { FiSearch } from "react-icons/fi";
import s from "./CountryForm.module.css";
import { useState } from "react";

const regions = [
  { id: "africa", value: "africa", name: "Africa" },
  { id: "america", value: "america", name: "America" },
  { id: "asia", value: "asia", name: "Asia" },
  { id: "europe", value: "europe", name: "Europe" },
  { id: "oceania", value: "oceania", name: "Oceania" },
];

export const CountryForm = ({ onSubmit }) => {
  const [region, setRegion] = useState("");

  const onHandleChange = (e) => {
    setRegion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!region) {
      alert("Please, select a region!");
      return;
    }
    onSubmit(region);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <select
        aria-label="select"
        className={s.select}
        name="region"
        onChange={onHandleChange}
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map((region) => (
          <option value={region.value} key={region.id}>
            {region.name}
          </option>
        ))}
      </select>
      <button type="submit" className={s.button}>
        <FiSearch />
      </button>
    </form>
  );
};
