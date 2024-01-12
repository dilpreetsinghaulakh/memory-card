import { createApi } from "unsplash-js";
import dotenv from "dotenv";

// dotenv.config();

const api = createApi({
  // accessKey: process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY,
  accessKey: "wmFs2tvZmXd332TqpamltXnzrhZsPLIiVfXS-IGzfHU",
});

export default function getImages(imageId) {
  return api.photos.get({ photoId: imageId });
}
