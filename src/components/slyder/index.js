import { Component } from "./styled";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Slider() {


  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#e53e3e',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

  return (
    <Component>
      <hgroup>
        <h1>
          Cyber Security<br />
          Solution
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc sagittis mauris ac enim sagittis dignissim.
          Praesent egestas, urna quis.
        </p>

        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color="primary"
          >
            View More
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="./curriculum.pdf"
            download={"curriculum.pdf"}
          >
            Curriculum
          </Button>

        </ThemeProvider>

      </hgroup>

      <div className="img">

      </div>



    </Component>
  )
}