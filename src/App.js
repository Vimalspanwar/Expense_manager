import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 3502,
      date: new Date(2024, 7, 8),
    },
    { id: "e2", title: "Tv", amount: 32502, date: new Date(2024, 7, 12) },
    { id: "e3", title: "Laptop", amount: 63502, date: new Date(2024, 7, 18) },
    { id: "e4", title: "groceries", amount: 799, date: new Date(2024, 7, 2) },
  ];

  return (
    <div className="App">
      <h1>Lets get started</h1>

      {/* {expenses.map((i)=>(
        <ExpenseItem
        title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date}
      />
      ))} */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}>
      </ExpenseItem>
        
    </div>
  );
}

export default App;
