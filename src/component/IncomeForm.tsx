import { Button } from "./Button";

export function IncomeForm({handelAddSource, handelAddIncome, handelAddAmount , handelAddDate, source, amount, date}) {
  return (
    <form onSubmit={handelAddIncome}> 

      <div className="form-group">
        <label htmlFor="source"> Income Source</label>
        <input type="text" id="source" name="source" placeholder="Enter income source" value={source} onChange={handelAddSource} />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" placeholder="Enter amount" value={amount} onChange={handelAddAmount}  />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" value={date} onChange={handelAddDate} />
      </div>
      <Button label={"Add Income"}/>

    </form>
  )
}
export default IncomeForm;