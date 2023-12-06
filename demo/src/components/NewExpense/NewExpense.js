import React, { useState } from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{

        const [click, setClick] = useState(false);
        const showHandler=()=>{
          setClick(true);
        }
        const hideHandler=()=>{
          setClick(false);
        }

        const saveExpenseDataHandler = (enteredExpenseData) => {
          const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
          };
          props.onAddExpense(expenseData);
        };
      
    return(
        <div className="new-expense">
          {!click && <button onClick={showHandler}>Add New Expense</button>}
          {click && <ExpenseForm onCancel={hideHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;