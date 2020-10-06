import React from "react";
import Header from "./Header";
import { Button, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  button: {
    marginTop: "30px",
    background: "rgb(0,190,209)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(0,170,190)",
    },
  },
  title: {
    marginBottom: "50px",
  },
}));

function Confirm(props) {
  const classes = styles();
  return (
    <>
      <Header title="Success" />
      <br />
      <div className="container">
        <Typography className={classes.title} align="center" variant="h3">
          Thank you for your submission!
        </Typography>
        <Typography align="center" variant="subtitle1">
          We will get in touch soon! Don't forget to check you email in the next
          days!
        </Typography>
        <br />
        <Button
          variant="contained"
          className={classes.button}
          onClick={(e) => props.restartStep()}
        >
          Submit Again
        </Button>
      </div>
    </>
  );
}

export default Confirm;
