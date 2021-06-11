import React from 'react';
import {Alert} from '../utils/alert';

import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FaReact } from "react-icons/fa";
import django from '../../images/django2.png';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import axios from '../../images/axios.png';
import python from '../../images/python2.png';
import drf from '../../images/drf.jpg';
import materialui from '../../images/materialui.png';



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
		marginBottom: '4.9rem',
		[theme.breakpoints.down(780)]: {
			width:'94%',
		},
		[theme.breakpoints.down(620)] : {
			height:'35rem',
		}
		
	},
	thirdcontainer : {
			[theme.breakpoints.down(620)] : {
			height:'2rem',
		}
	},
	title: {
		position:'relative',
		top: '3rem',
		display:'inline-block',
		margin:'0 auto',
		[theme.breakpoints.down(620)] : {
			top:'.7rem',
			//height:'1rem',
		}
	},
	iconscontainer : {
		marginTop: '2rem',
		position:'relative',
		height: '20rem',
		width:'70%',
		background:'#CFD8DC',
		margin:' 0 auto',
		borderRadius:'.8rem',
		[theme.breakpoints.down(1010)] : {
			width:'90%',
		},
		[theme.breakpoints.down(780)] : {
			width:'96%',
		},
		[theme.breakpoints.down(620)] : {
			height:'28rem',
		}
	},
	reacticon : {
		position:'absolute',
		color: '#4DD0E1',
		fontSize: '4rem',
		top: '2rem',
		left:' 10%',
		[theme.breakpoints.down(900)] : {
			left: '5%',
		}
	},
	reacttext : {
		position:'absolute',
		color: 'white',
		background: '#4DD0E1',
		borderRadius:'.5rem',
		border: '.2rem solid #4DD0E1',
		padding: '.1rem .4rem .3rem .4rem',
		alignItem:'center',
		top: '6rem',
		left: '10%',
		'&:hover': {
			background:'#D1C4E9',
			color:'white',
		},
		[theme.breakpoints.down(900)] : {
			left:'5%',
		}
	},

	redux: {
		position:'absolute',
		color:'#673AB7',
		top: '2rem',
		left: '25%',
		fontSize:'4rem',
		[theme.breakpoints.down(900)] : {
			left:'21%',
		},
		[theme.breakpoints.down(620)] : {
			left:'32%',
		}
	},
	reduxtext : {
		position:'absolute',
		color: 'white',
		top: '6rem',
		left: '25%',
		background: '#7E57C2',
		borderRadius:'.5rem',
		border: '.2rem solid #7E57C2',
		padding: '.1rem .4rem .3rem .4rem',
		alignItem:'center',
		[theme.breakpoints.down(900)] : {
			left:'21%',	
		},
		[theme.breakpoints.down(620)] : {
			left:'32%',
		},
		'&:hover': {
			background:'#D1C4E9',
		}
	},
	django : {
		position:'absolute',
		backgroundSize: 'cover',
		backgroundPosition:' center',
		width:'100%',
		height:'100%',
		//borderRadius:'1.2rem',
		objectFit:'contain',
		[theme.breakpoints.down(620)] : {
		 //top:'10rem',	
		}
		

	},
	djangocontainer : {
		position:'relative',
		top:'11.5rem',
		left:'23%',
		
		width:'9rem',
		height:'3rem',	
		[theme.breakpoints.down(900)] : {
			left:'18%'
		},
		[theme.breakpoints.down(620)] : {
			top:'21rem',
		},
		[theme.breakpoints.down(420)] : {
			left:'23%',
		},
		[theme.breakpoints.down(360)] : {
			left:'16%',
		}
	},
	djangotext: {
			position:'absolute',
		top:'4rem',
		left: '26%',
		background: '#1b421e',
		color:'white',
		borderRadius:'.5rem',
		border: '.2rem solid #1b421e',
		padding: '.1rem .4rem .3rem .4rem',
		alignItem:'center',
		'&:hover': {
			background:'#D1C4E9',
			color:'black',
		},
	},
	html :{
		position:'absolute',
		color:'#E65100',
		fontSize:'3.6rem',
		top:'2.5rem',
		left:'54%',
		[theme.breakpoints.down(620)] : {
			left:'80%',
		},
		[theme.breakpoints.down(360)] : {
			left:'78%',
		}
	},
	htmltext: {
		position:'absolute',
		top:'6.2rem',
		left: '53.4%',
		background: '#E65100',
		color:'white',
		borderRadius:'.5rem',
		border: '.2rem solid #E65100',
		padding: '.1rem .4rem .3rem .4rem',
		alignItem:'center',
		[theme.breakpoints.down(620)] : {
			left:'80%',
		},
		[theme.breakpoints.down(360)] : {
			left:'77%',
		},
		'&:hover': {
			background:'#D1C4E9',
			color:'black',
		},
	},
	css : {
		position:'absolute',
		top:'2.2rem',
		left:'39%',
		color:'blue',
		fontSize:'4rem',
		[theme.breakpoints.down(620)] : {
			left:'57%',
		},
	},
	csstext : {
		position:'absolute',
		top:'6.2rem',
		left: '39.5%',
		background: 'blue',
		color:'white',
		borderRadius:'.5rem',
		border: '.2rem solid blue',
		padding: '.1rem .4rem .3rem .4rem',
		alignItem:'center',
		[theme.breakpoints.down(620)] : {
			left:'58%',
		},
		'&:hover': {
			background:'#D1C4E9',
			color:'black',

		}
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
		top: '9rem', 
		left: '44%',
		[theme.breakpoints.down(710)] : {
			left:'40%',
		},
		[theme.breakpoints.between(710,920)] : {
			left:'42%',
		},
		[theme.breakpoints.down(620)] : {
			left:'29%',
		},
		[theme.breakpoints.down(480)] : {
			left:'23%',
		},
		[theme.breakpoints.down(420)] : {
			left:'9%',
		},
		[theme.breakpoints.down(360)] : {
			left:'2%',
		}
		
	},
	axiostext : {
		position:'absolute',
		color: 'white',
		background: '#7E57C2',
		borderRadius:'.5rem',
		border: '.2rem solid #7E57C2',
		padding: '.1rem .4rem .3rem .4rem',
		alignItem:'center',
		top: '6.5rem',
		left: '37%',
		'&:hover': {
			background:'#D1C4E9',
			color:'#607D8B',

		}

	},
	drf: {
		position:'absolute',
		width:'100%',
		height:'100%',
		objectFit:'contain',
		borderRadius:'.5rem',

	},
	drftext : {
		position:'absolute',
		color: 'white',
		background: '#E57373',
		borderRadius:'.5rem',
		border: '.2rem solid #E57373',
		padding: '.1rem .4rem .3rem .4rem',
		alignItem:'center',
		top: '5.3rem',
		left: '28%',
		'&:hover': {
			background:'#D1C4E9',
			color:'#607D8B',

		}

	},
	drfcontainer: {
		position:'absolute',
		top: '10.5rem',
		left: '70%',
		width:'8rem',
		height: '6rem',
		borderRadius:'.5rem',
		[theme.breakpoints.down(620)] : {
			left:"68%"
		},
		[theme.breakpoints.down(480)] : {
			left:'65%',
		},
		[theme.breakpoints.down(420)] : {
			left:'57%',
		},
		[theme.breakpoints.down(360)] : {
			left:'55%',
		}
	},
	python: {
		position:'absolute',
		width:'100%',
		height: '100%',
		objectFit:'contain',


	},
	pythoncontainer: {
		position:'absolute',
		top:'11rem',
		left: '8.5%',
		width:'5rem',
		height:'4rem',
		[theme.breakpoints.down(900)] : {
			left:'4%',
		},
		[theme.breakpoints.down(420)] : {
			top:'21rem',
		},
		[theme.breakpoints.down(360)] : {
			left:'-1%',
		}
	},
	pythontext: {
			position:'absolute',
		top:'4.5rem',
		left: '5%',
		background: '#FFEB3B',
		color:'#607D8B',
		borderRadius:'.5rem',
		fontWeight: '600',
		border: '.2rem solid #FFEB3B',
		padding: '.1rem .4rem .3rem .4rem',
		alignItem:'center',
		'&:hover': {
			background:'#D1C4E9',
			color:'#607D8B',

		}
	},
	materialui : {
		position:'absolute',
		width:'100%',
		height: '100%',
		objectFit:'contain',
		

	},
	materialuicontainer: {
		position:'absolute',
		left: '70%',
		top: '1.4rem',
		width:'8rem',
		height:'6rem',
		[theme.breakpoints.down(620)] : {
		top:'19.7rem',	
		left:'57%',
		},
		[theme.breakpoints.down(420)] : {
			left:'60%',
		

		},
		[theme.breakpoints.down(360)] : {
			left:'57%',
		}
	},
	materialuitext: {
		position:'absolute',
		color: 'white',
		background: '#2196F3',
		borderRadius:'.5rem',
		border: '.2rem solid #2196F3',
		padding: '.1rem .4rem .3rem .4rem',
		alignItem:'center',
		top: '5rem',
		left: '10%',
		'&:hover': {
			background:'#D1C4E9',
			
			color: 'black',
		},

	},
}) )


export const About = () => {
	
	const classes = useStyles();
	
  
	return (<>
			<Grid container  classes={{ root: classes.firstcontainer}} >
			<Alert/>
			<Grid item container classes={{root: classes.seconcontainer}}>
				<Grid item container classes={{root: classes.thirdcontainer}}>

				<Typography classes={{root: classes.title}} > I've create this project using these below libraries and frameworks:
				</Typography>
				</Grid>
				<Grid item container classes={{root:classes.iconscontainer}}>
				<div >
				<FaReact className={classes.reacticon}/>
				<div  href='https://reactjs.org/' className={classes.reacttext}> React </div>
				</div>
				<div>
				<FaReact className={classes.redux} />
				<div  className={classes.reduxtext}> Redux </div>
				</div>
				<Grid item className={classes.djangocontainer}>
				<img alt='django ' src={`${django}`} className={classes.django} />
				<div className={classes.djangotext}> Django </div>
				</Grid>
				<ImHtmlFive className={classes.html}/>
				<div className={classes.htmltext}> Html5 </div>
				<IoLogoCss3 className={classes.css} />
				<div className={classes.csstext}> Css3 </div>
				<Grid item className={classes.axioscontainer}>
				<img alt='axios' src={axios} className={classes.axios}/>
				<div className={classes.axiostext}> Axios </div>
				</Grid>
				<div className={classes.pythoncontainer}>
				<img alt='python' src={python} className={classes.python}/>
				<div className={classes.pythontext}> Python </div>
				</div>
				<div className={classes.drfcontainer} >
				<img alt='drf' src={drf} className={classes.drf}/>
				<div className={classes.drftext}> DRF </div>
				</div>
				<div  className={classes.materialuicontainer}>
				<img alt='materialui' src={materialui} className={classes.materialui} />
				<div className={classes.materialuitext}> Material-UI </div>
				</div>
				</Grid>
			</Grid>
			</Grid>
	 </>);
}