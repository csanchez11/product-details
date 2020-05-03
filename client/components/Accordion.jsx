import React from 'react';
import styled from "styled-components";
// import Card from 'react-bootstrap/Card';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state ={
    }

  }

  render() {
    return (
      <div id="accordion-wrapper">
        <div>
          <h3>
            <svg></svg>
            <span>Designed for {this.props.designed_for}</span>
          </h3>
        </div>
        <div id="first-prod-feature">
          <div id="accordion-grid">
            <h3>
              <svg></svg>
              <span>{this.props.features[0]}</span>
              <div id="plus-minus"></div>
            </h3>
          </div>
          <div id="inner-accord-item-1">
            <div id="grid-inner-accord">
              <ul id="feature-list">
                <li key="1">
                  <span >{this.props.features[1]}</span>
                </li>
                <li key="2">
                  <span>{this.props.features[2]}</span>
                </li>
                <li key="3">
                  <span>{this.props.features[3]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="prod-feature-container">
          <div id="accordion-grid">
            <h3>
              <svg></svg>
              <span> Product Features </span>
              <div id="plus-minus"></div>
            </h3>
          </div>
          <div id="inner-accord-item-2">
            <div id="grid-inner-accord">
              <ul>
                {this.props.features.slice(4).map((element, index) => {
                  return (
                    <li key={index}>
                      <span >{element}</span>
                    </li>
                  )
                })
                }
              </ul>
            </div>
          </div>
        </div>
        <div id="first-prod-feature">
          <div id="accordion-grid">
            <h3>
              <svg></svg>
              <span>Materials and care</span>
              <div id="plus-minus"></div>
            </h3>
          </div>
          <div id="inner-accord-item-3">
            <div id="grid-inner-accord">
              <div id="materials-text">Materials</div>
              <ul id="material-list">
                <li>
                  <span>{this.props.materials}</span>
                </li>
              </ul>
              <div id="care-text">Care</div>
              <ul id="care-list">
                <li>
                  <span>Wash with like colours</span>
                </li>
                <li>
                  <span>Machine wash cold</span>
                </li>
                <li>
                  <span>Do not bleach</span>
                </li>
                <li>
                  <span>Tumble dry low</span>
                </li>
                <li>
                  <span>Do not iron</span>
                </li>
                <li>
                  <span>Do not dry clean</span>
                </li>
                <li>
                  <span>Imported</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


/*
  Div - "Designed for" container
    Div - grid inside
      h3
        svg - icon for below sport
        span - Designed for ___
  Div - First prod Feature container
    Div - grid inside
      h3
        svg - icon
        span - First Feature Name
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