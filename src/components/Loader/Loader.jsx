import { Bars } from "react-loader-spinner";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.backdrop}>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};
