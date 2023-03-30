import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Roboto Mono', monospace;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
    /* background-color: #2c2c54; */
	background: rgb(36,47,110);
background: linear-gradient(335deg, rgba(36,47,110,1) 27%, rgba(34,61,149,1) 42%, rgba(32,74,180,1) 51%, rgba(29,92,199,1) 63%, rgba(27,112,242,1) 86%, rgba(13,104,244,1) 100%, rgba(59,136,254,1) 100%);

	height: 100vh;
	overflow: hidden;
    

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}




`;