import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

export default function Home() {
  return (
 <>
  
    <Header/>
    <div>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
   </div>
   </>
  );
}
