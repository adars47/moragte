import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import ammortization_calculate from "../scripts/ammortization_calculation";
// import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";


function ChartComponent({interest, time, principle,start_date,additional_payment,down_payment}) {
    const chartRef = useRef(null);
    const dataRef = useRef(null);
    let rows = ammortization_calculate(interest,time,principle,start_date,additional_payment,down_payment)     
    let interests = [];
    let principles = [];
    let Payment_count = 1;
    let sum_principle = 0;
    let sum_interest = 0;
    rows.map((data)=>{
        interests.push({x:Payment_count,y:parseFloat(data['InterestPayment']).toFixed(2)})
        principles.push({x:Payment_count,y:parseFloat(data['PrinciplePayment']).toFixed(2)})
        sum_principle+=data['PrinciplePayment'];
        sum_interest+=data['InterestPayment'];
        Payment_count+=1;
    });

  useLayoutEffect(() => {
    
    let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push( 
      am5percent.PieChart.new(root, {
        layout: root.verticalHorizontal
      }) 
    );

    // Define data
    let data = [{
      country: "Principle",
      sales: sum_principle
    }, {
      country: "Interest",
      sales: sum_interest
    }];
    
    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country"
      })
    );
    series.data.setAll(data);
    
    dataRef.current = series
    chartRef.current = chart;

    return () => {
      root.dispose();
    };
  }, []);


  useLayoutEffect(() => {
    if(dataRef.current != null)
    {
        let data = [{
            country: "Principle",
            sales: sum_principle
          }, {
            country: "Interest",
            sales: sum_interest
          }];
    
          
        dataRef.current.data.setAll(data);
    }
    
    }, [sum_interest,sum_principle]);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "400px" }}></div>
  );
}
export default ChartComponent;

// import ammortization_calculate from "../scripts/ammortization_calculation";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5percent from "@amcharts/amcharts5/percent";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import React,{ useLayoutEffect } from "react";

// function ChartComponent({interest, time, principle,start_date,additional_payment,down_payment}) {      

//     let rows = ammortization_calculate(interest,time,principle,start_date,additional_payment,down_payment)     
//     let interests = [];
//     let principles = [];
//     let Payment_count = 1;
//     rows.map((data)=>{
//         interests.push({x:Payment_count,y:parseFloat(data['InterestPayment']).toFixed(2)})
//         principles.push({x:Payment_count,y:parseFloat(data['PrinciplePayment']).toFixed(2)})
//         Payment_count+=1;
//     });

//     let sum_principle = principles.reduce((partialSum, a) => partialSum + a, 0);
//     let sum_interest = interests.reduce((partialSum, a) => partialSum + a, 0);
    
//     //const chart = useRef(null);
//       const chartID = "pieDiv";
    
//       am5.array.each(am5.registry.rootElements, function(root) {
//         if (root.dom.id == "pieDv") {
//           root.dispose();
//         }
//       });
      
//       useLayoutEffect(() => {
//         var root = am5.Root.new(chartID);
    
//         root.setThemes([am5themes_Animated.new(root)]);
//         var chart = root.container.children.push(
//           am5percent.PieChart.new(root, {
//             endAngle: 270
//           })
//         );
//         var series = chart.series.push(
//           am5percent.PieSeries.new(root, {
//             valueField: "value",
//             categoryField: "category",
//             endAngle: 270
//           })
//         );
    
//         series.states.create("hidden", {
//           endAngle: -90
//         });
    
//         let data = [
//           {
//             category: "interest",
//             value: 10
//           },
//           {
//             category: "principle",
//             value: 12
//           }
//         ];
    
//         series.data.setAll(data);
    
//         series.appear(1000, 100);

//       }, [chartID]);
    
//       return(
//         <div>

//             <div>

//                 <div id = {chartID} style={{width:"100%",height:"500px",fontSize:"11px" }}>

//                 </div>
//             </div>

//         </div>
//       );
// }

// export default ChartComponent;
