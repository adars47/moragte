import ammortization_calculate from "../scripts/ammortization_calculation";
import {XAxis,YAxis,LineMarkSeries,FlexibleXYPlot,HorizontalGridLines,VerticalGridLines,LineSeries } from "react-vis";
function ChartComponent({interest, time, principle,start_date,additional_payment,down_payment}) {

    let rows = ammortization_calculate(interest,time,principle,start_date,additional_payment,down_payment) 
    
    let interests = [];
    let principles = [];
    let Payment_count = 1;
    rows.map((data)=>{
        interests.push({x:Payment_count,y:parseFloat(data['InterestPayment']).toFixed(2)})
        principles.push({x:Payment_count,y:parseFloat(data['PrinciplePayment']).toFixed(2)})
        Payment_count+=1;
    });
    console.log(interests,principles);
    return (
        <div className="chartDiv">
            <FlexibleXYPlot>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries
                    style={{
                    strokeWidth: '3px'
                    }}
                    lineStyle={{stroke: 'red'}}
                    markStyle={{stroke: 'blue'}}
                    data={interests}
                />
                <LineSeries
                    curve={'curveMonotoneX'}
                    data={principles}
                />
            </FlexibleXYPlot>
        </div>
    )
}

export default ChartComponent;
