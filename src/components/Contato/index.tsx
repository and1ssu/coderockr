import * as React from "react";

import SendIcon from "@mui/icons-material/Send";
import { Button, TextareaAutosize, Typography } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Contato(): JSX.Element {
  return (
    <div>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "#F1A10A",
          fontweight: "700",
          fontSize: "36px",
        }}
      >
        Contact
      </DialogTitle>

      <DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        />
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
        <Typography mt={5}> Post</Typography>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Hello..."
          style={{ marginTop: 11, width: "550px", height: "200px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            sx={{
              background: "#2D2D2D",
              "&:hover": {
                background: "#F1A10A",
              },
            }}
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </div>
  );
}
