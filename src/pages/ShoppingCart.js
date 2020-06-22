import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductBasket from '../components/ProductBasket';


class ShoppingCart extends Component {
  render() {
    const { cart, setItemToCart } = this.props;
    if (cart.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <div>
        <p>Carrinho de Compras</p>
        {cart
          .map(({ item: { id, title, thumbnail, price, availableQuantity }, qty: qtd }) => (
            <ProductBasket
              key={title}
              title={title}
              thumbnail={thumbnail}
              price={price}
              qtd={qtd}
              availableQuantity={availableQuantity}
              setItemToCart={setItemToCart}
              itemID={id}
            />
          ))}
        <Link to={{ pathname: 'payment', state: { cart } }}>
          <button type="button" data-testid="checkout-products"> CheckOut</button>
        </Link>


      </div>
    );
  }
}

export default ShoppingCart;
