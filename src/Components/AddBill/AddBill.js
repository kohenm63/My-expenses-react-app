//rfc>>>
import React,{useContext,useState} from 'react';
import { BillContext } from '../../Context/BillContext';
import style from '../AddBill/style.css'



const AddBill = () => {
    const[newBillTitle, setNewBillTitle]= useState('');
    const[newBillCost, setNewBillCost]= useState('');  //-->  datata type doesnt matter --/

const {updateBills} = useContext(BillContext)

//--> validation enf(snippet)>>> --/

const formValid = () => {
const costValid = newBillCost && Number.parseFloat(newBillCost); //-->parseFloat- Converts a string to a floating-point number. --/
const titleValid = newBillTitle && newBillTitle.split('').find(char => char!==''); //-->return an array where a  char is not an empty string--/

return titleValid && costValid;
}

//--> clear the form after sumbittion --/
 const clearFormData = () => {
    setNewBillCost('');
    setNewBillTitle('');
}

 return (
        <div className="add-bill-container ">
            <input className="add-bill-form-control form-control "
             type="text" 
             placeholder="Enter Title" 
             value={newBillTitle}
             onChange =  {(event) => setNewBillTitle(event.target.value)}
             ></input>
               <input className="add-bill-form-control form-control"
             type="number" 
             placeholder="Monthly Cost" 
             value={newBillCost}
             onChange =  {(event) => setNewBillCost(event.target.value)}
             ></input>
             <button className="add-bill-form-control btn "
             onClick ={() =>{
                if(formValid) {
                 updateBills({
                     title:newBillTitle,
                     monthlyCost:newBillCost,
                     enabled:true
                 })
                 clearFormData();
             }

             } }>Add Bill</button>

        </div>
    );
}

export default AddBill;
