import React from 'react';
import { getProduct } from '../services/api';

class ProductDetails extends React.Component {
  async componentDidMount() {
    const data = await getProduct(this.props.match.params.productId);
    this.handleProduct(data);
  }
  render() {
    return (
      <div>
        <p>teste</p>
      </div>
    );
  }
}

export default ProductDetails;
