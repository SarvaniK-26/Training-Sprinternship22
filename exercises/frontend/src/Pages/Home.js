import React, { useState,useEffect } from "react";
import TestButton from "../Components/TestButton";
import styles from "./Home.module.css"

function Home () {
  // set variables [chosen, setChosen] using hooks (useState) to "button 1"
  const [chosen, setChosen] = useState("Button 1")

  //  excercise 9.3
  // set variables [message, setMessage] using hooks (useState) to "you choose 1"
  const[message, setMessage] = useState("You Choose 1");

  //  excercise 9.3 update message when chosen change ( set dependecy to chosen) 
  /* uncomment for excercise 9.3
  useEffect(() =>{
    setMessage(chosen === "Button 1" ? "You Choose 1" : "You Chose 2")
  },[])
  */

  // handle currency button onclick
  const changeChosen = (clickedButton) =>{
    setChosen(clickedButton);
  }

  return (
      <div className = {styles.bodyContainer} /* exercise 9.2 set classname to first box CSS*/>
        <div /* exercise 9.2 set classname to second box CSS*/>
           {chosen}
           <TestButton chosen = {chosen} changeChosen={changeChosen}/>
           {message}
        </div>
      </div>
  );

}

export default Home;
