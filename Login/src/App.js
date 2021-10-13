// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import Sawo from "sawo"
import {ReactComponent as SemiCircle} from './semicircle.svg'


function App() {
  
  return (
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
         Login
       </div>

       <div className="login-input">
            <div class="input-block">
            <input type="text" name="input-text" id="input-text" required spellcheck="false" />
            <span class="placeholder">
              Email ID
            </span>
          </div>

         <div className="login-buttons">

            <button>Login with mobile number</button>
            <button style={{backgroundColor:"#272934", color:"white"}}>LOGIN</button>
         </div>
       </div>
     </div>


     <div className="bottom-svg">
     <svg xmlns="http://www.w3.org/2000/svg" width="607.807" height="292.357" viewBox="0 0 607.807 292.357">
  <path id="Path_2" data-name="Path 2" d="M1882.928,328.435s16.518-80.331-96.99-117.546S1585.594,196,1484.182,169.331,1275.96,36.078,1275.96,36.078L1277,328.435Z" transform="translate(-1275.96 -36.078)" fill="#f25734"/>
</svg>

     </div>
          

    

    </div>
  );
}

export default App;
