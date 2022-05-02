import { Component, createEffect } from "solid-js";
import photosResource from "../stores/photosResource";
import { styled } from "solid-styled-components";

const HomeMsg = styled("div")`
  font-family: "DM Serif Text", serif;
  font-size: 3em;
  display: flex;

  span:first-child {
    padding-right: 0.2em;
  }

  .rotatingText {
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .rotatingText:nth-of-type(1) {
    animation: rotate-text-up 1.5s 1.75s;
  }
  .rotatingText:nth-of-type(2) {
    animation: rotate-text-up 1.5s 3s;
  }
  .rotatingText:nth-of-type(3) {
    animation: rotate-text-up 1.5s 4.25s forwards;
  }
  @keyframes rotate-text-up {
    0% {
      transform: rotateY(180deg);
      transform: translate3d(0, 0px, 0);
      opacity: 0;
    }
    20%,
    80% {
      transform: rotateY(180deg);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: rotateY(180deg);
      transform: translate3d(0, 0px, 0);
      opacity: 1;
    }
  }
`;
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
        <div class="absolute bg-black -right-0 top-2/4 p-6 w-[450px]">
          <HomeMsg>
            <span class="inline-block">Hi! I'm a</span>
            <span class="relative inline-block">
              <span class="rotatingText">designer.</span>
              <span class="rotatingText">developer.</span>
              <span class="rotatingText">teacher.</span>
              <span class="rotatingText">artist.</span>
            </span>
          </HomeMsg>
        </div>
      </div>
    </div>
  );
};
export default Home;
