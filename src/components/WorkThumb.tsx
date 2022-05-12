import { Component, createEffect, createSignal } from "solid-js";
import workFilter from "../stores/workFilter";
const WorkThumb: Component = (props) => {
  //const { filters } = workFilter;
  //let [classList, setClassList] = createSignal(props.categories.join(" "));

  /*
  createEffect(() => {
    // create classes from categories
    if (filters() !== "") {
      if (!props.categories.includes(filters())) {
        setClassList("hidden");
      } else {
        setClassList(props.categories.join(" "));
      }
    }
  });
  */

  return (
    <a href={`/work/${props.id}`}>
      <figure>
        <img src={props.imageUrl} alt={props.name} />
        <figcaption class="py-2 leading-none">
          <p>
            <strong class="block">{props.name}</strong>
            <span class="text-lightgray text-xs lg:text-base">
              {props.categories.toString()}
            </span>
          </p>
        </figcaption>
      </figure>
    </a>
  );
};
export default WorkThumb;
