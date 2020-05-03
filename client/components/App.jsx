import React from 'react';
import WhyMadeHeader from './WhyMadeHeader.jsx'
import Accordion from './Accordion.jsx'
import axios from 'axios';
import styled from "styled-components";

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
    let id = Math.floor(Math.random() * 100)
    axios.get(`/products/${id}`)
      .then(res => {
        this.setState({
          product: res.data,
          features: res.data.features.split("/,")
        }, ()=> console.log("inside Set State", res.data.features.split("/,")))
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <WhyMadeHeader product={this.state.product}/>
        <Accordion
          features={this.state.features}
          designed_for={this.state.product.designed_for}
          materials={this.state.product.materials}
        />
      </div>
    )
  }
}

/*
Div - WhyMade Wrapper 1372 x 508 px
  Div - copy paragraph
    h2
    p
  Div - image container
    span
      picture - first image
        source
          image
      picture - second image
        source
          image
Div - Accordion
  Div - "Designed for" container
    Div - grid inside
      h3
        svg - icon for below sport
        span - Designed for ___
  Div - First prod Feature container
    Div - grid inside
      h3
        svg - icon
        span - Designed for ___
        div - plus minus 30 x 2.25 px
          svg - plus minus icon
    Div - Inner Accordion item (collapses)
      Div - INner grid
        Ul - List of features
          Li - Feature
            Span - Feature Text
          Li - Feature
            Span - Feature Text
          Li - Feature
            Span - Feature Text
  Div - "Product Features" container
  Div - "Material and Care"



*/