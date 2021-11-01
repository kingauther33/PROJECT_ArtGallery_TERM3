import React, {useRef} from 'react';
import styles from './deposit.module.css';

function DepositForm({ deposit, setDeposit }) {
    // const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);

    const AddDeposit = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1] - 1, d[2]);

        setDeposit([...deposit, {
            // "desc": desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }]);

        // desc.current.value = "";
        price.current.value = null;
        date.current.value = null;
    }

    return (
        <form className={styles['income-form']} onSubmit={AddDeposit}>
            <div className={styles['form-inner']}>
                {/*<input type="text" name="desc" id="desc" placeholder="deposit Description..." ref={desc} />*/}
                <table>
                    <th>
                        <input  type="number" name="price" id="price" placeholder="Price..." ref={price}/>
                    </th>
                    <th>
                        <input  type="date" name="date" id="date" placeholder="deposit date..." ref={date} />
                    </th>
                </table>
                <input  type="submit" value="Add deposit" />
            </div>
        </form>
    )
}

export default DepositForm;