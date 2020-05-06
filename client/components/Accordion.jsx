import React from 'react';
import styled from 'styled-components';


const AccordWrapper = styled.div`
display: block;
width: 100%;
font-family: calibre;
`;

const OuterAccord = styled.div`
width: 100%;
cursor: pointer;
border: 1px;
border-top-style: solid;
border-color: #EEE;
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
font-size: 2em;
vertical-align: middle;
font-weight: bolder;
`;

const GridDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 25px;
`;

const GridTitle = styled.div`
grid-column: span 3;
font-weight: 900;
`;

const GridItem = styled.div`
grid-column: span 1;
background-color: #fafafa;
border-radius: .25rem;
padding: 20px;
font-size: 1.2em;
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
              <div></div>
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
              <GridItem key="1">
                <span >{this.props.features[1]}</span>
                </GridItem>
              <GridItem key="2">
                <span>{this.props.features[2]}</span>
              </GridItem>
              <GridItem key="3">
                <span>{this.props.features[3]}</span>
              </GridItem>
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
              {this.props.features.slice(4).map((element, index) => {
                return (
                  <GridItem key={index}>
                    <span >{element}</span>
                  </GridItem>
                )
              })
              }
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
              <GridTitle>Materials</GridTitle>
                <GridItem>
                  <span>{this.props.materials}</span>
                </GridItem>
              <GridTitle>Care</GridTitle>
                <GridItem>
                  <span>Wash with like colours</span>
                </GridItem>
                <GridItem>
                  <span>Machine wash cold</span>
                </GridItem>
                <GridItem>
                  <span>Do not bleach</span>
                </GridItem>
                <GridItem>
                  <span>Tumble dry low</span>
                </GridItem>
                <GridItem>
                  <span>Do not iron</span>
                </GridItem>
                <GridItem>
                  <span>Do not dry clean</span>
                </GridItem>
                <GridItem>
                  <span>Imported</span>
                </GridItem>
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