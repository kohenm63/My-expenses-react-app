import React ,{useContext}from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import {BillContext} from '../../Context/BillContext';
import BillList from '../BillList/BillList';
import BillTotal from '../BillTotal/BillTotal';
import BillOptions from '../BillOptions/BillOptions';
import EditBills from '../EditBills/EditBills';
import Time from '../Time/Time'
import Header from '../Header/Header'

const App = () => {

  const { editModeEnabled } = useContext(BillContext);

  return (
    <div className='header'>
 <Header/> 
 <Time/>
    <div className='bills-container'>
      {
        editModeEnabled ?
       

         <EditBills /> : <span>
        
        
        <AddBill />
        <BillOptions />
        <BillList />
        <BillTotal />
       
        
        </span>
      }
    </div>
    </div>
  );
}

export default App;
