
import { VideoDemo } from '../components/Video';
import { Typography, SvgIcon } from '@material-ui/core';
import { useTeamStyles } from '../styles/muiStyles';

const TeamPage = () => {
  const classes = useTeamStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        
        <Typography color="secondary" variant="h3">
          <strong>Story behind Orion</strong>

        </Typography><br/>

        <Typography color="secondary" variant="body1" align="justify">
        Orion was designed and developed by an enthusiastic<br/> team of 3 to present an Institute specific discussion <br/>forum as a proof of concept. The project was greenlit<br/> by the Coding Club of IIT Guwahati and we thank<br/> them for their innovative ideas.
        </Typography>

      </div>
      
      <div className={classes.videoWrapper}>
        <VideoDemo />
      </div>
     
      
    </div>

    
  );


};

export default TeamPage;