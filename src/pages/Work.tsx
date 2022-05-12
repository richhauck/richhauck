import { Component, For, createEffect, Suspense, createSignal } from "solid-js";
import WorkThumb from "../components/WorkThumb";
import projectsResource from "../stores/projectsResource";
import workFilter from "../stores/workFilter";
import { styled } from "solid-styled-components";

/*
const Subnav = styled("nav")`
  button.active {
    color: red;
  }
`;
*/
const Work: Component = () => {
  const { projects } = projectsResource;
  const { filters, setFilters } = workFilter;

  return (
    <section id="work">
      {/*
      <Subnav>
        <ul class="flex">
          <li>
            <button
              class={filters() === "" ? "active" : ""}
              onClick={() => setFilters("")}
            >
              All
            </button>
          </li>
          <li>
            <button
              class={filters() === "branding" ? "active" : ""}
              onClick={() => setFilters("branding")}
            >
              Branding
            </button>
          </li>
          <li>
            <button
              class={filters() === "design" ? "active" : ""}
              onClick={() => setFilters("design")}
            >
              Design
            </button>
          </li>
          <li>
            <button
              class={filters() === "development" ? "active" : ""}
              onClick={() => setFilters("development")}
            >
              Development
            </button>
          </li>
        </ul>
      </Subnav>
      */}

      <div class="min-h-screen flex items-center justify-center">
        <div
          id="work-thumbs"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2"
        >
          <Suspense fallback={<p>Loading...</p>}>
            <For each={projects()} fallback={<div>Loading...</div>}>
              {(project) => <WorkThumb {...project} />}
            </For>
          </Suspense>
        </div>
      </div>
    </section>
  );
};
export default Work;
