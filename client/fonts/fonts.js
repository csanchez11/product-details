import { createGlobalStyle } from 'styled-components';

import calibre from './CalibreRegular.woff';
import calibreSemi from './CalibreSemibold.woff';
import calibreBold from './CalibreBold.woff';
import calibreBlack from './CalibreBlack.woff'

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
    @font-face {
        font-family: 'calibreBold';
        src: local('calibreBold'),
        url(${calibreBold}) format('woff');
    }
    @font-face {
        font-family: 'calibreBlack';
        src: local('calibreBlack'),
        url(${calibreBlack}) format('woff');
    }
`;

