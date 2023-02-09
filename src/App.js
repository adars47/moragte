import './Component/TableComponent'
import TableComponent from './Component/TableComponent';
import InputComponent from './Component/InputComponent';
import { useState } from 'react';
import moment from 'moment/moment';
import { useEffect } from "react";

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
  const [downpayment,setDownPayment] = useState();
  return (
    <div className="App">
    <InputComponent setInterest={setInterest} setPrinciple={setPrinciple} setTime={setTime} setStartDate={setStartDate} setPaymentFrequency={setPaymentFrequency} setDownPayment={setDownPayment} setAdditionalPayment={setAdditionalPayment} />      
    <TableComponent interest={interest} principle={principle} time={time} start_date={start_date} additional_payment={additional_payment}/>
 
    </div>
  );
}

export default App;
