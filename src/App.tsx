import { Component, } from 'solid-js';
import { MetaProvider, Title, Link, Meta } from 'solid-meta';
import { Routes, Route } from "solid-app-router";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Work from "./pages/Work";
import Illustration from "./pages/Illustration";
import Photos from "./pages/Photos";

const App: Component = () => {

  return (
    <MetaProvider>
      <main class="bg-gradient-to-b from-black to-transparent text-white px-2">
      <Title>Title of page</Title>
        <header>
          <div class="container mx-auto flex justify-between py-4">
          <div id="logo"><a href="/" class="text-3xl tracking-widest">------</a></div>
          <nav>
            <ul class="flex gap-6 tracking-widest">
              <li><a class="active" href="/info">Info</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="/illustration">Illustration</a></li>
              <li><a href="/photos">Photos</a></li>
            </ul>
          </nav>
          </div>
        </header>
        <div id="content" class="container mx-auto min-h-[600px]">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/illustration" element={<Illustration/>}/>
          <Route path="/photos" element={<Photos/>}/>
        </Routes>
        </div>
      </main>
    </MetaProvider>
  );
};

export default App;
