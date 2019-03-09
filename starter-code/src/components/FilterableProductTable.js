import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data/data.json';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.data
    }
  }

  onSearch = (search) => {
    if (search) {
      this.setState({
        products: this.state.products.filter(elem => elem.name.includes(search))
      });
    } else {
      this.setState({
        products: data.data
      });
    }
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <SearchBar onSearch={this.onSearch} />
        <ProductTable products={this.state.products} />
      </Fragment>
    );
  }
}

export default FilterableProductTable;