import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductName from '../components/ProductListing';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.state.product.title);
    this.state = { data: [] };
  }

  componentDidMount() {
    const { match } = this.props;
    console.log(match);

    api
      .getProductsFromCategoryAndQuery(match.params.id, this.props.location.state.product.title)
      .then((data) => {
        this.setState({ data: data.results[0] });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <Link to="/">Home</Link>
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
