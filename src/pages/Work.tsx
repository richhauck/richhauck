import { Component, createResource, For, createSignal } from "solid-js";
import WorkThumb from "../components/WorkThumb";

const fetchProjects = async () => {
  const data = await fetch("projects.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  return data.projects;
};

const Work: Component = () => {
  const [projects] = createResource(fetchProjects);
  return (
    <section id="work">
      <div class="min-h-screen flex items-center justify-center">
        <div
          id="work-thumbs"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2"
        >
          <For each={projects()} fallback={<div>Loading...</div>}>
            {(project) => <WorkThumb {...project} />}
          </For>
        </div>
      </div>
    </section>
  );
};
export default Work;
