import React from "react";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'

const Add_recipe = () => (
  <div>
    <h2>Add_recipe</h2>

     <TextField
          id="title"
          label="title"
          placeholder="title"
          margin="normal"
        /><br />
          <TextField
          id="time"
          label="time"
          placeholder="time"
          margin="normal"
        /><br />
          <TextField
          id="oven"
          label="Time oven"
          placeholder="time"
          margin="normal"
        /><br />
          <TextField
          id="ingredien"
          label="stuff"
          placeholder="stuff"
          margin="normal"
        /><br />
<Button variant="raised" color="primary" >
        Create
      </Button>
  </div>
);

export default Add_recipe;