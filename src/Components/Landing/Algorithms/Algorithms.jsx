import React from 'react';
import './Algorithms.scss';

const Algorithms = () => {

    return (
        <>
            <div className="project_container">
                <main className="project_grid">
                    <section className="content project_item1">
                        <h1 className="project_h1">Algorithms</h1>
                        <p className="project_p">Lorem ipsum dolor sit amet. Quo perspiciatis sunt qui nemo velit aut eaque accusamus ut commodi porro quo alias praesentium At provident error</p>
                    </section>
                    <section className="project_card project_item2 project_flex">
                        <h2 className="project_h2">Splitwise</h2>
                    </section>
                    <section className="project_card project_item5 project_flex">
                        <h2 className="project_h2">Path Finding</h2>
                    </section>
                    <section className="project_card project_item8 project_flex" >
                        <h2 className="project_h2 project_h2_bk">Backtracking Algorithm</h2>
                    </section>
                    <section className="project_card project_item11 project_flex">
                        <h2 className="project_h2">Image Compression</h2>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Algorithms;