import { createSignal, createRoot } from "solid-js";
/**
 * Monitors filter button clicked by user to toggle visibility of work thumbnail
 */
const workFilter = () => {
  const [filters, setFilters] = createSignal("");
  return { filters, setFilters };
};

export default createRoot(workFilter);
