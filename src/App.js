import './App.css';
// import {useState} from 'react'
import logo from './images/Ресурс-1.png'
require('dotenv').config()

function App() {
  // const [nameval,setnameval] = useState("")
  // const [emailval,setemailval] = useState("")
  // const [errorval,seterrorval] = useState("")

  // const ValidateEmail=(email)=>
  // {
  //  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  //   {
  //     return (true)
  //   }
  //     seterrorval("Please entered a valid email address!")
  //     return (false)
  // }

  // const enterEmail=(e)=>{
  //   e.preventDefault()
  //   const date =Date()
  //   if(ValidateEmail(emailval)){
  //     const opc = {
  //       method : 'POST',
  //       headers : {
  //           'Content-Type':'application/json'
  //       },
  //       body : JSON.stringify({name:nameval,email:emailval,time:date})
  //     }
  //   fetch('https://emailcolection.herokuapp.com/colectemail',opc)
  //   window.open("https://bit.ly/38PJgqh","_self");
  //   }
  // }
  return (
    <div className="App">
      <img className="logo" src={logo} alt=""/>
      {/* <h1 className="title">Are Your Letting Humanity Down ?</h1>
      <div className="videohold">
      <div className="videocont">
      <iframe width="640" height="360" title="soul-manifestation"
        src="https://www.youtube.com/embed/wlyZ7m3VN2c?feature=oembed">
      </iframe>
      </div>
      </div> */}
      <button className="landbtn" onClick={()=>window.open("https://bit.ly/38PJgqh","_self")}><h2>Let's Start!!</h2></button>
      {/* <form action="#">
        <h5 className="errortext">{errorval}</h5>
        <input type="text" name="name" placeholder=" Name" className="inputfeald" value={nameval} onChange={e=>setnameval(e.target.value)}/>
        <input type="email" name="email" placeholder=" e-mail" className="inputfeald" value={emailval} onChange={e=>setemailval(e.target.value)}/>
        <button type="submit" className="btnsummit" onClick={e=>enterEmail(e)}><h2>Free Soul Reading</h2></button>
      </form> */}
    </div>
  );
}

export default App;
