import { onMount, Component } from 'solid-js';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const Photos: Component = () => {

    onMount(async () => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#my-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
          });
          lightbox.init();
      
          return () => {
            lightbox.destroy();
            lightbox = null;
          };
    });
      

    return(
        <>
<div className="pswp-gallery" id="my-gallery">

<a
          href={'images/castle.webp'}
          data-pswp-width={'500px'}
          data-pswp-height={'500px'}
          target="_blank"
          rel="noreferrer"
        >
          Photoswipe
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
        <div class="col-span-2"><img src="images/castle.webp" class="object-contain" alt="alt" /></div>
        <div class="col-span-3"><img src="images/castle.webp" class="object-contain" alt="alt" /></div>
        <div class="col-span-1"><img src="images/castle.webp" class="object-cover" alt="alt" /></div>
        <div class="col-span-2"><img src="images/castle.webp" class="object-cover" alt="alt" /></div>
        <div class="col-span-2"><img src="images/castle.webp" class="object-cover" alt="alt" /></div>
</div>


        </>
    )
};
export default Photos;