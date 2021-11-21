import React from 'react';
import './Projects.scss';

const Projects = () => {

    return (
            <div className="project_container">
                <main className="project_grid">
                    <section className="content project_item1">
                        <h1 className="project_h1">Projects</h1>
                        {/* <p className="project_p">Lorem ipsum dolor sit amet. Quo perspiciatis sunt qui nemo velit aut eaque accusamus ut commodi porro quo alias praesentium At provident error</p> */}
                    </section>
                    <section className="project_card project_item2 project_flex">
                    <a className="proj_link" href="/splitman"><h2 className="project_h2">Splitman</h2></a>
                    </section>
                    <section className="project_card project_item5 project_flex">
                    <a className="proj_link" href="/pathfinder"><h2 className="project_h2">Path Seeker</h2></a>
                    </section>
                    <section className="project_card project_item8 project_flex" >
                    <a className="proj_link" href="/sudoku"><h2 className="project_h2">Sudoku</h2></a>
                    </section>
                    <section className="project_card project_item11 project_flex">
                    <a className="proj_link" href="/huffman"><h2 className="project_h2">Image Deflater</h2></a>
                    </section>
                </main>
            </div>
    );
}

export default Projects;