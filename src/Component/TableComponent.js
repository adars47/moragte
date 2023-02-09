import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment/moment';
import TextField from '@material-ui/core/TextField';

let down_payment=[];

function addDownPayment(id,amount)
{
  down_payment[id]=amount;
}


function createData(
  BeginningBalance,
  InterestPayment,
  PrinciplePayment,
  EndingBalance,
  key,
  start_date,
  additional_payment
) {
  return { BeginningBalance, InterestPayment, PrinciplePayment, EndingBalance ,key,start_date,additional_payment};
}

function TableComponent({interest, time, principle,start_date,additional_payments}) {
  console.log(additional_payments);
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
    var ap = additional_payments;
    // if(i in additional_payments)
    // {
    //   console.log("Additional payment of "+additional_payments[i])
    //   down_payment[i] = additional_payments[i];
    //   ap = down_payment[i];
    // }
    rows.push(new createData(principle,monthly_interest,principleRepayment,remaining-ap,i,payment_date,ap))
    principle = remaining - ap;
    start_date = moment(start_date).add(1, 'M');

    if(principle<0)
    {
      break;
    }
  }

  return (
    <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Payment Date</TableCell>
          <TableCell align="center">Beginning Balance</TableCell>
          <TableCell align="center"> InterestPayment</TableCell>
          <TableCell align="center">PrinciplePayment</TableCell>
          <TableCell align="center">Extra Payment</TableCell>
          <TableCell align="center">Payment</TableCell>
          <TableCell align="center">EndingBalance</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center">{row.start_date}</TableCell>
            <TableCell align="center">
              {Math.round(row.BeginningBalance * 100) / 100}
            </TableCell>
            <TableCell align="center">{Math.round(row.InterestPayment * 100) / 100}</TableCell>
            <TableCell align="center">{Math.round(row.PrinciplePayment * 100) / 100}</TableCell>
            <TableCell align="center">{row.additional_payment}</TableCell>
            <TableCell align="center">{parseFloat(monthly_payments+row.additional_payment).toFixed(2)} </TableCell>
            <TableCell align="center">{Math.round(row.EndingBalance * 100) / 100}</TableCell>
            {/* <TableCell align="center"> */}
            {/* <TextField
              fullWidth
              id={"ap_"+row.key+"_id"}
              name={"ap_"+row.key+"_id"}
              defaultValue={row.additional_payment}
              onKeyUpCapture={(val)=>{
                addDownPayment(row.key,val.nativeEvent.target.value); 
                setAdditionalPayments(down_payment);
              }}
            /> */}
            {/* </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    );
  }
  
  export default TableComponent;
  