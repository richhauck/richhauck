import type { Component } from 'solid-js';
const WorkThumb: Component = () => {
    return(
        <a href="#">
            <figure>
                <img src="images/castle.webp" alt="alt" />
                <figcaption class='py-2'>
                    <p>
                        <strong class='block'>The Burg News</strong>
                        <span>2018</span>
                    </p>
                </figcaption>
            </figure>
        </a>
        )
};
export default WorkThumb;