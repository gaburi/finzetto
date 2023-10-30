import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;

}
:root {
  --primary-blue: #00E5BC;
  --primary-light-blue: #4DA1FF;
  
  --accent-magenta: #E323FF;
  --accent-purple: #7517F8;
  
  --gradient-yellow: #ED713C;
  --gradient-orange: #FFA904;
  
  --neutral-dark: #05050F;
  --neutral-gray: #14142B;
  --neutral-gray-rgb: 5, 5, 15;
  --neutral-mid: #8F99A3;
  --neutral-light: #FFFFFF;

  --semantic-red: #FF2D2E;
  --semantic-purple: #EAE6EF;
  --semantic-green: #26F022;
  --semantic-light-green: #6EE46C;
  
  --gradient-pink: #CF21FE;
  --gradient-blue: #05050F;
  --gradient-teal: #481FFE;
  --gradient-dark-purple: #7051F6;
}



body{
  background-color: var(--neutral-gray);
}


a{
    text-decoration: none;
}

li{
    list-style-type: none;
}

`;
