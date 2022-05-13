import {
  Component,
  createResource,
  Suspense,
  Show,
  createEffect,
  createSignal,
} from "solid-js";
import { Link } from "solid-app-router";
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
        // Update title
        document.title = `${projectData().name} - Rich Hauck`;

        if (projects()) {
          const index = projects().findIndex((item) => item.id === params.id);
          setNextProject(projects()[index + 1]);
          setPrevProject(projects()[index - 1]);
        }
      }
    }
  });

  return (
    <section id="project" class="pb-20">
      <Suspense fallback={<p>Loading...</p>}>
        <Show when={projectData()}>
          <div class="w-7/12 m-auto">
            <h1>{projectData().name}</h1>
            <img
              class="border-black border thumb cursor-pointer"
              src={projectData().images[0]}
              alt={projectData().name}
            />
            <p class="py-10">{projectData().description}</p>

            {projectData().images.length > 3 && (
              <div class="columns-2 mb-4">
                <div>
                  <img
                    class="border-black border thumb cursor-pointer"
                    src={projectData().images[1]}
                    alt={projectData().name}
                  />
                </div>
                <div>
                  <img
                    class="border-black border thumb cursor-pointer"
                    src={projectData().images[2]}
                    alt={projectData().name}
                  />
                </div>
              </div>
            )}
          </div>
          {projectData().images.length === 3 && (
            <Show when={projectData().images[1]}>
              <div class="w-7/12 m-auto mb-10">
                <img
                  class="border-black border thumb cursor-pointer"
                  src={projectData().images[1]}
                  alt={projectData().name}
                />
              </div>
            </Show>
          )}

          <Show when={projectData().images[3]}>
            <div class="w-7/12 m-auto mb-10">
              <img
                class="border-black border thumb cursor-pointer"
                src={projectData().images[3]}
                alt={projectData().name}
              />
            </div>
          </Show>

          <Show when={projectData().images[4]}>
            <div class="w-7/12 m-auto mb-10">
              <img
                class="border-black border thumb cursor-pointer"
                src={projectData().images[4]}
                alt={projectData().name}
              />
            </div>
          </Show>

          <Show when={projectData().images[5]}>
            <div class="w-7/12 m-auto">
              <img
                class="border-black border thumb cursor-pointer"
                src={projectData().images[5]}
                alt={projectData().name}
              />
            </div>
          </Show>

          <footer class="columns-2 text-1xl">
            <div class="w-full h-8">
              {prevProject() !== undefined ? (
                <Link
                  class="swipe flex flex-row p-2"
                  href={`/work/${prevProject().id}`}
                >
                  <img
                    class="w-[20px] mr-2"
                    src="/images/arrow-back.svg"
                    alt="back"
                  />
                  <span class="block">{prevProject().name}</span>
                </Link>
              ) : (
                ""
              )}
            </div>
            <div class="w-full h-8">
              {nextProject() !== undefined ? (
                <Link
                  class="bg-black swipe flex flex-row justify-end p-2 opacity-4"
                  href={`/work/${nextProject().id}`}
                >
                  <span class="block mr-2">{nextProject().name}</span>
                  <img
                    class="w-[20px]"
                    src="/images/arrow-forward.svg"
                    alt="forward"
                  />
                </Link>
              ) : (
                ""
              )}
            </div>
          </footer>
        </Show>
      </Suspense>
    </section>
  );
};
export default Project;
