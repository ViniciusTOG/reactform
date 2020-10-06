import React from "react";
import Header from "./Header";
import { TextField, Button } from "@material-ui/core/";
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

function FormPersonalDetails(props) {
  const classes = styles();
  return (
    <>
      <Header title="Enter Personal Details" />
      <br />
      <div className="container">
        <TextField
          name="occupation"
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
          label="Occupation"
          onChange={(e) => props.handleChange(e)}
          fullWidth="true"
        />
        <br />
        <TextField
          name="city"
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
          label="City"
          onChange={(e) => props.handleChange(e)}
          fullWidth="true"
        />
        <br />
        <TextField
          name="bio"
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
          label="Enter Your Bio"
          onChange={(e) => props.handleChange(e)}
          fullWidth="true"
        />
        <br />
        <div className="btn-container">
          <Button
            variant="contained"
            className={classes.button}
            onClick={(e) => props.nextStep()}
          >
            Continue
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

export default FormPersonalDetails;
