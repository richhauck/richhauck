import { Component, createEffect, onMount, Suspense } from "solid-js";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import lgZoom from "lightgallery/plugins/zoom";
import hash from "lightgallery/plugins/hash";
import pager from "lightgallery/plugins/pager";
import PhotoThumb from "../components/PhotoThumb";
import photosResource from "../stores/photosResource";
import lGLicense from "../stores/lightgalleryLicense";
import Loader from "../components/Loader";

const Photos: Component = () => {
  const { photos } = photosResource;
  onMount(() => {
    document.title = "Photos - Rich Hauck";
  });
  /**
   * Initialize light gallery once photos have loaded
   */
  createEffect(() => {
    if (photos()) {
      let lGallery = lightGallery(document.getElementById("photos"), {
        plugins: [lgZoom, hash, pager],
        licenseKey: lGLicense,
        customSlideName: true,
        mode: "lg-fade",
        selector: ".thumb",
        speed: 500,
        download: false,
      });
    }
  });

  return (
    <section id="photos">
      <div id="lightgallery">
        <Suspense fallback={<Loader />}>
          <For each={photos()} fallback={<div>Loading...</div>}>
            {(photo) => <PhotoThumb {...photo} />}
          </For>
        </Suspense>
      </div>
    </section>
  );
};
export default Photos;
