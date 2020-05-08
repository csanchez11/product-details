import React from 'react';
import WhyMadeHeader from './WhyMadeHeader.jsx'
import Accordion from './Accordion.jsx'
import axios from 'axios';
import styled from "styled-components";
import GlobalFonts from '../fonts/fonts';


export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      product: {
        "id":null,
        "why_we_made_this":null,
        "designed_for":null,
        "features": null,
        "materials":null,
        "imgurl1":null,
        "imgurl2":null
      },
      features: ["Ultralight"],
    }
    this.getProduct = this.getProduct.bind(this);

  }

  componentDidMount(){
    this.getProduct();
  }

  getProduct(){
    let id = (Math.floor(Math.random() * 99) + 1)
    axios.get(`/products/${id}`)
      .then(res => {
        this.setState({
          product: res.data,
          features: res.data.features.split("/,")
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <GlobalFonts />
        <WhyMadeHeader product={this.state.product}/>
        <Accordion
          features={this.state.features}
          designed_for={this.state.product.designed_for}
          materials={this.state.product.materials}
        />
      </div>
    )
  }
};
