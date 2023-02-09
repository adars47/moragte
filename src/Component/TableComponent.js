import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ammortization_calculate from '../scripts/ammortization_calculation';

function TableComponent({interest, time, principle,start_date,additional_payment,down_payment}) {
  
  let rows = ammortization_calculate(interest,time,principle,start_date,additional_payment,down_payment);

  return (
    <TableContainer className='tableDiv'>
    <Table sx={{ minWidth: 650, border: 1 ,borderColor: 'grey.500'  }} aria-label="simple table">
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
            <TableCell align="center">{Math.round((row.PrinciplePayment ) * 100) / 100}</TableCell>
            <TableCell align="center">{parseFloat(row.Monthly_payment+row.additional_payment).toFixed(2)} </TableCell>
            <TableCell align="center">{Math.round(row.EndingBalance * 100) / 100}</TableCell>
            <TableCell align="center">{row.additional_payment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    );
  }
  
  export default TableComponent;
  