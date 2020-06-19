import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function renderForms() {
  return (
    <form>
      <label htmlFor="name">
        Nome completo
        <input id="" data-testid="checkout-fullname" />
      </label>
      <label htmlFor="email">
        Email
        <input id="" data-testid="checkout-email" />
      </label>
      <label htmlFor="cpf">
        CPF
        <input id="" data-testid="checkout-cpf" />
      </label>
      <label htmlFor="phone">
        Telefone
        <input id="" data-testid="checkout-phone" />
      </label>
      <label htmlFor="cep">
        CEP
        <input id="" data-testid="checkout-cep" />
      </label>
      <label htmlFor="address">
        Endereço
        <input id="" data-testid="checkout-address" />
      </label>
    </form>
  );
}

class CheckOut extends Component {
  render() {
    return (
      <>
        {renderForms()}
        <Link to="/">
          <button type="button">VOLTAR</button>
        </Link>
      </>
    );
  }
}

export default CheckOut;
