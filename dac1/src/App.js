import React,{useState} from 'react';
import './App.css';
import ExpenseItem from './Component/ExpenseItem';
import NewExpense from './NewExpense/NewExpense';
import HelloComponent from './NewExpense/classCom/HelloComponent';

function App() {

  let DUMMY= [
    {id:'e1',expDate : new Date(2022,7,3), expTitle:"School fees", expAmount :42000},
    {id:'e2',expDate : new Date(2022,8,12), expTitle:"coaching fees", expAmount :42200},
    {id:'e3',expDate : new Date(2022,9,13), expTitle:"DAC fees", expAmount :42500}
  ]

  const [expenses,setExpenses] = useState(DUMMY);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className='App'>
      <HelloComponent />
      <NewExpense onAddExpense={addExpenseHandler} />

    <h1>Expenses Menu </h1>
    {expenses.map(exp=>{
      return <ExpenseItem expId={exp.id} expDate={exp.expDate} expTitle={exp.expTitle} expAmount={exp.expAmount} />
    })}

    </div>
  );
}

export default App;
