import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BsFillBookmarkStarFill } from "react-icons/bs";
import image from '../../assets/business.jpg';
import "./Grids.css"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 2),
    width: '100%'
    
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '2px',
    textAlign: 'center',
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const Grids = () => {
  const classes = useStyles();

  const btnClick = () => {
    console.log('Im here')
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSePliqqVx3bKY01egx2OIPGndveTCC-D88xOwp9P1_RAXiu2g/viewform?usp=sf_link')
  }

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} sm={6}>
          <img src={image} height={570} width={840} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <section id="grids">
            <div className="container grids">
              <div className="titleq" data-aos="fade-up">
                <BsFillBookmarkStarFill color="#fff" size={30} />
                <div>
                  <h2 style={{ color: '#fff' }} >Corporate Stakeholder Manager</h2>
                </div>
                <Typography variant="h5" component="h3" className={classes.title}>
                  Description:
                </Typography>
                <div>
                  <p className="u-text-small">
                    <b>Purpose of the Job:</b> To lead, co-ordinate and manage both internal and external corporate communications and stakeholder relations initiatives towards positioning the Umgeni Water brand as a leading water utility in the industry and broader society. To facilitate and initiate stakeholder engagements for the purpose of consolidating and establishing new relationships.<br />
                  </p>
                  <p className="u-text-small">
                    <br/><b>Minimum Qualifications:</b> Matric with Bachelor's Degree (NQF 7) in Journalism or Communications or Public Relations / Administration Management. Post graduate qualification in publishing, communication and design will be an added advantage. Minimum Experience: Minimum of 8 years' experience of which 5 years in a senior corporate or public sector stakeholder / communications, journalism role. (This level of skill and experience are required. Anything under 8 years may not be adequate).
                  </p>
                </div>
              </div>
              <button btnClass={"btn-light"} onClick={btnClick.bind(this)} >
                Apply Now
              </button>
            </div>
          </section>
        </Grid>
      </Grid>
    </Container >
  );
};

export default Grids;