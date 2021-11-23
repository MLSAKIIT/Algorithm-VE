import React from "react";
import { ReactComponent as DesignRectangleSVG } from "./DotS.svg";


function whyAlgo() {
    return (
        <>
            <div className="outer_container">
                <div className="head_conatiner">
                    <h2 className="heading">Inspiration</h2>
                </div>

                <div className="row1">
                    <div className="svg_container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60vw" height="70vh" viewBox="0 0 1920 1080" className="green_svg">
                            <path id="Path_1" data-name="Path 1" d="M1977.636,2387.3H564.737v1080H2217.685l267.052-488.659Z" transform="translate(-564.737 -2387.296)" fill="#a3e6c2" />
                        </svg>

                        <div className="row1_left_container">
                            <h2 className="algo_because">ALGORITHM VE IS.....</h2>
                            <p className="row1_para">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Dolor cumque officiis dolore corporis mollitia
                                ipsam vel facilis ad quaerat tempore iure ex omnis
                                recusandae, placeat laboriosam amet id
                                labore nemo?</p>
                        </div>

                    </div>
                    <div className="row1_right_container">
                        <DesignRectangleSVG className="dotted_svg" />
                        <h2 className="what_is">WHAT IS ALGORITHM VE ?</h2>
                    </div>

                </div>

                <div className="row2">
                    <div className="row2_left_container">
                        <DesignRectangleSVG className="row2_dotted_svg" />
                        <h2 className="row2_what_is">WHY
                            ALGORITHM
                            VE ?</h2>
                    </div>

                    <div className="row2_svg_container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70vw" height="70vh" viewBox="0 0 1920 1080" className="green_svg row2_green_div">
                            <path id="Path_1" data-name="Path 1" d="M1977.636,2387.3H564.737v1080H2217.685l267.052-488.659Z" transform="translate(-564.737 -2387.296)" fill="#FFDB00" />
                        </svg>
                        <div className="row2_right_container">
                            <h2 className="algo_because">ALGORITHM VE BECAUSE ......</h2>
                            <p className="row1_para">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Dolor cumque officiis dolore corporis mollitia
                                ipsam vel facilis ad quaerat tempore iure ex omnis
                                recusandae, placeat laboriosam amet id
                                labore nemo?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default whyAlgo;
