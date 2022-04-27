import { onMount, Component, createResource, createEffect } from "solid-js";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import lgZoom from "lightgallery/plugins/zoom";
import hash from "lightgallery/plugins/hash";
import pager from "lightgallery/plugins/pager";
import PhotoThumb from "../components/PhotoThumb";
import photosResource from "../stores/photosResource";

const Photos: Component = () => {
  const { photos } = photosResource;
  /**
   * Initialize light gallery once photos have loaded
   */
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
      </div>
    </section>
  );
};
export default Photos;
