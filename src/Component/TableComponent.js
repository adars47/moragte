import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment/moment';


function createData(
  BeginningBalance,
  InterestPayment,
  PrinciplePayment,
  EndingBalance,
  key,
  start_date
) {
  return { BeginningBalance, InterestPayment, PrinciplePayment, EndingBalance ,key,start_date};
}


function TableComponent({interest, time, principle,start_date}) {
  interest = interest/100;
  let  nop = time*12;
  let monthly_payments = principle*(interest/12)*(Math.pow((1+(interest/12)),nop)/(Math.pow((interest/12)+1,nop)-1));
  start_date = moment(start_date)
  let rows = [];
  for(var i=0;i<nop;i++)
  {
    var monthly_interest = principle*(interest/12);
    var principleRepayment = monthly_payments-monthly_interest;
    var remaining = principle - principleRepayment;
    var payment_date = start_date.format("YYYY-MM")
    rows.push(new createData(principle,monthly_interest,principleRepayment,remaining,i,payment_date))
    principle = remaining
    start_date = moment(start_date).add(1, 'M');
  }


  return (
    <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Payment Date</TableCell>
          <TableCell align="center">Beginning Balance</TableCell>
          <TableCell align="center">Interest Payment</TableCell>
          <TableCell align="center">Principle Payment</TableCell>
          <TableCell align="center">Payment</TableCell>
          <TableCell align="center">Ending Balance</TableCell>
          <TableCell align="center">Extra Payment</TableCell>
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
            <TableCell align="center">{parseFloat(monthly_payments).toFixed(2)} </TableCell>
            <TableCell align="center">{Math.round(row.EndingBalance * 100) / 100}</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    );
  }
  
  export default TableComponent;
  