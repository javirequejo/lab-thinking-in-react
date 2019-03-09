import React, { Component } from 'react';

class ProductTable extends Component {

  constructor(props) {
    super(props);
  }

  redColor = () => {
    if (this.props.stocked) { 
      return (
      <div className="columns">
        <div className="column">{this.props.name}</div>
        <div className="column">{this.props.price}</div>
      </div>);
    } else {
      return (
        <div className="columns has-text-danger">
          <div className="column">{this.props.name}</div>
          <div className="column">{this.props.price}</div>
      </div>);
    }
  }

  render() {
    return this.redColor();
  }
}

export default ProductTable;