import Error404 from '../svg/Error.png';

import { Typography, SvgIcon } from '@material-ui/core';
import { useNotFoundPageStyles } from '../styles/muiStyles';

const NotFoundPage = () => {
  const classes = useNotFoundPageStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <img src={Error404} alt="" height="250" width="280"/>
        <Typography color="primary" variant="h5">
          Page Not Found 404
        </Typography><br/>
        <Typography color="secondary" variant="body1">
        This page not found (deleted or never exists).<br/>Go back to home and start again.
        </Typography>
        
      </div>
       
    </div>
   
  );
};

export default NotFoundPage;
