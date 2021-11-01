import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import DepositForm from "./DepositForm";
import DepositList from "./DepositList";
import styles from './deposit.module.css';

function Deposit(){
    const [deposit, setDeposit] = useState([]);
    const [totalDeposit, setTotalDeposit] = useState(0);

    useEffect(() => {
        let temp = 0;
        for(let i = 0; i < deposit.length; i++) {
            temp += parseInt(deposit[i].price);
        }

        setTotalDeposit(temp);
    }, [deposit]);
    
    return (
        <div className={styles['App']}>
            <div><Header totalDeposit={totalDeposit} /></div>
            <div><h1>d</h1></div>
            <div>e</div>
            <div>b</div>
            <div className={styles['total-income']}>£{totalDeposit}</div>
            <DepositForm deposit={deposit} setDeposit={setDeposit} />
            <DepositList deposit={deposit} setDeposit={setDeposit} />
        </div>
    );
}
export default Deposit;