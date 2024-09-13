import React, { useState } from "react";
import './App.css';
import axios from "axios";
const App :  React.FC = () => {
  const [Values, setValues] = useState({
    name: "",
    number: "",
    address: "",
    state: "",
    city: "",
    message: "",
  });

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({...Values,[name]:value})
     
    
  };
  const submit =async ()=>{
    if(Values.name===""|| 
      Values.number==="" ||
      Values.address==="" || 
      Values.state===""||
      Values.city===""|| 
      Values.message  ===" "
    ){
    
      alert("All field are required")
    }else{
      await axios.post("http://localhost:1000/api/v1/post",Values).then((res)=>{
        alert(res.data.message);

      })
    
     setValues({
      name: "",
      number: "",
      address: "",
      state: "",
      city: "",
      message: "",

     })
    }
  };

  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="card-contact px-3 py-2">
        <h1>Contact Form</h1>
        <hr />

        <div className="cont-form d-flex flex-column justify-content-between">



          <div>
            <h5>Enter your name</h5>
            <input type="text" placeholder="Enter your name" name="name" 
            value={Values.name}
            onChange={change} 
            />
          </div>


          <div>
            <h5>Enter your phone number</h5>
            <input type="text" placeholder="Enter your phone number" name="number"
              value={Values.number}
              onChange={change} 
               />
          </div>



          <div>
            <h5>Address</h5>
            <textarea placeholder="Enter your name" name="address" 
              value={Values.address}
              onChange={change} 
            
            
            />
          </div>


          <div className="imp-data d-flex justify-content-between ">

            <div>
              <h5>State</h5>
              <input id="imp" type="text" placeholder="Enter your state" name="state"
                value={Values.state}
                onChange={change} 
                 />

            </div>
            <div>
              <h5>City</h5>
              <input id="imp" type="text" placeholder="Enter your state" name="city"
                value={Values.city}
                onChange={change} 
                 />


            </div>

          </div>




          <div>
            <h5>message</h5>
            <textarea placeholder="Enter your address" name="message"
              value={Values.message}
              onChange={change} 
              />
          </div>


          

          <div>
            <button className="btn btn-primary" onClick={submit}>
            Save

            </button>
           
          </div>











        </div>


      </div>
    </div>

  )
}
export default App;