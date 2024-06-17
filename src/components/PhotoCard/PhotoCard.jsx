export const PhotoCard = ({alt, src}) => {
  return (
    <>
      <img src={src.small} alt={alt} />
    </>
  );
};
