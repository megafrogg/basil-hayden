import React, { Component } from 'react';
import $ from 'jquery';
import InStockList from './components/InStockList'



class App extends Component {

  constructor() {
    super();
    this.state = {
      product: {},
      inStock: []
    };
    $.ajax({
      url: 'http://lcboapi.com/stores?product_id=326025',
      headers: {
        'Authorization': 'Token MDo1ZWYzMThmMC03ZTg5LTExZTYtYmZhYy1hYjg2ZGM5NmRiYjE6RlZKc3I3STB5UkdUanJ0V1M3MUNQUkk0dURoRE1FOUJ3Mnhj'
      }
    })
      .then((response) => this.setState({
        product: response.product,
        inStock: response.result
      }));
}

  render() {
    
    return (
      <div>
        <h1>{this.state.product.name}</h1>
        <img src={this.state.product.image_thumb_url} alt={this.state.product.name} />
        <p>{this.state.product.tasting_note}</p>
        <h3>In stock at: </h3>
        {this.state.inStock.length > 0 ? <InStockList stores={this.state.inStock} /> : 'no city loaded'}
      </div>
    );
  }



}

export default App;
