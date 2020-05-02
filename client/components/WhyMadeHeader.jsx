import React from 'react';

const WhyMadeHeader = (props) => {
    return (
      <div id="wrapper">
        <div id="whyMade">
          <h2 id="whyMade-header">
            Why we
          <br></br>
            made this
          </h2>
          <p id="whyMade-paragraph">{props.product.why_we_made_this}</p>
        </div>
        <div id="image-section">
          <span>
            <picture id="whyMadeImage1">
              <img src={props.product.imgurl1} />
            </picture>
            <picture id="whyMadeImage2">
              <img src={props.product.imgurl2} />
            </picture>
          </span>
        </div>
      </div>
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