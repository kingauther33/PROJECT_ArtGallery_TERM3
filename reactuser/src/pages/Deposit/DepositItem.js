import React from 'react';
import styles from './deposit.module.css';

function DepositItem({deposit, index, removeDeposit}) {
    let date = new Date(deposit.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i => {
        removeDeposit(i);
    }

    return (
        <div className={styles['income-item']}>
            <button className={styles['remove-item']} onClick={() => removeHandle(index)}>x</button>
            {/*<div className="desc">{deposit.desc}</div>*/}
            <table>
                <th><div className="price">£{deposit.price}</div></th>
                <th><div className="date">{day + "/" + month + "/" + year}</div></th>
            </table>

        </div>
    )
}

export default DepositItem;