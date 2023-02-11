import ammortization_calculate from "../scripts/ammortization_calculation";
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
    });
    return(
        <Box className="calDiv" color="text.primary">
            <h1>Payment Summary</h1>
             <div>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem>
                            <ListItemText
                                primary=" Total Interest :"
                                secondary={ parseFloat(total_interest).toFixed(2)}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary=" Total Principle : "
                                secondary={ parseFloat(total_principle).toFixed(2)}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary=" Total Monthly Payment : "
                                secondary={ parseFloat(total_monthly_payment).toFixed(2)}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary=" Total Months : "
                                secondary={ nop}/>
                        </ListItem>
                    </List>
            </div>
        </Box>
       
         );
    
}

export default TotalCalculationComponent;