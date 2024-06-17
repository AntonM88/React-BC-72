import {useEffect, useState} from "react";
import {PhotosForm} from "components";
import {searchPhotos} from "service/photosApi";
import {Container, PhotosList, Section} from "../../components";
import {LoadMore} from "../../components/LoadMore/LoadMore";

export const Photos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const {photos, total_results, per_page} = await searchPhotos(query, page);
      setPhotos((prev) => [...prev, ...photos]);
      setShowLoadMore(page < Math.ceil(total_results / per_page));
    };
    getData();
  }, [query, page]);

  const onSubmit = (query) => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
    setShowLoadMore(false);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Section>
      <Container>
        <PhotosForm onSubmit={onSubmit} />
        {photos.length > 0 && <PhotosList photos={photos} />}
        {showLoadMore && <LoadMore onClick={handleLoadMore} />}
      </Container>
    </Section>
  );
};
