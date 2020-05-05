import React from 'react';
import styled from 'styled-components';

const AccordWrapper = styled.div`
display: block;
width: 100%;
`;

const OuterAccord = styled.div`
width: 100%;
cursor: pointer;
`;

const InnerAccord = styled.div`
display: inline-block;
width: 100%;
background-color: #EEE;
opacity: ${props => (props.open ? "1" : "0")};
max-height: ${props => (props.open ? "100%" : "0")};
overflow: hidden;
padding: ${props => (props.open ? "15px" : "0 15px")};
transition: all 0.3s;
`;



export default class Accordion extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      heroFeatureOpen: false,
      productFeaturesOpen: false,
      materialsOpen: false,
    }

    this.toggleHeroOpen = this.toggleHeroOpen.bind(this);
    this.toggleProdsOpen = this.toggleProdsOpen.bind(this);
    this.toggleMaterialsOpen = this.toggleMaterialsOpen.bind(this);
  }

  toggleHeroOpen(e){
    this.setState({ heroFeatureOpen : !this.state.heroFeatureOpen });
  }

  toggleProdsOpen(e){
    this.setState({ productFeaturesOpen : !this.state.productFeaturesOpen });
  }

  toggleMaterialsOpen(e){
    this.setState({ materialsOpen : !this.state.materialsOpen });
  }

  render() {
    return (
      <AccordWrapper>
        <div>
          <h3>
            <svg></svg>
            <span>Designed for {this.props.designed_for}</span>
          </h3>
        </div>
        <OuterAccord id="hero-prod-feature" onClick={this.toggleHeroOpen}>
          <div id="accordion-grid">
            <h3>
              <svg></svg>
              <span>{this.props.features[0]}</span>
              <div id="plus-minus"></div>
            </h3>
          </div>
          <InnerAccord open={this.state.heroFeatureOpen}>
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
          </InnerAccord>
        </OuterAccord>
        <OuterAccord id="prod-feature-container" onClick={this.toggleProdsOpen}>
          <div id="accordion-grid">
            <h3>
              <svg></svg>
              <span> Product Features </span>
              <div id="plus-minus"></div>
            </h3>
          </div>
          <InnerAccord open={this.state.productFeaturesOpen}>
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
          </InnerAccord>
        </OuterAccord>
        <OuterAccord id="materials-care" onClick={this.toggleMaterialsOpen}>
          <div id="accordion-grid">
            <h3>
              <svg></svg>
              <span>Materials and care</span>
              <div id="plus-minus"></div>
            </h3>
          </div>
          <InnerAccord open={this.state.materialsOpen}>
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
          </InnerAccord>
        </OuterAccord>
      </AccordWrapper>
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