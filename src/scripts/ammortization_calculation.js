import moment from 'moment/moment';

function createData(
    BeginningBalance,
    InterestPayment,
    PrinciplePayment,
    EndingBalance,
    key,
    start_date,
    additional_payment,
    Monthly_payment
  ) {
    return { BeginningBalance, InterestPayment, PrinciplePayment, EndingBalance ,key,start_date,additional_payment,Monthly_payment};
  }

  
function ammortization_calculate(interest, time, principle,start_date,additional_payment,down_payment)
{
    principle = principle - down_payment;
    interest = interest/100;
    let  nop = time*12;
    let monthly_payments = principle*(interest/12)*(Math.pow((1+(interest/12)),nop)/(Math.pow((interest/12)+1,nop)-1));
    start_date = moment(start_date);
    let rows = [];
    for(var i=0;i<nop;i++)
    {
      var monthly_interest = principle*(interest/12);
      var principleRepayment = monthly_payments-monthly_interest;
      var remaining = principle - principleRepayment;
      var payment_date = start_date.format("YYYY-MM")
      var ap = additional_payment;
      var mp = monthly_payments;
      rows.push(new createData(principle,monthly_interest,principleRepayment+ap,remaining-ap,i,payment_date,ap,mp))
      principle = remaining - ap;
      start_date = moment(start_date).add(1, 'M');
  
      if(principle<0)
      {
        break;
      }
    }
    return rows;
}

export default ammortization_calculate;
