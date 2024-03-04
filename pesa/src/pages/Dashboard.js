import React from 'react'
import Header from '../components/Header'
import Balance from '../components/Balance'
import IncomeExpense from '../components/IncomeExpense'
import TransactionList from '../components/TransactionList'
import '../App.css'
import AddTransaction from '../components/AddTransaction'
import { GlobalProvider } from '../Context/GlobalState'

const Dashboard = () => {
  return (
    <GlobalProvider>
        <Header/>
        <div >
        
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
            <AddTransaction/>

        </div>
    </GlobalProvider>
    
    
  )
}

export default Dashboard