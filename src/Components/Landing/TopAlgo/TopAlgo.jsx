import React from 'react';
import './TopAlgo.css';
import A from '../images/A.png';
import L from '../images/L.png';
import G from '../images/G.png';
import O from '../images/O.png';
import V from '../images/V.png';
import E from '../images/E.png';
import { useLax } from 'use-lax';

function TopAlgo() {
    useLax();
    return (
        <div id="top_header" className="top_section">
            <img
                className="lax"
                alt="Letter L"
                src={A}
                style={{
                    width: '55pt',
                    marginBottom: '-4pt',
                    marginTop: '1.1rem'
                }}
                data-lax-translate-x="0 0, vh 200"
            />
            <img
                className="lax"
                alt="Letter A"
                src={L}
                style={{ width: '55pt' }}
                data-lax-translate-x="0 0, vh -200"
            />
            <img
                className="lax"
                alt="Letter A"
                src={G}
                style={{ width: '55pt' }}
                data-lax-translate-x="0 0, vh -200"
            />
            <img
                className="lax"
                alt="Letter A"
                src={O}
                style={{ width: '55pt' }}
                data-lax-translate-x="0 0, vh -200"
            />
            <img
                className="lax"
                alt="Letter X"
                src={V}
                style={{ marginTop: '3rem' }}
                data-lax-opacity="0 1, (0.8*vh) 200"
            />
            <img
                className="lax"
                alt="Letter X"
                src={V}
                style={{ marginTop: '-79pt' }}
                data-lax-translate-y="0 0, vh 200"
                data-lax-opacity="0 1, (0.8*vh) 0"
            />
            <img
                className="lax"
                alt="Letter X"
                src={V}
                style={{ marginTop: '-79pt' }}
                data-lax-translate-y="0 0, vh 400"
                data-lax-opacity="0 1, (0.8*vh) 0"
            />
            <img
                className="lax"
                alt="Letter X"
                src={V}
                style={{ marginTop: '-79pt' }}
                data-lax-translate-y="0 0, vh 600"
                data-lax-opacity="0 1, (0.8*vh) 0"
            />
            <img
                className="lax"
                alt="Letter X"
                src={V}
                style={{ marginTop: '-79pt' }}
                data-lax-translate-y="0 0, vh 800"
                data-lax-opacity="0 1, (0.8*vh) 0"
            />
            <img
                className="lax"
                alt="Letter X"
                src={V}
                style={{ marginTop: '-79pt' }}
                data-lax-translate-y="0 0, vh 1000"
                data-lax-opacity="0 1, (0.8*vh) 0"
            />
            <img
                className="lax"
                alt="Letter X"
                src={V}
                style={{ marginTop: '-79pt' }}
                data-lax-translate-y="0 0, vh 1000"
                data-lax-opacity="0 1, (0.8*vh) 0"
            />
            <img
                className="lax"
                alt="Letter X"
                src={V}
                style={{ marginTop: '-79pt', marginBottom: '2rem' }}
                data-lax-translate-y="0 0, vh 1000"
                data-lax-opacity="0 1, (0.8*vh) 0"
            />
            <img
                className="lax"
                alt="Letter A"
                src={E}
                style={{ width: '55pt' }}
                data-lax-translate-x="0 0, vh 1200"
            />
        </div>
    );
}

export default TopAlgo;
