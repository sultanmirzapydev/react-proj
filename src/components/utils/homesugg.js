import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from '../material-ui/homesuggcustom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import {Link} from 'react-router-dom';


export const HomeSugg = () => {
	const [active, setActive] = useState('');
	const classes = useStyles();
  const a = active 
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
				<div className={`${active==='nature'?[classes.showActive]:null}`}>
				<Button classes= {{root: classes.forbutton}} onClick={handleClick} >
					<Typography classes = {{ root: classes.typography}} >
					nature
					</Typography  >
				</Button>
				</div>
					<div className={`${active==='puppies'?[classes.showActive]:null}`}>
					<Button classes= {{root:classes.forbutton}} 
					onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}} >
					puppies
					</Typography>
					</Button >
					</div>
					<div className={`${active==='cat'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton}} onClick={handleClick} >
					<Typography classes = {{ root: classes.typography}}>
					cat
					</Typography>
					</Button>
					</div>
					<div className={`${active==='sports'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					sports
					</Typography>
					</Button>
					</div>
					<div className={`${active==='summer'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					summer
					</Typography>
					</Button>
					</div>
					<div className={`${active==='outside'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					outside
					</Typography>
					</Button>
					</div>
					<div className={`${active==='fashion'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					fashion
					</Typography>
					</Button>
					</div>
					<div className={`${active==='experimental'?[classes.showActive]:null}`}>
					<Button classes= {{root: classes.forbutton}} onClick={handleClick}>
					<Typography classes = {{ root: classes.typography}}>
					experimental
					</Typography>
					</Button>
					</div>
					
					
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
					<span className = {classes.signUp}>sign up  </span> </Link>
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