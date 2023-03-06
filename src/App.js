import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  let expenses = [
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
      date: new Date(2023, 1, 8),
    },
    {
      id: 'e4',
      title: 'Pen',
      amount: 20,
      date: new Date(2023, 2, 50),
    }
]; 

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
