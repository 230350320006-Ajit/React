import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
   


    return(
        <div className="expense-item">
            <div> 
                <ExpenseDate date={props.expDate}/>
             </div>
                <div className='expense-item__description'> 
                <h2> {props.expTitle} </h2>
                <p className='expense-item__price'> Rs. {props.expAmount}</p>
            </div>
        </div>
    );
};
export default ExpenseItem;