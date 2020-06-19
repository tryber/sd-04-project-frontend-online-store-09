import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const formSection = {
  fullname: '',
  email: '',
  cpf: '',
  phone: '',
  cep: '',
  adress: '',
  selectedPayment: '',
};

class CheckOut extends Component {
  constructor(props) {
    super(props);

    this.state = formSection;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    const input = event.target;
    this.setState({ [type]: input.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(formSection);
  }

  renderPaymentMethods() {
    const { selectedPayment } = this.state;
    return (
      <div>
        <p>Método de pagamento</p>
        <label htmlFor="payment-method">
          <input
            type="radio"
            id="payment-method"
            value={selectedPayment}
            onChange={(event) => this.selectedPayment(event.target.value)}
          />
          Boleto
          <input
            type="radio"
            id="payment-method"
            value="cartao-debito"
            onChange={(event) => this.selectedPayment(event.target.value)}
          />
          Cartão de Débito
          <input
            type="radio"
            id="payment-method"
            value="cartao-credito"
            onChange={(event) => this.selectedPayment(event.target.value)}
          />
          Cartão de Crédito
        </label>
      </div>
    );
  }

  renderFormsPersonal() {
    const { fullname, email, cpf, phone } = this.state;
    return (
      <div>
        <label htmlFor="name">
          Nome completo
          <input
            type="text"
            id="name"
            data-testid="checkout-fullname"
            value={fullname}
            onChange={(event) => this.handleChange(event, 'fullname')}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            data-testid="checkout-email"
            value={email}
            onChange={(event) => this.handleChange(event, 'email')}
            required
          />
        </label>
        <label htmlFor="name">
          CPF
          <input
            type="text"
            id="cpf"
            data-testid="checkout-cpf"
            value={cpf}
            onChange={(event) => this.handleChange(event, 'cpf')}
            required
          />
        </label>
        <label htmlFor="name">
          Telefone
          <input
            type="text"
            id="phone"
            data-testid="checkout-phone"
            value={phone}
            onChange={(event) => this.handleChange(event, 'phone')}
            required
          />
        </label>
      </div>
    );
  }

  renderFormsAdress() {
    const { cep, address } = this.state;
    return (
      <div>
        <label htmlFor="name">
          CEP
          <input
            type="text"
            id="cep"
            data-testid="checkout-cep"
            value={cep}
            onChange={(event) => this.handleChange(event, 'cep')}
            required
          />
        </label>
        <label htmlFor="name">
          Endereço
          <input
            type="text"
            id="address"
            data-testid="checkout-address"
            value={address}
            onChange={(event) => this.handleChange(event, 'address')}
            required
          />
        </label>
      </div>
    );
  }

  // renderAlert() {
  //   alert('Compra finalizada com sucesso!');
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderPaymentMethods()}
          {this.renderFormsPersonal()}
          {this.renderFormsAdress()}
          <Link to="/">
            <button type="button">VOLTAR</button>
          </Link>
          {/* <button type="submit" onClick={this.renderAlert()}>
          Confirmar Compras
        </button> */}
        </form>
      </div>
    );
  }
}

export default CheckOut;
