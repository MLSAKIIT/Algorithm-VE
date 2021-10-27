// import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
// import Navbar from './components/Navbar';

import {ReactComponent as SemiCircle} from './semicircle.svg'


function App() {

  return (<>
  {/* <Login/> */}

  <div className="App">
      <div className="top-svg">
        <div className="wavy-yellow-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="579.329" height="396" viewBox="0 0 579.329 396">
  <path id="Path_1" data-name="Path 1" d="M1256.856,0s15.862,185.222,115.393,216.838,175.676,12.647,264.6,35.305S1836.185,396,1836.185,396V0Z" transform="translate(-1256.856)" fill="#ffdb00"/>
</svg>

        </div>
        <div className="semicircle-svg">
          <SemiCircle />
        </div>
      </div>
     <div className="login-form">
       <div className="login-text">
       <h2> Login</h2> 
       </div>
<Login/>   
     </div>
     <div className="bottom-svg">
     <svg xmlns="http://www.w3.org/2000/svg" width="607.807" height="292.357" viewBox="0 0 607.807 292.357">
  <path id="Path_2" data-name="Path 2" d="M1882.928,328.435s16.518-80.331-96.99-117.546S1585.594,196,1484.182,169.331,1275.96,36.078,1275.96,36.078L1277,328.435Z" transform="translate(-1275.96 -36.078)" fill="#f25734"/>
</svg>
     </div>
    </div></>
  );
}

export default App;
