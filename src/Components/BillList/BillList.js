import React, { useContext } from 'react';
import style from '../BillList/style.css'
import { BillContext } from '../../Context/BillContext';
import Checkbox from '@material-ui/core/Checkbox';

const BillList = () => {
    
        const {bills, editBill,setEditModeEnabled} = useContext(BillContext);
    
       
    return (
        <div className='bill-list-container '>
        <h6 className='edit-mode-btn' onClick={() => setEditModeEnabled(true)}>Edit</h6>
       {
           bills.map((bill, index) => { 
               return(
                <div key={index} className='bill-list-row'>
                <Checkbox type='checkbox'
                className='form-check-input'
                checked={bill.enabled}
                onChange={() => editBill({
                  title: bill.title,
                  monthlyCost: bill.monthlyCost,
                  enabled: !bill.enabled
                  
                })}
                style={{ color: '#d32222b3' }} >
              /></Checkbox>
                <div className='bill-list-row-content'>
                {bill.title} - {bill.monthlyCost}₪

                </div>
                </div>
               );
           })
       }
        </div>
    );
}

export default BillList;
