import { createGlobalStyle } from 'styled-components';

import calibre from './CalibreRegular.woff';
import calibreSemi from './CalibreSemibold.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'calibre';
        src: local('calibre'),
        url(${calibre}) format('woff');
    }
    @font-face {
        font-family: 'calibreSemi';
        src: local('calibreSemi'),
        url(${calibreSemi}) format('woff');
    }
`;