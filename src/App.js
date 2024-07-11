import ExpenseItem from './components/ExpenseItem';


function App() {

  const expenses=[
    {title:"Car Insurance",amount:3502,date:new Date(2024,7,8)}
  ];

  return (
    <div className="App">

      <h1>Lets get started</h1>
     <ExpenseItem></ExpenseItem>

    </div>
  );
}

export default App;
