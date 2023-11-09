import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Component } from "./styles";

const useStyles = makeStyles({
  gradientButton: {
    background: '#EAE6EF',
    color: 'white',
  },
});

export function Targe() {
  const classes = useStyles();

  return (
    <Component>
      <div className="safe">
      <img src="/safe.png" alt="Cofre" />
      </div>
      <div className="tRight">
        <h2>Não Fique Para Trás!</h2>
        <p>No mundo da cibersegurança, estar atualizado e protegido é essencial. Se você deseja proteger seu negócio contra ameaças digitais e melhorar sua postura de segurança, estamos aqui para ajudar.</p>
        <Button
          className={classes.gradientButton}
          variant="contained"
        >
          View More
        </Button>
      </div>
    </Component>
  )
}
