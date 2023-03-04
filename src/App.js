import Expenses from "./components/Expenses/Expenses";
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
      <h2>Let's gets started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
