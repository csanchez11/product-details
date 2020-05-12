import { createGlobalStyle } from 'styled-components';

const calibre = 'https://lulu-fec.s3.us-east-2.amazonaws.com/CalibreRegular.woff';
const calibreSemi = 'https://lulu-fec.s3.us-east-2.amazonaws.com/CalibreSemibold.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'calibre';
        src: url(${calibre});
    }
    @font-face {
        font-family: 'calibreSemi';
        src: url(${calibreSemi});
    }
`;