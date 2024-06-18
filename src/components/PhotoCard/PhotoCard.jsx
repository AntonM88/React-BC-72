export const PhotoCard = ({ alt, src, handleModalOpen }) => {
  return (
    <>
      <img
        src={src.small}
        alt={alt}
        onClick={() => handleModalOpen({ alt, src: src.large2x })}
      />
    </>
  );
};
