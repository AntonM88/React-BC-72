import { formatDateToNow } from "helpers/formatDate";
import css from "./BlogCard.module.css";
export const BlogCard = ({
  tag,
  poster,
  title,
  description,
  avatar,
  name,
  postedAt,
}) => {
  return (
    <div className={css.card}>
      <div className={css.card__header}>
        <img src={poster} alt={tag} className={css.poster} />
      </div>
      <div className={css.card__body}>
        <span className={css.tag}>{tag}</span>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>{description}</p>
      </div>
      <div className={css.card__footer}>
        <div className={css.user__box}>
          <img src={avatar} alt={name} className={css.avatar} />
          <div>
            <h3 className={css.user__name}>{name}</h3>
            <small className={css.date}>{formatDateToNow(postedAt)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

//* 2 варіант

// export const BlogCard = ({ article: { poster, tag } }) => {
//   return (
//     <div>
//       <img src={poster} alt={tag} />
//     </div>
//   );
// };
