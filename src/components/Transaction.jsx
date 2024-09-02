import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

/**
 * Componente Transaction
 * 
 * Este componente representa uma transação individual na lista de transações.
 * Ele exibe o texto e o valor da transação, e permite que o usuário a delete.
 * 
 * @param {object} props - As propriedades passadas para o componente.
 * @param {object} props.transaction - O objeto de transação contendo o texto e o valor.
 */
const Transaction = ({ transaction }) => {
  // Acesso à função deleteTransaction do contexto global para deletar uma transação
  const { deleteTransaction } = useContext(GlobalContext);

  // Determina o sinal do valor da transação com base se é positivo ou negativo
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}R${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
