import React from "react";
import Header from "./Header";
import { TextField, Button } from "@material-ui/core/";
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

function FormUserDetails(props) {
  const classes = styles();
  return (
    <>
      <Header title="Enter User Details" />
      <br />
      <div className="container">
        <TextField
          name="firstName"
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.focusedLabel,
              error: classes.erroredLabel,
            },
          }}
          InputProps={{
            classes: {
              root: classes.underline,
              error: classes.error,
            },
          }}
          margin="dense"
          label="First Name"
          onChange={(e) => props.handleChange(e)}
          fullWidth="true"
        />
        <br />
        <TextField
          name="LastName"
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.focusedLabel,
              error: classes.erroredLabel,
            },
          }}
          InputProps={{
            classes: {
              root: classes.underline,
              error: classes.error,
            },
          }}
          margin="dense"
          label="Last Name"
          onChange={(e) => props.handleChange(e)}
          fullWidth="true"
        />
        <br />
        <TextField
          name="email"
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.focusedLabel,
              error: classes.erroredLabel,
            },
          }}
          InputProps={{
            classes: {
              root: classes.underline,
              error: classes.error,
            },
          }}
          margin="dense"
          label="Email"
          onChange={(e) => props.handleChange(e)}
          fullWidth="true"
        />
        <br />
        <Button
          variant="contained"
          className={classes.button}
          onClick={(e) => props.nextStep()}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

export default FormUserDetails;
