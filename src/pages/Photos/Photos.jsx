import { useEffect, useState } from "react";
import { PhotosForm } from "components";
import { searchPhotos } from "service/photosApi";
import {
  Container,
  Heading,
  PhotosList,
  Section,
  LoadMore,
  Loader,
  ImageModal,
} from "components";

const Photos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectImg, setSelectImg] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        const { photos, total_results, per_page } = await searchPhotos(
          query,
          page
        );
        if (!total_results) {
          setIsEmpty(true);
          return;
        }
        setPhotos((prev) => [...prev, ...photos]);
        setShowLoadMore(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const onSubmit = (query) => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
    setShowLoadMore(false);
    setIsEmpty(false);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  const handleModalOpen = (img) => {
    setIsOpenModal(true);
    setSelectImg(img);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };

  return (
    <Section>
      <Container>
        <PhotosForm onSubmit={onSubmit} />
        {photos.length > 0 && (
          <PhotosList photos={photos} handleModalOpen={handleModalOpen} />
        )}
        {showLoadMore && <LoadMore onClick={handleLoadMore} />}
        {isEmpty && (
          <Heading title={`We did not found photos with the word ${query} `} />
        )}
        {isLoading && <Loader />}
        {error && <Heading title={`Something went wrong ${error}`} />}

        <ImageModal
          modalIsOpen={isOpenModal}
          closeModal={closeModal}
          selectImg={selectImg}
        />
      </Container>
    </Section>
  );
};

export default Photos;
