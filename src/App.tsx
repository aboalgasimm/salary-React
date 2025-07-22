import { Button } from './component/Button';
import { useState } from 'react';
import './App.css';
import { IncomeForm } from './component/IncomeForm';
import { ExpenceForm } from './component/ExpenceForm';



type IncomeType = {
  source: string;
  amount: number;
  date: string;
};
type ExpenseType = {
  source: string;
  amount: number;
  date: string;
};


function App() {

const [income, setIncome] = useState<IncomeType[]>([]);
const [source, setSource] = useState("");
const [amount, setAmount] = useState("");
const [date, setDate] = useState(new Date().toLocaleDateString());

const [expense, setExpense] = useState<ExpenseType[]>([]);
const [expenseSource, setExpenseSource] = useState("");
const [expenseAmount, setExpenseAmount] = useState("");
const [expenseDate, setExpenseDate] = useState(new Date().toLocaleDateString());


const handelAddSource = (e) => {
  const value = e.target.value;
  setSource(value);
};
const handelAddDate = (e) => {
  const value = e.target.value;
  setDate(value);
};
const handelAddAmount = (e) => {
  const value = e.target.value;
  setAmount(value);
}

const handelAddIncome = (e) => {
e.preventDefault();
const newIncome = {
  source: source,
  amount: Number(amount),
  date: date,
};
setIncome([...income, newIncome]);
};



const handelAddExpenseSource = (e) => {
  const value = e.target.value;
  setExpenseSource(value);
};
const handelAddExpenseDate = (e) => {
  const value = e.target.value;
  setExpenseDate(value);
};
const handelAddExpenseAmount = (e) => {
  const value = e.target.value;
  setExpenseAmount(value);
}

const handelAddExpense = (e) => {
e.preventDefault();
const newExpense = {
  source: expenseSource,
  amount: Number(expenseAmount),
  date: expenseDate,
};
setExpense([...expense, newExpense]);
};

  return (
    <div className="app-container">
      <h1> Budget Tracker</h1>
      
      <div className="forms-container">
        <div className="income-form">
          <IncomeForm handelAddSource={handelAddSource} handelAddIncome={handelAddIncome} handelAddAmount={handelAddAmount} handelAddDate={handelAddDate} source={source} amount={amount} date={date} />
        </div>
        <div className="expense-form">
          <ExpenceForm handelAddExpenseSource={handelAddExpenseSource} handelAddExpense={handelAddExpense} handelAddExpenseAmount={handelAddExpenseAmount} handelAddExpenseDate={handelAddExpenseDate} />
        </div>
      </div>

      <div className="lists-container">
        <div className="list-section">
          <h2 className="list-title income-title">💵 Income</h2>
          <ul>
            {income.length === 0 ? (
              <div className="empty-state">No income entries yet</div>
            ) : (
              income.map((income)=>{
                return (
                  <li className="income-item" key={income.source + income.date}>
                    <p>{income.source}</p>
                    <p className="amount">${income.amount}</p>
                    <p>{income.date}</p>
                  </li>
                );
              })
            )}
          </ul>
        </div>

        <div className="list-section">
          <h2 className="list-title expense-title">💸 Expenses</h2>
          <ul>
            {expense.length === 0 ? (
              <div className="empty-state">No expense entries yet</div>
            ) : (
              expense.map((expense)=>{
                return (
                  <li className="expense-item" key={expense.source + expense.date}>
                    <p>{expense.source}</p>
                    <p className="amount">${expense.amount}</p>
                    <p>{expense.date}</p>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App; 