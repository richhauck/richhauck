import { onMount, Component } from "solid-js";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Photos: Component = () => {
  onMount(async () => {
    let lGallery = lightGallery(document.getElementById("lightgallery"), {
      plugins: [lgZoom, lgThumbnail],
      licenseKey: "D67E85E6-FA794091-89C7890A-DE58E321",
      customSlideName: true,
      mode: "lg-slide",
      speed: 500,
      download: false,
    });
  });

  return (
    <div>
      <div id="lightgallery">
        <a
          href="images/castle.webp"
          data-sub-html="<h3>Castle</h3><p>Example here.</p>"
        >
          <img alt="Castle" src="images/castle.webp" />
        </a>
      </div>
      <section id="photos">
        <div class="masonry-with-columns" id="masonry-with-columns">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
        </div>
      </section>
      <div class="grid grid-flow-row-dense grid-cols-10 grid-rows-1">
        <div class="col-span-2">
          <a href={"images/castle.webp"} target="_blank" rel="noreferrer">
            <img src="images/castle.webp" class="object-contain" alt="alt" />
          </a>
        </div>
        <div class="col-span-3">
          <a href={"images/castle.webp"} target="_blank" rel="noreferrer">
            <img src="images/castle.webp" class="object-contain" alt="alt" />
          </a>
        </div>
        <div class="col-span-1">
          <a href={"images/castle.webp"} target="_blank" rel="noreferrer">
            <img src="images/castle.webp" class="object-cover" alt="alt" />
          </a>
          <a href={"images/castle.webp"} target="_blank" rel="noreferrer">
            <img src="images/castle.webp" class="object-cover" alt="alt" />
          </a>
          <a href={"images/castle.webp"} target="_blank" rel="noreferrer">
            <img src="images/castle.webp" class="object-cover" alt="alt" />
          </a>
        </div>
        <div class="col-span-2">
          <a href={"images/castle.webp"} target="_blank" rel="noreferrer">
            <img src="images/castle.webp" class="object-cover" alt="alt" />
          </a>
        </div>
        <div class="col-span-2">
          <a href={"images/castle.webp"} target="_blank" rel="noreferrer">
            <img src="images/castle.webp" class="object-cover" alt="alt" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Photos;
