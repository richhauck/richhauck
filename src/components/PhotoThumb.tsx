import type { Component } from "solid-js";

const PhotoThumb: Component = (props) => {
  const aWidth = props.width ? `${props.width}px` : "450px";
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
        width: `${aWidth}`,
        height: "300px",
        margin: "0 5px 5px 0",
        flex: "1 0 auto",
        display: "flex",
      }}
    ></a>
  );
};
export default PhotoThumb;
