import styles from "./CurrencyButton.module.css"

/* 
:currency:
  the current chosen currency
:type:
  string
:changeCurrency:
  function that change currency value on parent
:type:
  function
*/
function CurrencyButton ({currency,changeCurrency}) {
  // ToDo 10.1
  return (
    <div>
        {/* 9.1 create a button component for button 1 <button></button> pass */
          <button onClick={()=>changeCurrency("USD")} 
          className={currency === 'USD' ? styles.currencyButtonActive : styles.currencyButtonActive}>
            USD
          </button>
          }
        {/* 9.1 create a button component for button 1 <button></button> pass */
          <button onClick={()=>changeCurrency("EUR")} 
          className={currency === 'EUR' ? styles.currencyButtonDefault : styles.currencyButtonDefault}>
            EUR 
          </button>
          }
    </div>         
  );

}

export default CurrencyButton;
