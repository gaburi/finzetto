import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 200;
}
:root{
  --red: #eb1636;
  --purple:#5252D4;
  --black: #242130;
  --blue:#8B8bE2;
  --black-lighter: #484261;
}



a{
    text-decoration: none;
}

li{
    list-style-type: none;
}

`;
