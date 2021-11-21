import React from 'react';
import Planet1 from '../images/Planet1.png';
import Planet2 from '../images/Planet2.png';
import Planet3 from '../images/Planet3.png';
import Planet4 from '../images/Planet4.png';

function SectionOne() {
    return (
        <div id="top_section1" className="section">
            <div className="top_left">
                <img src={Planet1}
                    className="lax bubble a"
                    style={{ background: '#EDD943' }}
                    data-lax-preset="lazy-250"
                />
                <img src={Planet2}
                    data-lax-preset="driftRight"
                    data-lax-optimize="true"
                    className="lax chunkyText"
                    style={{ color: '#35D5E5' }}
                />
            </div>

            <div className="top_right">
                <img src={Planet3}
                    className="lax bubble c"
                    style={{ background: '#EDD943', marginLeft: '-20pt' }}
                    data-lax-preset="lazy-150"
                />
                <img src={Planet4}
                    data-lax-optimize="true"
                    data-lax-preset="driftLeft"
                    className="lax chunkyText"
                    style={{ color: '#ED2471', marginTop: '200pt' }}
                />
            </div>
        </div>
    );
}

export default SectionOne;
