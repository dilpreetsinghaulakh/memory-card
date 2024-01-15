import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY,
});

export default function getImages(imageId) {
  return api.photos.get({ photoId: imageId });
}
