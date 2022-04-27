import {
  Component,
  createResource,
  createSignal,
  Suspense,
  Show,
  createEffect,
} from "solid-js";
import lightGallery from "lightgallery";
import fullscreen from "lightgallery/plugins/fullscreen";
import zoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import { useParams } from "solid-app-router";

const fetchProject = async (id) => {
  const data = await fetch(`/projects/${id}/data.json`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  return data;
};
const Project: Component = () => {
  const params = useParams();
  const [projectData] = createResource(params.id, fetchProject);

  createEffect(() => {
    if (projectData()) {
      let lGallery = lightGallery(document.getElementById("project"), {
        plugins: [fullscreen, zoom],
        licenseKey: "D67E85E6-FA794091-89C7890A-DE58E321",
        customSlideName: true,
        fullScreen: true,
        mode: "lg-scale-up",
        selector: ".thumb",
        speed: 500,
        download: false,
      });
    }
  });

  return (
    <section id="project" class="pb-20">
      <Suspense fallback={<p>Loading...</p>}>
        <Show when={projectData()}>
          <div class="w-7/12 m-auto">
            <h1>{projectData().name}</h1>
            <img
              class="border-gray border thumb cursor-pointer"
              src={projectData().images[0]}
              alt={projectData().name}
            />
            <p class="py-10">{projectData().description}</p>

            <div class="columns-2">
              <div>
                <img
                  class="border-darkgray-500 border thumb cursor-pointer"
                  src={projectData().images[1]}
                  alt={projectData().name}
                />
                <p class="py-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur recusandae aut nisi corporis incidunt dolorum ducimus
                  magnam eius doloribus ratione alias, quis culpa minima ea?
                  Incidunt ratione eius inventore perferendis!
                </p>
              </div>
              <div>
                <img
                  class="border-black-500 border thumb cursor-pointer"
                  src={projectData().images[2]}
                  alt={projectData().name}
                />
                <p class="py-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur recusandae aut nisi corporis incidunt dolorum ducimus
                  magnam eius doloribus ratione alias, quis culpa minima ea?
                  Incidunt ratione eius inventore perferendis!
                </p>
              </div>
            </div>
          </div>
        </Show>
      </Suspense>
    </section>
  );
};
export default Project;
