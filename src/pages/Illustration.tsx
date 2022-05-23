import {
  Component,
  createResource,
  For,
  createEffect,
  Suspense,
  onMount,
} from "solid-js";
import lgZoom from "lightgallery/plugins/zoom";
import hash from "lightgallery/plugins/hash";
import pager from "lightgallery/plugins/pager";
import lightGallery from "lightgallery";
import PhotoThumb from "../components/PhotoThumb";
import Loader from "../components/Loader";
import "lightgallery/css/lightgallery.css";
import lGLicense from "../stores/lightgalleryLicense";

const fetchIllustrations = async () => {
  const data = await fetch("/illustrations.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  return data.illustrations;
};

const Illustration: Component = () => {
  const [illustrations] = createResource(fetchIllustrations);
  onMount(() => {
    document.title = "Illustration - Rich Hauck";
  });
  createEffect(() => {
    if (illustrations()) {
      let lGallery = lightGallery(document.getElementById("illustrations"), {
        plugins: [lgZoom, hash, pager],
        licenseKey: lGLicense,
        customSlideName: true,
        fullScreen: true,
        mode: "lg-fade",
        selector: ".thumb",
        speed: 500,
        download: false,
      });
    }
  });

  return (
    <section id="illustrations">
      <div id="lightgallery" class="px-5 md:px-0">
        <Suspense fallback={<Loader />}>
          <For each={illustrations()} fallback={<div>Loading...</div>}>
            {(illustration) => <PhotoThumb {...illustration} />}
          </For>
        </Suspense>
      </div>
    </section>
  );
};
export default Illustration;
