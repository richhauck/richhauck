import { Component, createMemo } from "solid-js";
import { MetaProvider, Title } from "solid-meta";
import { Routes, Route, useLocation } from "solid-app-router";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Illustration from "./pages/Illustration";
import Photos from "./pages/Photos";
import { Transition } from "solid-transition-group";

const App: Component = () => {
  const location = useLocation();

  const setBodyClass = (path) => {
    const pName = path.substring(1, path.length);
    const bodyId = pName === "" ? "home" : pName;
    document.body.setAttribute("id", bodyId);
  };

  const pathname = createMemo(() => setBodyClass(location.pathname));
  return (
    <MetaProvider>
      <main class="bg-gradient-to-b from-black to-transparent text-white px-2">
        <Title>Title of page</Title>
        <header>
          <div class="container mx-auto flex justify-between py-4">
            <div id="logo">
              <a href="/" class="text-3xl tracking-widest">
                Rich Hauck
              </a>
            </div>
            <nav id="primary-nav" class="relative">
              <ul class="flex tracking-widest">
                <li>
                  <a href="/info">Info</a>
                </li>
                <li>
                  <a href="/work">Work</a>
                </li>
                <li>
                  <a href="/illustration">Illustration</a>
                </li>
                <li>
                  <a href="/photos">Photos</a>
                </li>
              </ul>
              <div class="h-1 bg-red mt-2 w-5 absolute" id="highlight"></div>
            </nav>
          </div>
        </header>
        <div id="content" class="container mx-auto min-h-[600px]">
          <Transition
            onBeforeEnter={(el) => (el.style.opacity = 0)}
            onEnter={(el, done) => {
              console.log("on Enter");
              const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
                delay: 600,
                duration: 500,
              });
              a.finished.then(done);
            }}
            onAfterEnter={(el) => (el.style.opacity = 1)}
            onExit={(el, done) => {
              console.log("onExit");
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
            </Routes>
          </Transition>
        </div>
      </main>
    </MetaProvider>
  );
};

export default App;
