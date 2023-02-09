import ammortization_calculate from "../scripts/ammortization_calculation";
import Box from '@material-ui/core/Box';
function TotalCalculationComponent({interest, time, principle,start_date,additional_payment,down_payment}) {

    let rows = ammortization_calculate(interest,time,principle,start_date,additional_payment,down_payment) 
  
    let total_interest = 0;
    let total_principle = 0;
    let nop = 0;
    let total_monthly_payment= 0;
    rows.map((row)=>{
        total_interest += row.InterestPayment;
        total_principle += row.PrinciplePayment;
        total_monthly_payment += row.Monthly_payment;
        nop++;
        console.log(row);
    });
    return(
        <Box className="calDiv">
            <h1>Payment Summary</h1>
             <div>
                <p>
                    Total Interest : { parseFloat(total_interest).toFixed(2)}<br></br>
                    Total Principle : { parseFloat(total_principle).toFixed(2)}<br></br>
                    Total Monthly Payment : {parseFloat(total_monthly_payment).toFixed()}<br></br>
                    Total Months : {nop}
                </p>
            </div>
        </Box>
       
         );
    
}

export default TotalCalculationComponent;