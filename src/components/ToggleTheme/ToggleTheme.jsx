import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "themeContext/themeContext";
import s from "./ToggleTheme.module.css";
import { GiNightSky } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa6";

export const ToggleTheme = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className={s.box}>
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark"}
        uncheckedIcon={<GiNightSky className={s.night} />}
        checkedIcon={<FaRegLightbulb className={s.light} />}
        uncheckedHandleIcon={<FaRegLightbulb className={s.light} />}
        checkedHandleIcon={<GiNightSky className={s.night} />}
      />
    </div>
  );
};
