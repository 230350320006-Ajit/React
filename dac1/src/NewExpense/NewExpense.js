import React, { useState } from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
        const [showForm, setShowForm] = useState(false);
        const showFormHandler=()=>{
          setShowForm(true);
        }
        const stopShowForm=()=>{
          setShowForm(false);
        }
        const saveExpenseDataHandler = (enteredExpenseData) => {
          const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
          };
          props.onAddExpense(expenseData);
        };
      
    return(
        <div className="new-expense">
          {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
          {showForm && <ExpenseForm onCancel={stopShowForm} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;