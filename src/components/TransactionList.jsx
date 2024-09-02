import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

/**
 * Componente TransactionList
 * 
 * Este componente exibe uma lista de transações que foram armazenadas no contexto global.
 * Ele utiliza o contexto para acessar as transações e mapeia cada transação para o componente `Transaction`.
 */
const TransactionList = () => {
  // Acesso às transações do contexto global
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Histórico</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
