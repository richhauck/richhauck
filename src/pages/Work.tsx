import type { Component } from 'solid-js';
import WorkThumb from '../components/WorkThumb';
const Work: Component = () => {
    return(
        <section id="work">
           
            <div class="min-h-screen flex items-center justify-center">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                <WorkThumb/>
                </div>
            </div>

        </section>
    )
};
export default Work;