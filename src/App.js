import React, { Component } from 'react';
import $ from 'jquery';
import InStockList from './components/InStockList';



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

  handleClick(itemClickedOn) {
    console.log(itemClickedOn);
  }

  render() {

    return (
      <div className='jumbotron'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h2 className='panel-title'>{this.state.product.name}</h2>
          </div>
          <div className='panel-body'>
          <div className='media'>
            <div className='media-left'>
              <img className='media-object' src={this.state.product.image_thumb_url} alt={this.state.product.name} />
            </div>
            <div className='media-body'>
              <p>{this.state.product.tasting_note}</p>
            </div>
          </div>

          </div>
        </div>



        <h3>In stock at: </h3>
        {this.state.inStock.length > 0 ? <InStockList selectStore={this.handleClick} stores={this.state.inStock} /> : 'no city loaded'}
      </div>
    );
  }



}

export default App;
