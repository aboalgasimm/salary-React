import { Button } from "./Button";

export function ExpenceForm({handelAddExpenseSource, handelAddExpense, handelAddExpenseAmount , handelAddExpenseDate}) {
  return (
    <form onSubmit={handelAddExpense}> 

      <div>
        <label htmlFor="source">Add Expense </label>
        <input type="text" id="source" name="source" placeholder="Enter expense" onChange={handelAddExpenseSource} />
      </div>

      <div>
        <label htmlFor="amount">Amount </label>
        <input type="number" id="amount" name="amount" placeholder="Enter amount" onChange={handelAddExpenseAmount}  />
      </div>

      <div>
        <label htmlFor="date">Date </label>
        <input type="date" id="date" name="date" placeholder="Enter date" onChange={handelAddExpenseDate} />
      </div>
      <Button label={"Add Expense"}/>

    </form>
  )
}
export default ExpenceForm;