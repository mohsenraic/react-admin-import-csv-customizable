import ReactDOM from "react-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import React from "react";

export enum DialogType {
  ERROR,
  SUCCESS,
  WARNING,
  LOADING,
}

let dialogContainer: HTMLDivElement | null = null;

export const showDialog = (
  title: string,
  message: string,
  type: DialogType
) => {
  if (dialogContainer) {
    closeDialog(); // Close any existing dialog before opening a new one
  }

  dialogContainer = document.createElement("div");
  document.body.appendChild(dialogContainer);

  const handleClose = () => {
    closeDialog();
  };

  ReactDOM.render(
    <Dialog open onClose={handleClose}>
      <DialogTitle>
        {type === DialogType.SUCCESS && (
          <CheckCircleIcon style={{ color: "green", marginRight: "8px" }} />
        )}
        {type === DialogType.ERROR && (
          <ErrorIcon style={{ color: "red", marginRight: "8px" }} />
        )}
        {type === DialogType.WARNING && (
          <WarningAmberIcon style={{ color: "orange", marginRight: "8px" }} />
        )}

        {title}
      </DialogTitle>
      <DialogContent style={{ textAlign: "center" }}>
        <div dangerouslySetInnerHTML={{ __html: message }} />
        {type === DialogType.LOADING && (
          <CircularProgress size={24} style={{ marginRight: "8px" }} />
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
          disabled={type === DialogType.LOADING}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>,
    dialogContainer
  );
};

export const closeDialog = () => {
  if (dialogContainer) {
    ReactDOM.unmountComponentAtNode(dialogContainer);
    document.body.removeChild(dialogContainer);
    dialogContainer = null;
  }
};
