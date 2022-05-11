import styles from "./TestButton.module.css"

/* 
:chosen:
  the current chosen button
:type:
  string
:changeChosen:
  function that change chosen value on parent
:type:
  function
*/
function TestButton ({chosen,changeChosen}) {
  return (
    <div className={styles.bodyContainer}>
        {/* 9.1 create a button component for button 1 <button></button> pass */
          <button onClick={()=>changeChosen("Button 1")} 
          className={chosen === 'Button 1' ? styles.currencyButtonActive : styles.currencyButtonDefault}>
            Button 1 
          </button>
          }
        {/* 9.1 create a button component for button 1 <button></button> pass */
          <button onClick={()=>changeChosen("Button 2")} 
          className={chosen === 'Button 2' ? styles.currencyButtonActive : styles.currencyButtonDefault}>
            Button 2 
          </button>
          }
    </div>         
  );

}

export default TestButton;
