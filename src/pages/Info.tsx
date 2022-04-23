import { Component } from "solid-js";

const Info: Component = () => {
  return (
    <>
      <div class="h-[600px] flex items-center justify-center">
        <div class="flex w-1/2 mx-auto">
          <div class="w-1/3 flex justify-center items-center">
            <img src="images/rich-hauck.webp" alt="Rich Hauck" />
          </div>
          <div class="w-2/3 flex justify-center items-center">
            <div class="p-4">
              <h1>Rich Hauck</h1>
              <p>
                Rich Hauck is the Creative Director of Hauck Interactive and has
                been designing and developing websites, kiosks, and games since
                1999. His work has been featured in the Creativity 33 and 34
                annuals, The Communicator Awards, Prix Ars Electronica, and the
                Central Penn Business Journal’s "Best of the Web Awards". Rich
                is a graduate of Penn State University and the Interactive
                Telecommunications Program (ITP) New York University Tisch
                School of the Arts. He is an adjunct instructor in Harrisburg
                Area Community College’s graphic design program, has been the
                primary organizer of BarCamp Harrisburg, and has been a mentor
                at Harrisburg's Startup Weekend. View profile on
                <a
                  href="https://www.linkedin.com/in/richhauck/"
                  target="_blank"
                >
                  <img
                    class="object-contain h-12 w-12"
                    src="images/linkedin.svg"
                    alt="LinkedIn"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Info;
