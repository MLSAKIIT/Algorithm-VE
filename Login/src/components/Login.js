// import React from 'react'
// import Sawo from "sawo"
// import {useState,useEffect} from "react"
// require('dotenv').config()


// function Login() {

//     const [Login, setLogin] = useState(false);
    
//     useEffect(() => {
//         var config = {
//             // should be same as the id of the container created on 3rd step
//             containerID: "login-input",
//             // can be one of 'email' or 'phone_number_sms'
//             identifierType: "email",
//             // Add the API key copied from 2nd step
//             apiKey:"11e5736c-550a-467a-848f-a7c408bd417e",
//             // Add a callback here to handle the payload sent by sdk
//             onSuccess: (payload) => {},
//         };
//         let sawo = new Sawo(config);
//          sawo.showForm();
//     }, [])


//     return (<>
    
//         <div style={{
            
//         }}>
//         <div id="login-input" style={{height:"300px", width:"400px"}}></div>
//         </div>
//         </>
//     )
// }

// export default Login
