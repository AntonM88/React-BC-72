import { useEffect, useState } from "react";
import { PhotosForm } from "components";
import { searchPhotos } from "service/photosApi";

export const Photos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!query) return;
    searchPhotos(query, page);
  }, [query, page]);
  const onSubmit = (query) => {
    setQuery(query);
  };
  return (
    <div>
      <PhotosForm onSubmit={onSubmit} />
    </div>
  );
};
