import React from 'react';
import DepositItem from './DepositItem';
import styles from './deposit.module.css';

function DepositList({ deposit, setDeposit }) {

    const removeDeposit = i => {
        let temp = deposit.filter((v, index) => index != i);
        setDeposit(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div className={styles['income-list']}>
            {
                deposit.sort(sortByDate).map((value, index) => (
                    <DepositItem
                        key={index}
                        deposit={value}
                        index={index}
                        removeDeposit={removeDeposit}
                    />
                ))
            }
        </div>
    )
}

export default DepositList;