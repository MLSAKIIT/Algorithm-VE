import React from "react";
import { ReactComponent as DesignRectangleSVG } from "./DotS.svg";
import { ReactComponent as Group11 } from "./Group11.svg";
function whyAlgo() {
  return (
    <>
      {/* <DesignRectangleSVG /> */}
      <div className="container text-center">
        <h1 className="text-center inspiration">The Inspiration</h1>
        <div className="row1">
          <div className="algo-because" style={{ position: "relative" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="500"
              height="300"
              viewBox="0 0 1367.412 691.032"
              className="svg-container"
            >
              <path
                id="Path_11"
                dataName="Path 11"
                d="M1571,2387.3H564.737v691.032H1741.956l190.193-312.666Z"
                transform="translate(-564.737 -2387.296)"
                fill="#a3e6c2"
              />
            </svg>

            <div className="algo-because__text">
              <h3>Algorithm VE because...</h3>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                magnam corrupti cumque consectetur deserunt non maiores ipsa sed
                illum nulla.
              </h5>
            </div>
          </div>
          <div
            className="what-is-algorithm-container"
            style={{ position: "relative" }}
          >
            <DesignRectangleSVG
              style={{ width: "50%", zIndex: "-10", padding: "0" }}
            />
            <h4 className="what-text">
              What is <br></br> Algorithm VE?
            </h4>
          </div>
        </div>

        <div className="row3" style={{ position: "relative" }}>
          <Group11
            style={{
              width: "90%",
              height: "100%",
              padding: "0px",
              transform: "translateY(-30%)",
              marginBottom: "0px",
            }}
          />

          <div className="because-text">
            <div className="because">
              <h3>Algorithm VE because...</h3>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                ipsum magni, iusto soluta distinctio totam aut reprehenderit
                officiis eos sunt!
              </h3>
            </div>

            <div className="why-text">
              <h3>
                Why <br></br> Algorithm VE?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default whyAlgo;
