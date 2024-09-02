import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

/**
 * Componente IncomeExpenses
 * 
 * Este componente exibe a renda total e as despesas totais baseadas nas transações armazenadas no contexto global.
 * Ele calcula a soma das transações positivas como renda e a soma das transações negativas como despesas.
 */
const IncomeExpenses = () => {
  // Acesso às transações do contexto global
  const { transactions } = useContext(GlobalContext);

  // Extrai os valores das transações e os armazena em um array
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calcula a renda total somando todos os valores positivos
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Calcula as despesas totais somando todos os valores negativos e convertendo para positivo
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>RENDA</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>DESPESAS</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
