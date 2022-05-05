import { Component, createEffect, createSignal } from "solid-js";
import workFilter from "../stores/workFilter";
const WorkThumb: Component = (props) => {
  const { filters } = workFilter;
  let [classList, setClassList] = createSignal(props.categories.join(" "));

  createEffect(() => {
    console.log("effect", props.categories.includes(filters()));
    // create classes from categories
    if (filters() !== "") {
      if (!props.categories.includes(filters())) {
        setClassList("hidden");
      } else {
        setClassList(props.categories.join(" "));
      }
    }
  });

  return (
    <a class={classList()} href={`/work/${props.id}`}>
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
