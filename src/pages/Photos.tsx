import { onMount, Component, createResource, createEffect } from "solid-js";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import lgZoom from "lightgallery/plugins/zoom";
import hash from "lightgallery/plugins/hash";
import pager from "lightgallery/plugins/pager";
import PhotoThumb from "../components/PhotoThumb";

const fetchPhotos = async () => {
  const data = await fetch("photos.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  return data.photos;
};

const Photos: Component = () => {
  const [photos] = createResource(fetchPhotos);
  createEffect(() => {
    if (photos()) {
      let lGallery = lightGallery(document.getElementById("lightgallery"), {
        plugins: [lgZoom, hash, pager],
        licenseKey: "D67E85E6-FA794091-89C7890A-DE58E321",
        customSlideName: true,
        mode: "lg-slide",
        selector: ".thumb",
        speed: 500,
        download: false,
        pager: true,
      });
    }
  });

  return (
    <section id="photos">
      <div id="lightgallery" class="flex flex-wrap">
        <For each={photos()} fallback={<div>Loading...</div>}>
          {(photo) => <PhotoThumb {...photo} />}
        </For>

        {/*
        <PhotoThumb src="images/photos/_V7A6726.webp" width="400" />
        <PhotoThumb src="images/photos/_12A1651.webp" width="160" />
        <PhotoThumb src="images/photos/_12A3178-bw.webp" width="380" />
        <PhotoThumb src="images/photos/_12A0355.webp" width="360" />
        <PhotoThumb src="images/photos/_12A1181.webp" width="170" />
        <PhotoThumb src="images/photos/_12A1211.webp" width="450" />
        <PhotoThumb src="images/photos/_12A1252.webp" width="450" />
        <PhotoThumb src="images/photos/_12A4645.webp" width="120" />
        <PhotoThumb src="images/photos/_12A0202.webp" width="450" />
        <PhotoThumb src="images/photos/_12A1337.webp" width="430" />
        <PhotoThumb src="images/photos/_12A1517.webp" width="350" />
        <PhotoThumb src="images/photos/_12A1572.webp" width="300" />
        <PhotoThumb src="images/photos/_12A4517.webp" width="180" />
        <PhotoThumb src="images/photos/_12A1984.webp" width="300" />
        <PhotoThumb src="images/photos/_12A2781.webp" width="390" />
        <PhotoThumb src="images/photos/_12A2887.webp" width="300" />
        <PhotoThumb src="images/photos/_12A3310.webp" width="350" />
        <PhotoThumb src="images/photos/_12A2850.webp" width="190" />
        <PhotoThumb src="images/photos/_12A3466.webp" width="350" />
        <PhotoThumb src="images/photos/_12A3492.webp" width="230" />
        <PhotoThumb src="images/photos/_12A4484.webp" width="350" />
        <PhotoThumb src="images/photos/_12A4822.webp" width="220" />
        <PhotoThumb src="images/photos/_12A4954.webp" width="350" />
        <PhotoThumb src="images/photos/_12A6225.webp" width="210" />
        <PhotoThumb src="images/photos/_MG_2735.webp" width="350" />
        <PhotoThumb src="images/photos/_MG_2989.webp" width="350" />
        <PhotoThumb src="images/photos/_MG_6302.webp" width="200" />
        <PhotoThumb src="images/photos/_12A4990.webp" width="200" />
        <PhotoThumb src="images/photos/_V7A6551.webp" width="350" />
        <PhotoThumb src="images/photos/colosseum_night.jpg" width="350" />
        <PhotoThumb src="images/photos/_12A4600.webp" width="180" />
        <PhotoThumb src="images/photos/IMG_526.jpeg" width="400" />
        <PhotoThumb src="images/photos/IMG_3197.webp" width="200" />
        <PhotoThumb src="images/photos/IMG_3738.webp" width="450" />
        <PhotoThumb src="images/photos/_12A4679.webp" width="220" />
        <PhotoThumb src="images/photos/IMG_4003.jpg" width="450" />
        */}
      </div>
    </section>
  );
};
export default Photos;
