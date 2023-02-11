import { useState } from 'react';
import Comparison from "../Component/Comparison";
import styles from '../App.css';

function ComparisonPage() {    
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo.jpg} className="App-logo" alt="logo" /> */}
                <h1>
                    HLTHY(How long till house’s yours)
                </h1>
            </header>
            <div className='navHeader'>
            <h1 className='centered'>Comparison Table</h1>
            </div>
            
            <div className='rowC'>
                <div style={{border:"1px" , solid:"black", margin:"0 1% 0 0"} }>
                    <Comparison></Comparison>
                </div>

                <div style={{border:"1px" , solid:"black"}}>
                    <Comparison></Comparison>
                </div>                    
            </div>
        </div>
    )

}

export default ComparisonPage;