import { createSignal, createMemo, createRoot } from "solid-js";

function createProjects() {
    /*
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  const doubleCount = createMemo(() => count() * 2);
  return { count, doubleCount, increment };
  */


async function fetchData(source, { value, refetching }) {

    let projects = [];
    await fetch('projects.json', {
})
.then(response => response.json())
.then(data => {
    projects =[...data.projects];
  console.log('Success:', data.projects);
})
.catch((error) => {
  console.error('Error:', error);
});


return {projects}
}





export default createRoot(createProjects); 