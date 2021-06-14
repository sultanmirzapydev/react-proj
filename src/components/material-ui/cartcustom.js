import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

	subcart: {
		marginTop:'.2rem',
		height:'auto',
		marginBottom:'18rem',
	},

	cartitemcontainer:{
		//width:'70%',
		//position:'absolute',
		//marginBottom:'18rem',
		[theme.breakpoints.up(1280)] : {
			width:'60%',
		},
		[theme.breakpoints.between(960,1280)] : {
			width:'68%',
		},
		[theme.breakpoints.down(960)] : {
			width:'100%',
			margin:'0 auto',
			justifyContent:'center',
			display:'flex',
		}
	},
	checkoutcontainer:{
		width:'20%',
		//position:'sticky',
		[theme.breakpoints.up(1280)] : {
			width:'30%',
		},
		[theme.breakpoints.between(960,1280)] : {
			width:'32%',

		},
		[theme.breakpoints.down(960)] : {
			width:'100%',
			display:'flex',
			margin:'0 auto',
			justifyContent:'center',
			
		}
	},

	checkout:{
		position:'sticky',
		width:'auto',
		height:'13rem',
		background:'#FF7043',
		color:'#424242',
		
		borderRadius:'.3rem',
		[theme.breakpoints.up(1280)] : {
			margin:'0 auto',
			marginTop:'2rem',
			width:'80%',
		},
		[theme.breakpoints.between(960,1280)] : {
			margin:'0 auto',
			marginTop:'2rem',
			width:'80%',
		},
		[theme.breakpoints.down(960)] : {
			marginTop:'1.5rem',
			width:'30rem',
		},
		[theme.breakpoints.down(510)] : {
			width:'20rem',
		}
	},
	
	emptycart: {
		display:'flex',
		marginTop:'5rem',
		
		
	
		width:'100%',
		margin:'0 auto',

	},
	emptycontainer:{
		width:'30rem',
		//padding:'8rem',
		height:'14rem',
		display:'flex',
		background:'#FF7043',
		margin:'0 auto',
		
		justifyContent:'center',
		fontWeight:'800',
		fontSize:'1.4rem',
		color:'#424242',
		borderRadius:'.3rem',
		marginBottom:'14rem',
		[theme.breakpoints.down(500)]: {
			width:'89%',
		}
	},
	emptyText: {
		marginTop:'5rem',
	}
	

}));


export default useStyles;