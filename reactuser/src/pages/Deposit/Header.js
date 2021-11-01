import React from 'react';
import styles from './deposit.module.css';

function Header({totalDeposit}) {
    return (
        <div>
            <div><h1>Deposit</h1></div>
            <div className={styles['total-income']}>£{totalDeposit}</div>
        </div>
    );
}

export default Header;