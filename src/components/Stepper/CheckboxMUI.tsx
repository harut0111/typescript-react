import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as React from "react";

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (name:string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={state.checkedA}
          onChange={handleChange("checkedA")}
          value="checkedA"
          style={{color: '#4f0103'}}
        />
      }
      label="данные верны"
    />
  );
}