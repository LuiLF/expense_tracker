import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Estado inicial, carregando transações do localStorage, se existirem
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

// Criando o contexto global
export const GlobalContext = createContext(initialState);

// Provedor do contexto global
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Efeito colateral para salvar as transações no localStorage sempre que o estado mudar
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Função para deletar uma transação
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  // Função para adicionar uma transação
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
