import type { Component } from "solid-js";
const WorkThumb: Component = (props) => {
  return (
    <a href={`/work/${props.id}`}>
      <figure>
        <img src={props.imageUrl} alt={props.name} />
        <figcaption class="py-2">
          <p>
            <strong class="block">{props.name}</strong>
            <span>2018</span>
          </p>
        </figcaption>
      </figure>
    </a>
  );
};
export default WorkThumb;
