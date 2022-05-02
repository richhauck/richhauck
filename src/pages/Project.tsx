import {
  Component,
  createResource,
  Suspense,
  Show,
  createEffect,
  createSignal,
  createMemo,
} from "solid-js";
import { Link, useLocation } from "solid-app-router";
import lightGallery from "lightgallery";
import fullscreen from "lightgallery/plugins/fullscreen";
import zoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import { useParams } from "solid-app-router";
import projectsResource from "../stores/projectsResource";
import lGLicense from "../stores/lightgalleryLicense";
/**
 * Retrieves project data
 * @param slug {string}
 * @returns {object}
 */
const fetchProject = async (slug) => {
  const data = await fetch(`/projects/${slug}/data.json`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  return data;
};
/**
 * Renders individual project
 */
const Project: Component = () => {
  const params = useParams();
  const [pId, setPId] = createSignal(params.id);
  const [prevProject, setPrevProject] = createSignal();
  const [nextProject, setNextProject] = createSignal();
  const { projects } = projectsResource;

  let [projectData] = createResource(pId, fetchProject);

  // Ensure correct project has loaded, otherwise initialize lightgallery
  createEffect(() => {
    if (pId() !== params.id) {
      setPId(params.id);
    } else {
      if (projectData()) {
        let lGallery = lightGallery(document.getElementById("project"), {
          plugins: [fullscreen, zoom],
          licenseKey: lGLicense,
          customSlideName: true,
          fullScreen: true,
          mode: "lg-scale-up",
          selector: ".thumb",
          speed: 500,
          download: false,
        });
        const index = projects().findIndex((item) => item.id === params.id);
        setNextProject(projects()[index + 1]);
        setPrevProject(projects()[index - 1]);
      }
    }
  });

  return (
    <section id="project" class="pb-20">
      <Suspense fallback={<p>Loading...</p>}>
        <Show when={projectData()}>
          <div class="w-7/12 m-auto">
            {pId()}
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
          <div class="columns-2">
            <div>
              {prevProject() !== undefined ? (
                <Link href={`/work/${prevProject().id}`}>
                  {prevProject().name}
                </Link>
              ) : (
                ""
              )}
            </div>
            <div>
              {nextProject() !== undefined ? (
                <Link href={`/work/${nextProject().id}`}>
                  {nextProject().name}
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </Show>
      </Suspense>
    </section>
  );
};
export default Project;
