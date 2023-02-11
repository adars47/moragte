import '../Component/TableComponent'
import TableComponent from '../Component/TableComponent';
import InputComponent from '../Component/InputComponent';
import { useState } from 'react';
import ChartComponent from '../Component/ChartComponent';
import TotalCalculationComponent from '../Component/TotalCalculationComponent';
import styles from '../App.css';

function App() {
  const [interest, setInterest] = useState();
  const [principle, setPrinciple] = useState();
  const [time, setTime] = useState();
  const [start_date, setStartDate] = useState();
  const [payment_frequency, setPaymentFrequency] = useState();
  const [additional_payment,setAdditionalPayment] = useState();   
  const [down_payment,setDownPayment] = useState();
  const [client_name,setClientName] = useState();
  return (
    <div className="App">
      <header className="App-header">
          {/* <img src={logo.jpg} className="App-logo" alt="logo" /> */}
          <h1>
              HLTHY (How long till house’s yours)
          </h1>
      </header>
      
      <div className='userName'><h2>Hey {client_name}!</h2></div> 
       <div className='rowC'>
          <InputComponent setInterest={setInterest} setPrinciple={setPrinciple} setTime={setTime} setStartDate={setStartDate} setPaymentFrequency={setPaymentFrequency} setDownPayment={setDownPayment} setAdditionalPayment={setAdditionalPayment} setClientName={setClientName}/>      
          <TotalCalculationComponent interest={interest} principle={principle} time={time} start_date={start_date} additional_payment={additional_payment} down_payment={down_payment} />       
          <ChartComponent interest={interest} principle={principle} time={time} start_date={start_date} additional_payment={additional_payment} down_payment={down_payment} />
        </div>
        <div>
          <TableComponent interest={interest} principle={principle} time={time} start_date={start_date} additional_payment={additional_payment} down_payment={down_payment} />
        </div>
    </div>
  );
}

export default App;
