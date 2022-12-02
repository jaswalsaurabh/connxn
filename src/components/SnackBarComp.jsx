import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  successDark: {
    color: "#4dff4d",
    boxShadow: "none",
    borderRadius: 0,
    border: "2px solid #4dff4d",
  },
  errorDark: {
    color: "#ff6666",
    boxShadow: "none",
    borderRadius: 0,
    border: "2px solid #ff6666",
  },
  infoDark: {
    color: "#66d9ff",
    boxShadow: "none",
    borderRadius: 0,
    border: "2px solid #66d9ff",
  },
  success: {
    backgroundColor: "rgba(71, 107, 107, 0.3)",
    color: "#476b6b",
    boxShadow: "none",
    borderRadius: 0,
  },
  error: {
    backgroundColor: "rgba(255, 153, 153, 0.3)",
    color: "#ff6666",
    boxShadow: "none",
    borderRadius: 0,
  },
  warning: {
    backgroundColor: "rgba(255, 219, 153, 0.3)",
    color: "#ffc14d",
    boxShadow: "none",
    borderRadius: 0,
  },
  info: {
    backgroundColor: "rgba(153, 230, 255, 0.3)",
    color: "#66d9ff",
    boxShadow: "none",
    borderRadius: 0,
  },
}));

const OpenSnackbar = ({
  message,
  type,
  open,
  setOpen,
  vertical,
  horizontal,
}) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        ContentProps={{
          classes: {
            root: classes[type],
          },
        }}
        anchorOrigin={{
          vertical: vertical,
          horizontal: horizontal,
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default OpenSnackbar;
