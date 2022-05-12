import { Component, onMount } from "solid-js";
import { styled } from "solid-styled-components";
const Bio = styled("div")`
  p {
    text-align: justify;
    margin-bottom: 2em;
  }
  a {
    color: #ff5858;
    text-decoration: none;
    background-position: -100%;
    display: inline-block;
    position: relative;
  }

  a:before {
    content: "";
    background: #ff5858;
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
  }

  a:hover:before {
    width: 100%;
  }
`;

const Info: Component = () => {
  onMount(() => {
    document.title = "About Rich Hauck";
  });
  return (
    <>
      <div class="mt-20 lg:h-[600px] flex items-center justify-center">
        <div class="md:flex md:w-9/12 mx-auto">
          <div class="mx-12 md:w-1/3 md:mx-0 text-center bg-black md:bg-transparent">
            <img
              src="images/rich-hauck.webp"
              class="object-contain m-auto h-80 md:h-auto mb-10"
              alt="Rich Hauck"
            />
          </div>
          <div class="md:w-2/3 flex justify-center items-center">
            <div class="px-12">
              <Bio>
                <h1>Designer. Developer. Illustrator. Teacher.</h1>
                <p>
                  I've always been fascinated with the intersection of design
                  and technology, starting from my college days working in
                  Macromedia Director and Flash (does that make me old?), to
                  designing screensavers and games , to playing with Processing
                  at my graduate program (NYU's ITP), up to the JavaScript
                  frameworks I work with daily today.
                </p>

                <p>
                  I'm currently a lead software engineer with Oliver Wyman, an
                  instructor of interactive media and photography at Harrisburg
                  Area Community College, and on the side still humbly run{" "}
                  <a href="https://www.hauckinteractive.com" target="_blank">
                    Hauck Interactive, Inc.
                  </a>{" "}
                  where my niche has been WordPress custom theme design and
                  development for small and medium businesses. The latter has
                  also afforded me to be an award-winning illustrator for{" "}
                  <a href="https://theburgnews.com" target="_blank">
                    The Burg
                  </a>{" "}
                  and for some fairly{" "}
                  <a href="https://www.torchbearersauces.com" target="_blank">
                    popular hot sauces
                  </a>
                  .
                </p>
              </Bio>
              <div className="flex">
                <a
                  href="https://www.linkedin.com/in/richhauck/"
                  target="_blank"
                >
                  <img
                    class="object-contain mx-2 h-12 w-12"
                    src="images/linkedin.svg"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://dribbble.com/richhauck">
                  <img
                    class="object-contain mx-2 h-12 w-12"
                    src="images/dribbble.svg"
                    alt="Dribbble"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Info;
