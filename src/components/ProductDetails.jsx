import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    const { title, price, id, thumbnail } = this.props;

    return (
      <section>
        <div>
          <div data-testid="product">
            <h3 data-testid="product-detail-name">{title}</h3>
            <h4>{id}</h4>
            <img src={thumbnail} alt={title} />
            <h4>{`Preço: R$ ${price}`}</h4>
            <Link to="/">
              <button type="button">VOLTAR</button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
