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
  return { projects };
}

export default createRoot(createProjects);
