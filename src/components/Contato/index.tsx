import * as React from "react";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";

export default function Contato(): JSX.Element {
  return (
    <div>
      <DialogTitle>Contact</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="outlined-basic"
          label="Nome"
          type="nome"
          fullWidth
          variant="outlined"
        />
        <TextField
          autoFocus
          margin="dense"
          id="outlined-basic"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          autoFocus
          margin="dense"
          id="outlined-basic"
          label="Telefone"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          fullWidth
          variant="outlined"
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
          style={{ width: 200 }}
        />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button> */}
      </DialogActions>
    </div>
  );
}
