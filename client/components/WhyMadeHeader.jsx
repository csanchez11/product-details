import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gaps: 3em;
gird-template-rows: 1fr;
background-color: #fafafa;
color: #000;
margin: 0 auto;
width: 100%;
height: 100%;
max-height: 500px;
padding: 2rem;
font-family: calibre;
`;

const WhyMade = styled.div`
background: none;
height: 100%;
padding: 0 2em 0 0;
`;

const H2 = styled.h2`
width: 100%;
max-height: 100%;
font-family: calibreSemi;
font-size: 6em;
margin-top: 0;
margin-bottom:0;
`;

const PhotoDiv = styled.div`
grid-column: 2 / span 2;
display: grid;
grid-template-columns: repeat(2, 1fr);
background: none;
`;

const Img = styled.img`
width: auto;
height: auto;
max-height: 500px;
`;

const Redline = styled.img`
width: auto;
height: auto;
max-width: 40px;
`;

const WhyMadeHeader = (props) => {
    return (
      <Wrapper>
        <WhyMade>
          <H2 id="whyMade-header">
            Why we
          <br></br>
            made this
          </H2>
          <Redline src="https://lulu-fec.s3.us-east-2.amazonaws.com/Redline.png"/>
          <p id="whyMade-paragraph">{props.product.why_we_made_this}</p>
        </WhyMade>
        <PhotoDiv>
          <div id="whyMadeImage1">
            <Img src={props.product.imgurl1} />
          </div>
          <div id="whyMadeImage2">
            <Img src={props.product.imgurl2} />
          </div>
        </PhotoDiv>
      </Wrapper>
    )
};

export default WhyMadeHeader;


//Axios call is not pulling in time before mount
/*
Div - WhyMade Wrapper 1372 x 508 px
  Div - copy
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

Above is missing image and br tags

*/