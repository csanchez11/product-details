import React from 'react';
import styled from 'styled-components';
import bootstrap from 'react-bootstrap';

const AccordWrapper = styled.div`
display: block;
padding-bottom: 20px;
width: 100%;
`;

const OuterAccord = styled.div`
width: 100%;
cursor: pointer;
padding: 1px;
`;

const InnerAccord = styled.div`
display: inline-block;
width: 100%;
opacity: ${props => (props.open ? "1" : "0")};
max-height: ${props => (props.open ? "100%" : "0")};
overflow: hidden;
padding: ${props => (props.open ? "15px" : "0 15px")};
transition: all 0.3s;
`;

const Icon = styled.img`
padding-left: 3rem;
padding-right: 1rem;
height: 50px;
vertical-align: middle;
`;

const Span = styled.span`
display: inline-block;
font-size: 1.5em;
vertical-align: middle;
`;

const GridDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 25px;
`;

const GridItem = styled.div`
grid-column: span 1;
background-color: #EEE;
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
            <Icon src="https://lulu-fec.s3.us-east-2.amazonaws.com/icon1.png"></Icon>
            <Span>Designed for {this.props.designed_for}</Span>
          </h3>
        </div>
        <OuterAccord id="hero-prod-feature" onClick={this.toggleHeroOpen}>
          <div>
            <h3>
              <Icon src="https://lulu-fec.s3.us-east-2.amazonaws.com/icon2.png"></Icon>
              <Span>{this.props.features[0]}</Span>
              <div id="plus-minus"></div>
            </h3>
          </div>
          <InnerAccord open={this.state.heroFeatureOpen}>
            <GridDiv>
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
            </GridDiv>
          </InnerAccord>
        </OuterAccord>
        <OuterAccord id="prod-feature-container" onClick={this.toggleProdsOpen}>
          <div>
            <h3>
              <Icon src="https://lulu-fec.s3.us-east-2.amazonaws.com/icon4.png"></Icon>
              <Span> Product Features </Span>
              <div id="plus-minus"></div>
            </h3>
          </div>
          <InnerAccord open={this.state.productFeaturesOpen}>
            <GridDiv>
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
            </GridDiv>
          </InnerAccord>
        </OuterAccord>
        <OuterAccord id="materials-care" onClick={this.toggleMaterialsOpen}>
          <div id="accordion-grid">
            <h3>
              <Icon src="https://lulu-fec.s3.us-east-2.amazonaws.com/icon5.png"></Icon>
              <Span>Materials and care</Span>
              <div id="plus-minus"></div>
            </h3>
          </div>
          <InnerAccord open={this.state.materialsOpen}>
            <GridDiv>
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
            </GridDiv>
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