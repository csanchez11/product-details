import { createGlobalStyle } from 'styled-components';

import calibre from './CalibreRegular.woff';
import calibreSemi from './CalibreSemibold.woff';
import calibreBold from './CalibreBold.woff';
import calibreBlack from './CalibreBlack.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'calibre';
        src: local('calibre'), local('calibreSemi'), local('calibreBold'), local('calibreBlack'),
        url(${calibre}) format('woff'),
        url(${calibreSemi}) format('woff');
        url(${calibreBold}) format('woff');

    }
`;