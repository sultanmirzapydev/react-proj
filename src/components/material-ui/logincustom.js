import { makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
	firstcontainer: {
		width: '100%',
		height: '30rem',
		marginBottom:'3rem',	
	},
	secondcontainer : {
		width: '40%',
		margin: '0 auto',
		marginTop: '3.5rem',
		display:' flex',
		flexDirection: 'column',
		alignItems  : 'center',
		alignContent: 'center',
		background: '#F1F8E9',
		borderRadius: '.7rem',
		boxShadow: '2px 4px 6px  3px rgba(0, 0, 0, 0.2)',

		[theme.breakpoints.down(800)] : {
			width:'80%',
		},
		

	}, 
	username : {
		margin: '0 auto',
		padding: '0rem',
		marginTop: '1.3rem',
	},
	password: {
		margin: '0 auto',
		marginTop: '1rem',
	},
	loginBtn : {
		margin: '0 auto',
		marginTop: '.8rem ',
	},
	buttonroot : {
 		width: '16.1rem',
 		padding: '.7rem',
 		background: 'linear-gradient(210deg, #2196F3 30%, #21CBF3 90%)',
 		outline: 'none',
 		boxShadow: '1px 3px 7px 2px rgba(33, 203, 243, .3)',
 	},
 	typography : {
 		marginTop: '4.7rem',
 		fontSize: '.8rem',
 	},
 	
	}))
		
export default useStyles;