import React, {useState} from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./componentsCSS/homeCover.css";
import Menu from "./Menu"


const HomeCover = () => {
  const [available,setAvailable] =  useState(false);
  const [username,setUsername] = useState("");

  const [userdetails,setuserdetails] = useState([
    {name:"Puja",surname:"Talegaonkar",city:"Delhi",id:1},
    {name:"Sachin",surname:"Bapat",city:"London",id:2},
    {name:"Suhani",surname:"Bapat",city:"Hawai",id:3},
    {name:"Dipti",surname:"Kandelwal",city:"Indore",id:4},
    {name:"Lavish",surname:"T",city:"Banglore",id:5}
  ])
  const ifAavailable = (current_state)=>{
    console.log(available)
    if(available){
      setAvailable("false")
    }
    else setAvailable("true")
    console.log(available)
  }

  const usernameFunt = ()=>{
    const usernm = document.getElementById("username")
    setUsername(usernm.value);
    
  }
  return (
    <>


    <div className="mainDiv">
      <div className="heading">
      </div>
        <div className="buttonsDiv">
          <h2>Embark on an Indian Culinary Journey!</h2>
          <div className='buttons'>
          <Button className='p-3' variant='success' onClick={ifAavailable}>Book a table</Button>
          <Button className='p-3' variant='success'>Order Now</Button>
          </div>
        </div>
        
      
    </div>

    

    <p>The table is {available} Mr {username}</p>
    <form>
      <label for="username">Please enter your name: </label>
      <input id="username" type="text"></input>
      <Button onClick={()=>{usernameFunt()}}>Click me!</Button>
    </form>
    
    {/* faced problem using {} instead of () after {userdetails.map((detail)=> */}
    {/* {userdetails.map((detail)=>(
      <div className="detailspreview" key={detail.id}>
      <h3 >{detail.name} {detail.surname} </h3>
      <h4 style={{color:'red'}}>{detail.city}</h4>
        
      </div>
    ))} */}

    <Menu details={userdetails}/>
    </>
  );
};

export default HomeCover;
