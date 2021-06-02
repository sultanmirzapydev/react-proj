import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from '../material-ui/homesuggcustom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';


const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    //backgroundColor: '#f5f5f9',
    //color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
  
  arrow: {
  	//backgroundColor: 'white',
   // color: 'white',
  }
}))(Tooltip);


export const HomeSugg = () => {
	const [active, setActive] = useState('');
	const classes = useStyles();
  
	const handleClick = (e) => {
		console.log(e.currentTarget.textContent);
		setActive(e.currentTarget.textContent);
	};
	return (<> 
			<Grid container  classes={{root: classes.root}}> 
				<Grid item container classes={{root: classes.class1}} >
				<Grid item classes={{root: classes.class2}} >
				<Toolbar classes = {{ root: classes.toolBar}}>
				<div className={classes.tooldiv}>
				<HtmlTooltip arrow title='nature' >
				<div className={`${active==='nature'?[classes.showActive]:null}`}>
				<Button classes= {{root: classes.forbutton,label: classes.texttransform}} onClick={handleClick} >
					<Typography classes = {{ root: classes.typography}} >
					nature
					</Typography  >
				</Button>
				
				</div>
				</HtmlTooltip>
				<HtmlTooltip arrow title='puppies'>
					<div className={`${active==='puppies'?[classes.showActive]:null}`}>
					<Button classes= {{root:classes.forbutton,label: classes.texttransform}} 
					onClick={handleClick}>
					<Typography classes = {{ root: classes.typography,}} >
					puppies
					</Typography>
					</Button >
					</div>
				</HtmlTooltip>
				<HtmlTooltip arrow title='cat'>
					<div className={`${active==='cat'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton,label: classes.texttransform}} onClick={handleClick} >
					<Typography classes = {{ root: classes.typography}}>
					cat
					</Typography>
					</Button>
					</div>
				</HtmlTooltip>
				<HtmlTooltip arrow title='sports'>
					<div className={`${active==='sports'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton, label: classes.texttransform}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					sports
					</Typography>
					</Button>
					</div>
				</HtmlTooltip>
				<HtmlTooltip arrow title='summer'>
					<div className={`${active==='summer'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton,label: classes.texttransform}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					summer
					</Typography>
					</Button>
					</div>
				</HtmlTooltip>
				<HtmlTooltip arrow title='outside'>
					<div className={`${active==='outside'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton,label: classes.texttransform}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					outside
					</Typography>
					</Button>
					</div>
				</HtmlTooltip>
				<HtmlTooltip arrow title='fashion'>
					<div className={`${active==='fashion'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton,label: classes.texttransform}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					fashion
					</Typography>
					</Button>
					</div>
				</HtmlTooltip>
				<HtmlTooltip arrow title='experimental'>
					<div className={`${active==='experimental'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton,label: classes.texttransform}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					experimental
					</Typography>
					</Button>
					</div>
				</HtmlTooltip>
					
					</div>
					<div className={classes.fading}>
					</div>
				</Toolbar>
				</Grid>
				<Grid item  classes={{root: classes.membercon}}>
				<Toolbar classes={{ root: classes.typoh5}} >
				<Typography  classes={{root: classes.member}}>
					new here? &nbsp;&nbsp; 

					<Link to='/register'>
					
					<span className = {classes.signUp}>sign up  </span>  </Link> 
					&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
					already a member? &nbsp;
					<Link to='/login'>
					 <span className = {classes.logIn}> log in </span>  </Link>
				</Typography>
				</Toolbar>
				</Grid>
				</Grid>
			</Grid>

		</>);
} 