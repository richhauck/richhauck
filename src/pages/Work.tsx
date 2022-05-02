import {
  Component,
  createResource,
  For,
  createSignal,
  Suspense,
} from "solid-js";
import WorkThumb from "../components/WorkThumb";
import projectsResource from "../stores/projectsResource";

const Work: Component = () => {
  const { projects } = projectsResource;
  return (
    <section id="work">
      <nav id="subnav">
        <ul class="flex">
          <li>
            <a href="#">Branding</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Development</a>
          </li>
        </ul>
      </nav>
      <div class="min-h-screen flex items-center justify-center">
        <div
          id="work-thumbs"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2"
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
