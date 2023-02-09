import { useState } from 'react';
import Comparison from "../Component/Comparison";
import styles from '../App.css';

function ComparisonPage() {    
    return (
        <div>

            <h1 className='centered'>Comparison table</h1>
            <div className='rowC'>
                <div style={{border:"1px" , solid:"black"}}>
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