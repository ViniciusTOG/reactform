import React, { useState } from "react";
import Confirm from "./Confirm";
import Sucess from "./Sucess";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";

function UserForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  const info = [firstName, secondName, email, occupation, city, bio];

  function nextStep() {
    setStep((prevStep) => prevStep + 1);
  }

  function prevStep() {
    setStep((prevStep) => prevStep - 1);
  }

  function restartStep() {
    setStep(0);
  }

  function handleChange(e) {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "LastName") {
      setSecondName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "occupation") {
      setOccupation(e.target.value);
    } else if (e.target.name === "city") {
      setCity(e.target.value);
    } else if (e.target.name === "bio") {
      setBio(e.target.value);
    }
  }

  switch (step) {
    case 1:
      return (
        <FormUserDetails handleChange={handleChange} nextStep={nextStep} />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
    case 3:
      return <Confirm nextStep={nextStep} prevStep={prevStep} info={info} />;
    case 4:
      return <Sucess restartStep={restartStep} />;
    default:
      return (
        <FormUserDetails nextStep={nextStep} handleChange={handleChange} />
      );
  }
}

export default UserForm;
