import { Component, createEffect } from "solid-js";
import photosResource from "../stores/photosResource";
const Home: Component = () => {
  const { photos, getRandomPhoto } = photosResource;

  createEffect(() => {
    if (photos()) {
      console.log("random", getRandomPhoto().src);
      const randomImgSrc = getRandomPhoto().src;
      document
        .getElementById("bg")
        .setAttribute(
          "style",
          `background:url(${randomImgSrc}) no-repeat; background-size:cover;`
        );
    }
  });

  return (
    <div>
      <div id="bg"></div>
      <div class="relative h-96">
        <div class="absolute bg-black -right-0 top-2/4 p-12">
          <h1>
            Designer.Engineer.
            <br />
            Teacher.Artist.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
