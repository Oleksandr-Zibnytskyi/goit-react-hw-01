import css from './TransactionHistory.module.css'; 

export default function TransactionHistory ({ transactions }) {
    return (
<table className={css.transaction_table}>
  <thead>
    <tr className={css.transaction_tr}>
      <th className={css.transaction_th}>Type</th>
      <th className={css.transaction_th}>Amount</th>
      <th className={css.transaction_th}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.transaction_tbody}>
  {transactions.map(transaction => {
          return (
            <tr key={transaction.id} className={css.transaction_th}>
              <td className={css.transaction_td}>{transaction.type}</td>
              <td className={css.transaction_td}>{transaction.amount}</td>
              <td className={css.transaction_td}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
