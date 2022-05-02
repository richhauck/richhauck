import { createSignal, createRoot } from "solid-js";
/**
 * Tracks whether browser is greater or less than 768px in width
 */
const mobileState = () => {
  const [isMobile, setIsMobile] = createSignal(false);
  return { isMobile, setIsMobile };
};

export default createRoot(mobileState);
