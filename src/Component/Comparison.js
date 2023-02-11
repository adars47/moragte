import { useState } from 'react';
import TableComponent from '../Component/TableComponent';
import InputComponent from '../Component/InputComponent';
import TotalCalculationComponent from '../Component/TotalCalculationComponent';
import ChartComponent from '../Component/ChartComponent';

function Comparison()
{
    const [interest, setInterest] = useState();
    const [principle, setPrinciple] = useState();
    const [time, setTime] = useState();
    const [start_date, setStartDate] = useState();
    const [payment_frequency, setPaymentFrequency] = useState();
    const [additional_payment,setAdditionalPayment] = useState();   
    const [down_payment,setDownPayment] = useState();
    const [client_name,setClientName] = useState();

    return (
    <div>
        
      <div className='userName'><h2>Hey {client_name}!</h2></div> 
        <div className='rowC'>
            <InputComponent setInterest={setInterest} setPrinciple={setPrinciple} setTime={setTime} setStartDate={setStartDate} setPaymentFrequency={setPaymentFrequency} setDownPayment={setDownPayment} setAdditionalPayment={setAdditionalPayment} setClientName={setClientName} />      
            <TotalCalculationComponent interest={interest} principle={principle} time={time} start_date={start_date} additional_payment={additional_payment} down_payment={down_payment} />
        </div>
        <TableComponent interest={interest} principle={principle} time={time} start_date={start_date} additional_payment={additional_payment} down_payment={down_payment} />
  </div>
    );


}

export default Comparison;