import React, { Component } from 'react';

class ProductBasket extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: props.quantity };
    this.addOneItem = this.addOneItem.bind(this);
    this.subtractOneItem = this.subtractOneItem.bind(this);
  }

  addOneItem() {
    const { setItemToCart, itemID, availableQuantity } = this.props;
    const { quantity } = this.state;
    if (quantity < availableQuantity) {
      this.setState({ quantity: quantity + 1 });
      setItemToCart({ id: itemID }, 1);
    }
  }

  subtractOneItem() {
    const { quantity } = this.state;
    const { setItemToCart, itemID } = this.props;
    if (quantity > 0) {
      this.setState({ quantity: quantity - 1 });
      setItemToCart({ id: itemID }, -1);
    }
  }

  render() {
    const { title, price, thumbnail } = this.props;
    const { quantity } = this.state;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={this.addOneItem}
        >
          +1

        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={this.subtractOneItem}
        >
          -1

        </button>
        <img alt={title} src={thumbnail} />
      </div>
    );
  }
}

export default ProductBasket;
