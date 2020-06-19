import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    const { match } = this.props;
    api.getProductsFromCategoryAndQuery(match.params.id, match.params.id2).then((data) => {
      this.setState({ data: data.results[0] });
      console.log(data);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <Link to="/">
          Home
        </Link>
        <h1 data-testid="product-detail-name">{data.title} </h1>
        <h1> - R$ {data.price}</h1>
        <img src={data.thumbnail} alt="" />
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho de compras
        </Link>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
