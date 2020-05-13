import React from 'react';
import styled from 'styled-components';


const AccordWrapper = styled.div`
display: block;
width: 100%;
font-family: calibre;
background-color: #fff;
padding-top: 1em;
`;

const OuterAccord = styled.div`
width: 100%;
cursor: pointer;
border: 1px;
border-top-style: solid;
border-color: #EEE;
`;

const OuterAccordGrid = styled.div`
display: grid;
grid-template-columns: repeat(10, 1fr);
grid-gap: 10px;
padding: 0 3rem;
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
padding-right: 1rem;
height: 50px;
vertical-align: middle;
`;

const Span = styled.span`
display: inline-block;
font-size: 1.5em;
vertical-align: middle;
font-weight: bolder;
font-family: calibreSemi;
`;

const GridDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 25px;
padding: 0 3rem;
`;

const GridTitle = styled.div`
grid-column: span 3;
font-family: calibreSemi;
`;

const GridItem = styled.div`
grid-column: span 1;
background-color: #fafafa;
border-radius: .25rem;
padding: 20px;
font-size: 1.2em;
`;

const TitleGrid = styled.div`
display: grid;
grid-template-columns: 11fr 1fr;
grid-gap: 25px;
padding: 1rem 3rem;
`;

const PlusMinusContainer = styled.div`
grid-column: 2;
display: flex;
align-items: center;
justify-content: center;
`;

const Plus = styled.img`
max-height: 50px;
width: auto;
position: absolute;
transition: 0.3s;
transform: ${props => (props.open ? "rotate(0deg)" : "rotate(90deg)")};
`;

const Minus = styled.img`
max-height: 50px;
width: auto;
position: absolute;
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
          <TitleGrid>
            <h3>
              <Icon src="https://lulu-fec.s3.us-east-2.amazonaws.com/icon1.png"></Icon>
              <Span>Designed for {this.props.designed_for}</Span>
              <div></div>
            </h3>
          </TitleGrid>
        <OuterAccord id="hero-prod-feature" onClick={this.toggleHeroOpen}>
          <TitleGrid>
            <h3>
              <Icon src="https://lulu-fec.s3.us-east-2.amazonaws.com/icon2.png"></Icon>
              <Span>{this.props.features[0]}</Span>
            </h3>
            <PlusMinusContainer>
              <div style={{ position: 'relative' }}>
                <Plus src="https://lulu-fec.s3.us-east-2.amazonaws.com/MinusClean.png" open={this.state.heroFeatureOpen}></Plus>
                <Minus src="https://lulu-fec.s3.us-east-2.amazonaws.com/MinusClean.png"></Minus>
              </div>
            </PlusMinusContainer>
          </TitleGrid>
          <InnerAccord open={this.state.heroFeatureOpen}>
            <GridDiv>
              <GridItem key="1" id="feature">
                <span >{this.props.features[1]}</span>
                </GridItem>
              <GridItem key="2" id="feature">
                <span>{this.props.features[2]}</span>
              </GridItem>
              <GridItem key="3" id="feature">
                <span>{this.props.features[3]}</span>
              </GridItem>
            </GridDiv>
          </InnerAccord>
        </OuterAccord>
        <OuterAccord id="prod-feature-container" onClick={this.toggleProdsOpen}>
          <TitleGrid>
            <h3>
              <Icon src="https://lulu-fec.s3.us-east-2.amazonaws.com/icon4.png"></Icon>
              <Span> Product Features </Span>
            </h3>
            <PlusMinusContainer>
              <div style={{ position: 'relative' }}>
                <Plus src="https://lulu-fec.s3.us-east-2.amazonaws.com/MinusClean.png" open={this.state.productFeaturesOpen}></Plus>
                <Minus src="https://lulu-fec.s3.us-east-2.amazonaws.com/MinusClean.png"></Minus>
              </div>
            </PlusMinusContainer>
          </TitleGrid>
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
        <OuterAccord onClick={this.toggleMaterialsOpen}>
          <TitleGrid id="accordion-grid">
            <h3>
              <Icon src="https://lulu-fec.s3.us-east-2.amazonaws.com/icon5.png"></Icon>
              <Span id="materials-care">Materials and care</Span>
            </h3>
            <PlusMinusContainer>
              <div style={{ position: 'relative' }}>
                <Plus src="https://lulu-fec.s3.us-east-2.amazonaws.com/MinusClean.png" open={this.state.materialsOpen}></Plus>
                <Minus src="https://lulu-fec.s3.us-east-2.amazonaws.com/MinusClean.png"></Minus>
              </div>
            </PlusMinusContainer>
          </TitleGrid>
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
