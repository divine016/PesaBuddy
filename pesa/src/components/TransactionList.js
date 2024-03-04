import React, {useContext} from 'react'

import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    //console.log(context)

    return (
        <div className=' text-black flex  flex-col items-center bg-slate-200  dark:text-white  dark:bg-[#0d0c27] shadow-md bg-opacity-70 font-palaquin lg:w-full  lg:p-10 mt-20'
        >
            <div className="relative rounded-md  p-6 w-full lg:w-[85%] bg-white dark:bg-[#171b3f] shadow-md mt-20  mb-2 mx-4 lg:mx-20">
                <div>
                    <h3 className='font-bold text-[35px] text-red-400 font-serif '>Transactions <span className='text-1xl text-white'>for {Date()}</span></h3>
                    
                    <ul id='list' className='list text-white dark:bg-blue-950 dark:text-white bg-white'>
                        {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}/>))}

                        
                        
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default TransactionList