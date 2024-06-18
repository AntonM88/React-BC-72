import { PhotoCard } from "../PhotoCard/PhotoCard";
import css from "./PhotosList.module.css";

export const PhotosList = ({ photos, handleModalOpen }) => {
  return (
    <ul className={css.list}>
      {photos.map((item) => (
        <li key={item.id}>
          <PhotoCard {...item} handleModalOpen={handleModalOpen} />
        </li>
      ))}
    </ul>
  );
};
