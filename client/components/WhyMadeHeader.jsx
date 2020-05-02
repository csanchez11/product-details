import React from 'react';

const WhyMadeHeader = (props) => {
  console.log(props.product.imgurl1, "Props.product from inside WhyHeader");
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
              <source>
                {/* <img src={props.product.imgurl1} /> */}
              </source>
            </picture>
            <picture id="whyMadeImage2">
              <source>
                {/* <img src={props.product.imgurl2} /> */}
              </source>
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