import { Component, createEffect, createSignal } from "solid-js";
import mobileState from "../stores/mobileState";

const PhotoThumb: Component = (props) => {
  const initialWidth = props.width ? `${props.width}px` : "450px";
  const { isMobile, setIsMobile } = mobileState;
  const [thumbWidth, setThumbWidth] = createSignal(initialWidth);

  createEffect(() => {
    if (isMobile()) {
      setThumbWidth("100%");
    } else {
      setThumbWidth(initialWidth);
    }
  });

  const permalink = props.title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  return (
    <a
      class="thumb"
      href={props.src}
      data-src={props.src}
      data-slide-name={permalink}
      data-sub-html={`<h3>${props.title}</h3><p>${props.caption}</p>`}
      style={{
        "background-size": "cover",
        "background-image": `url(${props.src})`,
        "background-position": "center",
        width: `${thumbWidth()}`,
        height: "350px",
        margin: "0 5px 5px 0",
        flex: "1 0 auto",
        display: "flex",
      }}
    ></a>
  );
};
export default PhotoThumb;
