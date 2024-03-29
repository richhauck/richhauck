import { Component, For, Suspense, onMount } from "solid-js";
import WorkThumb from "../components/WorkThumb";
import projectsResource from "../stores/projectsResource";
import Loader from "../components/Loader";

const Work: Component = () => {
  const { projects } = projectsResource;
  onMount(() => {
    document.title = "Design and Development Work - Rich Hauck";
  });
  return (
    <section id="work">
      <div class="min-h-screen flex items-center justify-center">
        <div
          id="work-thumbs"
          class="grid grid-cols-1 px-5 md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2"
        >
          <Suspense fallback={<Loader />}>
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
