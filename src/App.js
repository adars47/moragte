import './Component/TableComponent'
import TableComponent from './Component/TableComponent';
import InputComponent from './Component/InputComponent';
import { useState } from 'react';
import ChartComponent from './Component/ChartComponent';
import TotalCalculationComponent from './Component/TotalCalculationComponent';
import styles from './App.css';

function App() {
  let data = {
    'interest':0,
    'principle':0,
    'time':0,
    'downpayment':0,
    'additional_payment':0
  };

  const [interest, setInterest] = useState();
  const [principle, setPrinciple] = useState();
  const [time, setTime] = useState();
  const [start_date, setStartDate] = useState();
  const [payment_frequency, setPaymentFrequency] = useState();
  const [additional_payment,setAdditionalPayment] = useState();   
  const [down_payment,setDownPayment] = useState();
  return (
    <div className="App">
       <div className='rowC'>
          <InputComponent setInterest={setInterest} setPrinciple={setPrinciple} setTime={setTime} setStartDate={setStartDate} setPaymentFrequency={setPaymentFrequency} setDownPayment={setDownPayment} setAdditionalPayment={setAdditionalPayment} />      
          <TotalCalculationComponent interest={interest} principle={principle} time={time} start_date={start_date} additional_payment={additional_payment} down_payment={down_payment} />       
          <ChartComponent interest={interest} principle={principle} time={time} start_date={start_date} additional_payment={additional_payment} down_payment={down_payment} />
        </div>
        <TableComponent interest={interest} principle={principle} time={time} start_date={start_date} additional_payment={additional_payment} down_payment={down_payment} />
    </div>
  );
}

export default App;
