import React from "react";
import Header from "./Header";
import { Button, ListItemText } from "@material-ui/core/";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  button: {
    marginRight: "30px",
    background: "rgb(0,190,209)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(0,170,190)",
    },
  },
  label: {
    "&$focusedLabel": {
      color: "rgb(0,190,209)",
    },
    "&$erroredLabel": {
      color: "orange",
    },
  },
  focusedLabel: {},
  erroredLabel: {},
  underline: {
    "&$error:after": {
      borderBottomColor: "orange",
    },
    "&:after": {
      borderBottom: `2px solid rgb(0,190,209)`,
    },
  },
  error: {},
}));

function Confirm(props) {
  const classes = styles();
  return (
    <>
      <Header title="Confirmation" />
      <br />
      <div className="list-container">
        <List>
          <ListItemText primary="First Name" secondary={props.info[0]} />
          <ListItemText primary="Last Name" secondary={props.info[1]} />
          <ListItemText primary="Email" secondary={props.info[2]} />
          <ListItemText primary="Occupation" secondary={props.info[3]} />
          <ListItemText primary="City" secondary={props.info[4]} />
          <ListItemText primary="Bio" secondary={props.info[5]} />
        </List>
        <br />
        <div className="btn-container">
          <Button
            variant="contained"
            className={classes.button}
            onClick={(e) => props.nextStep()}
          >
            Confirm & Continue
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={(e) => props.prevStep()}
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
}

export default Confirm;
