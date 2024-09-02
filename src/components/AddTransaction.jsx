import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

/**
 * Componente AddTransaction
 *
 * Este componente permite ao usuário adicionar uma nova transação.
 * Ele utiliza o estado local para capturar o texto e o valor da transação
 * e o contexto global para adicionar a transação ao estado global.
 */
const AddTransaction = () => {
  // Definição dos estados locais para armazenar o texto e o valor da transação
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Acesso à função addTransaction do contexto global para adicionar uma nova transação
  const { addTransaction } = useContext(GlobalContext);

  /**
   * Função que é chamada ao submeter o formulário.
   * Cria um objeto de nova transação com um id único, texto e valor.
   * Em seguida, chama a função addTransaction para adicioná-la ao estado global.
   *
   * @param {object} e - Evento de submissão do formulário
   */
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), // Gera um id único para a transação
      text, // Texto da transação
      amount: +amount, // Valor da transação convertido para número
    };

    addTransaction(newTransaction); // Adiciona a nova transação ao contexto global

    // Limpa os inputs após adicionar a transação
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Adicionar nova transação</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Texto</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite o texto..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Valor <br />
            (negativo - despesa, positivo - renda)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Digite o valor..."
          />
        </div>
        <button className="btn">Adicionar Transação</button>
      </form>
    </>
  );
};

export default AddTransaction;
