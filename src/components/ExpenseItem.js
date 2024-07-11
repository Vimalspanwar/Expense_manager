import "./ExpenseItem.css";
function ExpenseItem() {
  const ExpenseDate=new Date(2024,7,8);
  const ExpenseTitle='Car Insurance';
  const ExpenseAmount='3502'
  return (
    <div className="card" id="item">
      <div id="date">{ExpenseDate.toISOString()}</div>
      <h2>{ExpenseTitle} </h2>
      <div className="amount">&#8377;{ExpenseAmount} </div>
    </div>
  );
}

export default ExpenseItem;
