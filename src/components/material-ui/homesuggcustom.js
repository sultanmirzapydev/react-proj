import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
	root: {
		height: '10rem',
		[theme.breakpoints.down(500)] : {
			width: 'auto',
		}
	},
	suggestcon: {
		
	},
	class1 : {
		width : '100%',
		zIndex:'1',
		[theme.breakpoints.down(500)] : {
			//width: ' auto',
		}
	},
	class2: {
		width: '100%',
		[theme.breakpoints.down(500)] : {
			//width: 'auto',
		}
	},
	toolBar : {
		//width: '70%',
		margin: '0 auto',
		marginTop: '2rem',

		[theme.breakpoints.down(960)] : {
			width: '70%',
		},
		[theme.breakpoints.down(500)] : {
			width: '100%',
		}
	},
	tooldiv : {
		display: 'flex',
		flexDirection: 'row',
		margin: '0 auto',
		overflow: 'scroll',
		textDecoration: 'none',
		borderRadius: '.7rem',
		[theme.breakpoints.down(500)] : {
			
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			overflow: 'scroll',
			
			flexWrap: 'wrap',
		}
		
	},
	typography : {
		padding: '0 .6rem 0 .6rem',
		cursor: 'pointer',
		fontSize: '1rem',
		color: '#424242',
		
		margin: '0 auto',
		[theme.breakpoints.down(960)] : {
			fontSize: '.7rem',
		},
		[theme.breakpoints.down(1280)] : {
			fontSize: '.9rem',
		},
		[theme.breakpoints.down( 600)] : {
			fontSize: '.7rem',
		}
		

	},
	typoh5 : {
		width: '70%',
		margin: '0 auto',
	},
	member : {
		margin: '0 auto',
		fontWeight: '200',
		fontSize:' .9rem',
	},
	membercon : {
		width: '100%',
		[theme.breakpoints.down(600)] : {
			display: 'none',
		}
	},
	forbutton : {
		
		borderRadius: '.7rem',
	},
	texttransform : {
		textTransform: 'lowercase',
	},
	showActive : {
		background: '#4CAF50',
		color: 'white',
		borderRadius:'.7rem',
		'& button':{
			'& span' : {
				'& p' :{
					color:'white',
				}
			}
		}
	},
	signUp : {
		cursor: 'pointer',
		color: 'green',
	},
	logIn : {
		cursor: 'pointer',
		color: 'green',
	},
	tooltip : {
		fontSize:'200',
	}
	

}))

export default useStyles;