import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@material-ui/core/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Select, SelectChangeEvent } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import "../App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function EventModal() {
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = (e) => {
    console.log(e);
  };

  const handleChange = (SelectChangeEvent) => {
    setNumber(SelectChangeEvent.target.value);
  };

  return (
    <div className="container">
      <button onClick={handleOpen} className="add-btn">
        + Add Event
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
      >
        <Box sx={{ ...style, width: 400 }}>
          <form onSubmit={submitForm}>
            <div className="text-fields">
              <TextField
                required
                label="Event Title"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <div>
                <h2>May, 1 2022</h2>
                <span>11:00 AM</span>
                <span>12:00 PM</span>
              </div>
              <TextField
                required
                label="Location"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Responsible Person"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <FormControl sx={{ top: "5px", minWidth: 333 }}>
                <InputLabel
                  id="demo-simple-select-helper-label"
                  variant="outlined"
                >
                  Number
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  variant="outlined"
                  id="demo-simple-select-helper"
                  value={number}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={100}>Hundered</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                label="Location"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                required
                label="Location"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </div>
          </form>
          <Button onClick={handleClose}>Close</Button>
          <Button onSubmit={submitForm}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default EventModal;
