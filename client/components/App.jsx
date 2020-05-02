import React from 'react';
import WhyMadeHeader from './WhyMadeHeader.jsx'
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      product: '',
      id: 1
    }
    this.getProduct = this.getProduct.bind(this);

  }

  componentWillMount(){
    this.getProduct();
  }

  getProduct(){
    let id = Math.floor(Math.random() * 100)
    axios.get(`/products/${id}`)
      .then(res => {
        this.setState({
          product: res.data
        }, ()=> console.log("inside Set State",res.data))
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <WhyMadeHeader product={this.state.product}/>
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