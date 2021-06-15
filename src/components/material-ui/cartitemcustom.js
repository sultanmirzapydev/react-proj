
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles((theme) => ({
	maincon:{
		width:'100%',
		margin:'0 auto',

	},
	cardroot: {
		marginTop:'1.5rem',

		display:'flex',
		width:' 40rem',
		height:'12rem',
		//height:'100%',
		//marginLeft:'25%',
		background:'#CFD8DC',
		borderRadius:'.4rem',
		overflow:'hidden',
		color:'grey',
		

		[theme.breakpoints.up(1280)] : {
			margin:'0 auto',
			marginTop:'2rem',
		},
		[theme.breakpoints.between(960,1280)] : {
			margin:'0 auto',
			marginTop:'2rem',
		},
		 [theme.breakpoints.down(960)] : {
		 	width:'30rem',
		 	marginTop:'1rem',
		 	margin:'0 auto',
		 	
		 },
		 [theme.breakpoints.down(510)] : {
		 	width:'20rem',
		 },
		// [theme.breakpoints.up(1400)] : {
		// 	width:'50%',
		// }

	},
	imgcontainer : {
		width:'42%',
		marginLeft:'0rem',
		borderRadius:'.7rem',


	},
	cardcontent:{
		width:'40%',
		marginLeft:'5%',
		marginTop:'1rem',
		display:'flex',
		flexDirection:'column',
		//paddingBottom:'0rem',
		'&:last-child':{
			paddingBottom:'0rem',
		},
		// [theme.breakpoints.up(960)] : {
		// 	alignItems : 'center',
		// 	height:'100%',
		// }
	},
	img: {
		height: '100%',
    	//paddingTop: '56.25%',
		margin:'0 auto',
		backgroundSize:'cover',
		backgroundPosition:'center',
	},
	puppies:{
		color:'#546E7A',
		marginTop:'0rem',
		marginLeft:'1.7rem',
		fontSize:'1.2rem',
		fontWeight:'700',
	},
	price: {
		marginTop:'.5rem',
		marginLeft:'1.7rem',
		fontWeight:'500',
	},
	offers:{
		marginTop:'.7rem',
		marginLeft:'1.7rem',
		color:'#2E7D32',
		
	},
	remove: {
		cursor:'pointer',
		width:'6rem',
		marginTop:'.5rem',
		marginLeft:'1.2rem',
		background:'#FF7043',
		color:'#546E7A',
		fontWeight:'600',
		'&:hover': {
			background:"#FF7043",
		}
	},
	logiccontainer: {
		position:'relative',
		marginTop:'2rem',
		float:'left',
		marginLeft:'1%',
		[theme.breakpoints.up(1600)] : {
			marginLeft:'12%',
		}

	},
	uparrow:{
		fontSize:'1.5rem',
		color:'green',
		cursor:'pointer',
	},
	downarrow: {
		marginTop:'.4rem',
		fontSize:'1.5rem',
		fontWeight:'800',
		color:'green',
		cursor:'pointer',
	},
	itemcount:{
		fontSize:'1.3rem',
		fontWeight:'600',
		marginLeft:'.4rem',
	}
}));


export default useStyles;