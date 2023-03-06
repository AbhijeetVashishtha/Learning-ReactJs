import {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Insurance',
    amount: 3000,
    date: new Date(2020, 7,14),
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 95,
    date: new Date(2021, 8, 23),
  },
  {
    id: 'e3',
    title: 'Newspaper',
    amount: 5,
    date: new Date(2022, 1, 8),
  },
  {
    id: 'e4',
    title: 'Pen',
    amount: 20,
    date: new Date(2022, 2, 50),
  }
]; 

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
