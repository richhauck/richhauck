import { Component, createEffect, onMount } from "solid-js";
import photosResource from "../stores/photosResource";
import { styled } from "solid-styled-components";

const HomeMsg = styled("div")`
  font-family: "DM Serif Text", serif;
  font-size: 3em;
  display: flex;
  @media (max-width: 768px) {
    font-size: 2em;
  }

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

  onMount(() => {
    document.title = "Rich Hauck - Designer and Software Engineer";
  });

  createEffect(() => {
    if (photos()) {
      const randomImgSrc = getRandomPhoto().src;
      document
        .getElementById("bg")
        .setAttribute(
          "style",
          `background:url(${randomImgSrc}) no-repeat; background-size:cover; background-position: center;`
        );
    }
  });

  return (
    <div>
      <div id="bg"></div>
      <div class="relative h-96">
        <div class="absolute bg-black -right-0 top-1/3 p-6 max-w-xl">
          <HomeMsg>
            <span class="text-right inline-block">
              Hi! I design, prototype, and build interactive experiences.
            </span>
          </HomeMsg>
        </div>
      </div>
    </div>
  );
};
export default Home;
