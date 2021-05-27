import { makeStyles, withStyles } from '@material-ui/core/styles';


const  useStyles = makeStyles((theme) => ({
	gridmaincontainer : {
		background: '#ECEFF1',
		width: '100%',
		height:'50rem',
		margin: 'auto 0',
	},
	griditemsub: {
		borderRadius: '.7rem',
		width: '70%',
		height: '31rem',
		background:'#F1F8E9',
		margin: '0 auto',
		marginTop: '3rem',
		boxShadow: '2px 4px 6px  3px rgba(0, 0, 0, 0.2)',

		[theme.breakpoints.down(600)]: {
			width: '90%',
			height: '28rem',
		},
		[theme.breakpoints.down(960)] : {

			width: '85%',
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
		marginTop:'7rem',
		margin: '0 auto',
		height:'31rem',
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
 	 	marginTop: '.9rem',
 	 },
 	buttonroot : {
 		width: '16.7rem',
 		padding: '.7rem',
 		background: 'linear-gradient(210deg, #2196F3 30%, #21CBF3 90%)',
 		outline: 'none',
 		boxShadow: '1px 3px 7px 2px rgba(33, 203, 243, .3)',
 	}

	
})); 


export default useStyles;