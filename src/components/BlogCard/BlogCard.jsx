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
    <div>
      <img src={poster} alt={tag} />
      <div>
        <span>{tag}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <img src={avatar} alt={name} />
          <div>
            <h3>{name}</h3>
            <small>{postedAt}</small>
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
