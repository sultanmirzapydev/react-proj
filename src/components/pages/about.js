import React from 'react';
import {Alert} from '../utils/alert';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FaReact } from "react-icons/fa";
import django from '../../images/django2.png';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import axios from '../../images/axios.png';


const useStyles= makeStyles((theme) =>({
	firstcontainer : {
		
		width: ' auto',
		height:'auto',
	},
	seconcontainer : {
		position: 'relative',
		top: '2rem',
		width: '88%',
		height:'28rem',
		background:'#ECEFF1',
		margin: '0 auto',
		borderRadius:'1rem',
		boxShadow:'0px 6px 5px -3px #616161',
		//0 3px 5px -3px
	},
	thirdcontainer : {

	},
	title: {
		position:'relative',
		top: '3rem',
		display:'inline-block',
		margin:'0 auto',
	},
	iconscontainer : {
		marginTop: '2rem',
		position:'relative',
		height: '20rem',
		width:'70%',
		background:'#CFD8DC',
		margin:' 0 auto',
		borderRadius:'.8rem',
		
	},
	reacticon : {
		position:'absolute',
		color: '#1565C0',
		fontSize: '3rem',
		top: '5rem',
		left:' 2rem',
	},
	redux: {
		position:'absolute',
		color:'#673AB7',
		fontSize:'3rem',
	},
	django : {
		position:'absolute',
		backgroundSize: 'cover',
		backgroundPosition:' center',
		width:'100%',
		height:'100%',
		//borderRadius:'1.2rem',
		objectFit:'contain',
		

	},
	djangocontainer : {
		position:'relative',
		top:'4rem',
		left:'8rem',
		//borderRadius:'2rem',
		width:'9rem',
		height:'3rem',	
	},
	html :{
		color:'#E65100',
		fontSize:'3rem',
	},
	css : {
		color:'blue',
		fontSize:'3rem',
	},
	axios: {
		width:'100%',
		height:'100%',
		objectFit:'contain',
		backgroundSize:'cover',
		backgroundPosition:'center',

	},
	axioscontainer : {
		position:'absolute',
		width:'10rem',
		height:'8rem',
		
	}
}) )


export const About = () => {
	const classes = useStyles();
	const history = useHistory();
  const path    = history.location.pathname;
  
	return (<>
			<Grid container  classes={{ root: classes.firstcontainer}} >
			<Grid item container classes={{root: classes.seconcontainer}}>
				<Grid item container classes={{root: classes.thirdcontainer}}>

				<Typography classes={{root: classes.title}} > I've create this project using these below libraries and frameworks:
				</Typography>
				</Grid>
				<Grid item container classes={{root:classes.iconscontainer}}>
				
				<FaReact className={classes.reacticon}/>
				<FaReact className={classes.redux} />
				<Grid item className={classes.djangocontainer}>
				<img src={`${django}`} className={classes.django} />
				</Grid>
				<ImHtmlFive className={classes.html}/>
				<IoLogoCss3 className={classes.css} />
				<Grid item className={classes.axioscontainer}>
				<img src={axios} className={classes.axios}/>
				</Grid>
				</Grid>
			</Grid>
			</Grid>
	 </>);
}