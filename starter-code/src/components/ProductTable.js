import React, { Component, Fragment } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products.map((elem, index) => <ProductRow {...elem} key={index} />);
    return (
      <Fragment>
        <h3 className="title">Products</h3>
        <div className="columns">
          <div className="column"><strong>Name</strong></div>
          <div className="column"><strong>Price</strong></div>
        </div>
        {products}
      </Fragment>
    );
  }
}

export default ProductTable;