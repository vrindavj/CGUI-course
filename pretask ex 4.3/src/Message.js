import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

// setting custom styles
const useStyles = makeStyles({
  msgField: {
    color:'#0288d1',
    paddingTop: 30,
  },
});

export const Message = ({ petObj }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.msgField} variant="h4" component="h3">
        {petObj}
      </Typography>
    </div>
  );
};
