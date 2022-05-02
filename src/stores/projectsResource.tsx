import { createRoot, createResource } from "solid-js";
/**
 * Retrieves list of projects.
 * @returns object
 */
const fetchProjects = async () => {
  const data = await fetch("/projects.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  return data.projects;
};
function createProjects() {
  const [projects] = createResource(fetchProjects);
  const getAdjacent = (projects, slug) => {
    console.log("projects", projects);
    /*
    const index = projects.findIndex((item) => item.id === slug);
    console.log("slug", index);
    */
  };
  return { projects, getAdjacent };
}

export default createRoot(createProjects);
