import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

/**
 * Componente Balance
 * 
 * Este componente exibe o saldo total baseado nas transações armazenadas no contexto global.
 * Ele utiliza o contexto para acessar as transações e calcula o saldo somando os valores das transações.
 */
const Balance = () => {
  // Acesso às transações do contexto global
  const { transactions } = useContext(GlobalContext);

  // Extrai os valores das transações e os armazena em um array
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calcula o saldo total somando todos os valores e limitando a 2 casas decimais
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>SEU SALDO</h4>
      <h1>{total}</h1>
    </>
  );
};

export default Balance;
