import { Component, createMemo, createSignal, createEffect } from "solid-js";
import { Routes, Route, useLocation, useNavigate } from "solid-app-router";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Illustration from "./pages/Illustration";
import Photos from "./pages/Photos";
import NotFound from "./pages/NotFound";
import { Transition } from "solid-transition-group";
import { styled } from "solid-styled-components";
import mobileState from "./stores/mobileState";

const PrimaryNav = styled("nav")`
  height: 25px;
  position: relative;
  display: block;
  button {
    padding: 0 0 0 3em;
    transition: all 0.5s ease-out;
  }
  &:hover button {
    opacity: 0.2;
  }
  button:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    height: auto;
    font-size: 1.5em;
    margin: 2em 0 0 0;
    padding: 0;
    text-align: center;
    ul {
      flex-direction: column;
    }
    li {
      margin: 1em 0;
    }
    button {
      padding: 0;
    }
  }
`;

const App: Component = () => {
  const { setIsMobile } = mobileState;
  const location = useLocation();
  const [isActive, setIsActive] = createSignal("");
  const navigate = useNavigate();

  createEffect(() => {
    const onWindowResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
        if (document.body.classList.contains("nav-open")) {
          document.body.classList.remove("nav-open");
        }
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", onWindowResize);
    // test upon first load
    onWindowResize();
  });
  /**
   * Toggles class on body
   */
  const toggleNav = () => {
    const activeState = isActive() === "" ? "is-active" : "";
    setIsActive(activeState);
    document.body.classList.toggle("nav-open");
  };
  const closeMobileNav = () => {
    setIsActive("");
    if (document.body.classList.contains("nav-open")) {
      document.body.classList.remove("nav-open");
    }
  };
  /**
   * Pulls page slug to use as body#id
   * @param path
   */
  const setBodyId = (path) => {
    const pName = path.substring(1, path.length);
    const bodyId = pName === "" ? "home" : pName;
    document.body.setAttribute("id", bodyId);
  };

  const pathname = createMemo(() => setBodyId(location.pathname));
  return (
    <main class="relative text-white transition-opacity mb-10">
      <header class="uppercase px-[20px] relative fixed z-20 bg-gradient-to-b from-gray to-transparent h-30">
        <div class="container mx-auto flex flex-col md:flex-row justify-between py-4">
          <div id="logo">
            <a href="/" class="swipe text-3xl tracking-widest">
              Rich Hauck
            </a>
          </div>

          <button
            id="nav-toggle"
            class={`absolute z-50 right-1 md:-right-3 top-2 hamburger md:invisible hamburger--slider ${isActive()}`}
            type="button"
            onClick={toggleNav}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>

          <PrimaryNav id="primary-nav">
            <ul class="flex tracking-widest">
              <li>
                <button
                  class="uppercase tracking-widest"
                  onClick={() => {
                    closeMobileNav();
                    navigate("/info");
                  }}
                >
                  Info
                </button>
              </li>
              <li>
                <button
                  class="uppercase tracking-widest"
                  onClick={() => {
                    closeMobileNav();
                    navigate("/work");
                  }}
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  class="uppercase tracking-widest"
                  onClick={() => {
                    closeMobileNav();
                    navigate("/illustration");
                  }}
                >
                  Illustration
                </button>
              </li>
              <li>
                <button
                  class="uppercase tracking-widest"
                  onClick={() => {
                    closeMobileNav();
                    navigate("/photos");
                  }}
                >
                  Photos
                </button>
              </li>
            </ul>
            <div
              class="h-1 bg-red mt-2 w-5 absolute invisible md:visible"
              id="highlight"
            ></div>
          </PrimaryNav>
        </div>
      </header>
      <div id="content" class="container mx-auto min-h-[600px]">
        <Transition
          onBeforeEnter={(el) => (el.style.opacity = 0)}
          onEnter={(el, done) => {
            const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
              delay: 600,
              duration: 500,
            });
            a.finished.then(done);
          }}
          onAfterEnter={(el) => (el.style.opacity = 1)}
          onExit={(el, done) => {
            const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 600,
            });
            a.finished.then(done);
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<Project />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Transition>
      </div>
    </main>
  );
};

export default App;
