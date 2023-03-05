import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  let expenses = [
    {
      title: 'Insurance',
      amount: 3000,
      date: new Date(2020, 7,14),
    },
    {
      title: 'Toilet Paper',
      amount: 95,
      date: new Date(2021, 8, 23),
    },
    {
      title: 'Newspaper',
      amount: 5,
      date: new Date(2023, 1, 8),
    },
    {
      title: 'Pen',
      amount: 20,
      date: new Date(2023, 2, 50),
    }
]; 
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
