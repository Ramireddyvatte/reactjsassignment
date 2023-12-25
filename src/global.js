import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--web-h3-sb: Poppins;
--font-font-awesome-5-free: 'Font Awesome 5 Free';

/* font sizes */
--web-sub-heading-medium-size: 20px;
--web-h3-sb-size: 48px;
--web-body-sb-size: 16px;
--web-title-size: 24px;
--web-h4-size: 32px;
--web-h2-size: 64px;
--web-h1-size: 90px;
--web-hero-punch-size: 109px;
--web-label-size: 12px;

/* Colors */
--bg-primary: #fff;
--primary: #661fff;
--color-darkslategray-100: #434343;
--text-primary: #273437;
--stroke-light: #d1d1d1;
--text-secondary: #787878;
--bg-secondary: #f6f2ff;
--secondary: #ceff1a;

/* Spacing */
--l: 150px;
--l1: 48px;
--l2: 100px;
--md: 32px;
--xl: 64px;
--s: 24px;
--xs: 16px;
--xxs: 8px;

/* Gaps */
--gap-45xl: 64px;
--gap-13xl: 32px;
--gap-5xl: 24px;
--gap-6xl: 25px;

/* Paddings */
--padding-13xl: 32px;
--padding-81xl: 100px;
--padding-base: 16px;
--padding-5xl: 24px;
--padding-5xs: 8px;

/* Border radiuses */
--br-81xl: 100px;
--br-5xs: 8px;
--br-lg-8: 18.8px;
--br-7xs: 6px;
--br-9xs: 4px;
--br-11xs: 2px;

}
`;
