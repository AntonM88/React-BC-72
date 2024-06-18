import { createClient } from "pexels";

const client = createClient(
  "563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74"
);

export const searchPhotos = (query, page) => {
  return client.photos.search({
    query,
    per_page: 15,
    page,
    orientation: "landscape",
    color: "black",
  });
};
