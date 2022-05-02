import { createRoot, createResource } from "solid-js";
/**
 * Retrieves list of photos.
 * @returns object
 */
const fetchPhotos = async () => {
  const data = await fetch("/photos.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  return data.photos;
};

function createPhotos() {
  const [photos] = createResource(fetchPhotos);
  const getRandomPhoto = () => {
    const widePics = photos().filter((photo) => photo.width > 300);
    const rNum = Math.floor(Math.random() * widePics.length); // only get images with large width
    return widePics[rNum];
  };
  return { photos, getRandomPhoto };
}

export default createRoot(createPhotos);
