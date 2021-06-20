import { makeStyles } from '@material-ui/core/styles';


const  useStyles = makeStyles((theme) => ({
	gridmaincontainer : {

		background: '#f0f0f0',
		width: '100%',
		height:'auto',
		margin: 'auto 0',
	},
	griditemsub: {
		borderRadius: '.7rem',
		width: '70%',
		height: '31rem',
		background:'#F1F8E9',
		marginBottom:'4rem',
		margin: '0 auto',
		marginTop: '2rem',
		boxShadow: '2px 4px 6px  3px rgba(0, 0, 0, 0.2)',
		[theme.breakpoints.between(600,685)] : {
			width:'90%',
		},
		[theme.breakpoints.down(600)]: {
			width: '90%',
			height: '28rem',
		},
		[theme.breakpoints.down(960)] : {

			width: '95%',
			height: '31rem',
		}
	},
	cardmediaroot : {
		width:'100%',
		height: '31rem',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		borderRadius: '.7em 0 0 .7em',

		[theme.breakpoints.down(600)]: {
      		width: '0%',
      	
    	},
	},
	registeravatar : {
		
		height: '31rem',
		width: '50%',

		[theme.breakpoints.down(600)]: {
			width: '0%',
		}

	},
	registerform : {
		width: '50%',
		marginTop:'6rem',
		margin: '0 auto',
		height:'32rem',
		[theme.breakpoints.down(600)]: {
			width:'100%',
			marginTop:'6rem'
		}
	},
	 registerfield: {

	 		width:'100%',
    		margin: '0 auto',

    	[theme.breakpoints.down(600)]: {
    		margin: '0 auto',
    		width: '100%',
    	}
 	 },
 	 margin : {
 	 	margin: '0 auto',
 	 	marginTop: '1rem',
 	 },
 	buttonroot : {
 		width: '16.3rem',
 		padding: '.7rem',
 		background: 'linear-gradient(210deg, #2196F3 30%, #21CBF3 90%)',
 		outline: 'none',
 		boxShadow: '1px 3px 7px 2px rgba(33, 203, 243, .3)',
 	}

	
})); 


export default useStyles;