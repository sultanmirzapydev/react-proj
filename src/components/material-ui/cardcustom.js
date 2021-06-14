import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
	flexgrow: {
    flexGrow: 1,
    [theme.breakpoints.down(420)] : {
      flexGrow: 1,
    },
},
	firstcontainer: {
		
		position: 'relative',
		marginBottom: '3rem',
		borderRadius: '.9rem',
		margin: '0 auto',
		width: '16rem',
		transition:'all 1s ease',
		boxShadow: '2px 2px 20px 6px rgba(0, 0, 0, 0.2)',
		[theme.breakpoints.down(600)] : {
			marginBottom: '1rem',
		},
		'&:hover': {
			//transform: 'scale(1.01)',
			boxShadow: '6px 5px 20px 4px rgba(0, 0, 0, 0.2)',

		}

	},
	grid : {
		width: '16rem',
		margin: '0 auto',
		gap: '.3rem',
	},
	cardmedia: {
		height: '14rem',
		width: 'auto',
		
		
	},
	getPexelPeople : {

	},
	toolbar : {
		
		//justifyContent: 'center',
	},

	toolbarregular : {
		minHeight: '3.5rem ',
		borderRadius: '0 0 2rem 2rem',

	},
	gutters : {
		padding: '0rem',
		
		[theme.breakpoints.down(600)] : {
			padding: '0rem ',
		}
	},
	avatar: {
		marginRight: '3% ',
		width: '30px', 
		height: '30px',
		marginLeft: '3%',
	},
	name: {
		fontSize: '.8rem ',
		marginLeft: '2%',
	},
	totalviews : {
		marginRight: '2%',
		fontSize: '.8rem',
	},
	formcontrol: {
		marginRight: '1% ',
		'& span': {
			
		}
	},
	verified: {
		color: '#0288D1',
		marginLeft: '2%',
	},
	moreiconbutton: {
		position: 'absolute',
		left: '13rem',
		color: '#E65100',
	},
	deliconbutton: {
		position: 'absolute',
		left: '11rem ',

		color: '#263238', 
	},
	
	
	datacountcontainer : {

		left: '.5rem',
		top: '.8rem', 
		margin: '0 auto',
		position: 'absolute',
		padding:'.1rem .3rem .1rem .3rem',
		width:' auto',
		background:'#E65100',
		
		borderRadius: '.5rem',
		
	},
	datacount : {
	
		color: 'white',
		//marginLeft:'.4rem',
		fontWeight: '600',
		fontSize: '1.1rem',
	},
	opencartcontainer : {
		position: 'absolute',
		top: '2.3rem',
		left: '.5rem',
		color:'#FF6F00',
	},
	plusbtn : {
		position: 'absolute',
		top:'4.9rem',
		left: '.5rem',

		minWidth: '1rem',
		//border:'.6rem ',
		padding: ' 0rem' ,
		
		
	},
	plusbtnsub : {
		fontSize: '1.2rem',
		background: 'green',
		color:'white',
		width: '2rem' ,
		height: ' 2rem',
		padding:' 0rem' ,
		borderRadius: '.5rem .5rem 0 0',
		
	},
	plusbtnborder : {
		//borderRadius : '.5rem .5rem 0 0',
	},
	plusradius: {
		borderRadius:'.5rem .5rem 0 0',
	},
	minusbtn : {
		position: 'absolute',
		top: '6.8rem',
		left: '.50rem',
		
		background: '#EF5350',
		borderRadius:'.5rem',
		padding: ' 0rem',
		minWidth: '2rem',
	},
	minus: {
		background:'#FF8F00',
		color:'white',
		fontSize: '1.2rem',
		height:'2rem',
		width:'2rem',
		borderRadius:'0 0 .5rem .5rem',

	},
	slide: {
		position:' absolute',
		width: ' 100%',
		height:' 100%',
		background: 'linear-gradient(45deg, #FF6F00 50%, #FF8E53 90%)',
		zIndex:3,
		//left: '16.5rem',
		transition: ' all 0.5s ease',
	},

	bouncingball : {
		position:' absolute',
		width: '1.3rem',
		height: '1.3rem',
		borderRadius:' 50%' ,
		background: '#1B5E20',
		top: '7rem',
		left:' 4.5rem',
		animation: '$bounce  0.5s',
		animationDirection:'alternate',
		animationTimingFunction: 'cubic-bezier(.5,0.05,1,1.3)',
  		animationIterationCount: 'infinite',
  		
	},
	
	'@keyframes bounce' : {
  '0%' : { transform: ' translate3d(0, 0, 0)'     },
  '100% ' :  { transform: 'translate3d(4rem, 0, 0)' }
},
slideshow: {
	left: '0rem',
},
hideslido : {
	left: '16.5rem',
},
menu : {
	background:'#BDBDBD',
	position:'relative',
	top: '1.8rem',
	right: '2.5rem',
	borderRadius:'.5rem',
	[theme.breakpoints.down(500)]: {
		top:'1.76rem',
	}
},
menuItem: {
	
	textAlign:'center',
	marginBottom:'.2rem',
	fontSize:'.8rem',
	color:'black',
	//padding: '.3rem 1.5rem .3rem 1.5rem',
	cursor: 'pointer',
	//borderBottom:'.1rem solid black',
	margin:'0 auto',
	padding:'.5rem 0 .5rem 0',
	width: '8rem',
	borderRadius:'.5rem',
	'&:hover' :{
		background:'#4CAF50',
	},
	
},
tooltip : {
	backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
},
arrow:{
	color: 'white',
},
like : {
	cursor:' pointer',
},
puppies : {
	position:'absolute',
	top: '10rem',
	left: '.8rem',
	fontWeight:'600',
	color: '#FFD600',
	fontSize:'1.2rem',
},
price : {
	position:'absolute',
	top:' 11.3rem',
	left:'.8rem',
	fontWeight:'600',
	color:'#FFD600',
	fontSize:'1.2rem',
},
showmore : {
	position:'absolute',
	top:'11.75rem',
	left:'66.9%',
	background:'#F57F17',
	borderRadius:'.3rem 0rem 0rem 0rem',
	color:'white',
	'&:hover':{
		backgroundColor:'#EF6C00',
	},
	textTransform:'capitalize',
}


	
}));




export default useStyles;