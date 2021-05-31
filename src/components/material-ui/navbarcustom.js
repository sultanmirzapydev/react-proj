import { withStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down(420)] : {
      flexGrow: .4,
    },
    [theme.breakpoints.between(420,600)]  : {
      flexGrow: .4,
    },
    [theme.breakpoints.between(600,1280)] : {
      flexGrow: 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  
  toolBar: {
  	minHeight: '70px',
  	[theme.breakpoints.down(420)] : {
      minHeight: '45px',
    },
    [theme.breakpoints.between(420,600)] : {
      minHeight: '45px',
    },
    [theme.breakpoints.between(600,960)] : {
      minHeight: '60px'
    },
    [theme.breakpoints.between(960,1280)] : {
      minHeight: '60px',
    },
    [theme.breakpoints.between(1280,1920)] : {
      minHeight: '60px'
    }
  },
  colorPrimary :{
  	backgroundColor: '#f2f5f7',
  },
  menuIcon : {
  	fontSize : '2rem',
  	color: 'black',
  	width: '2rem'
  },
  closeIcon : {
    fontSize:'2rem',
    width: '2rem',
    color:'black',
  },
  cartIcon : {
    position:'relative',
    fontSize:'2.4rem',
    color: '#616161',
    marginLeft:'2rem',
    
    marginTop: '1rem',
    [theme.breakpoints.down(420)]: {
      marginTop:'1.5rem',
      margin:'0',
      color: '#616161',
      marginLeft:'0rem',

      marginRight: '-2rem',

    },
    [theme.breakpoints.between(420,600)] : {
      marginRight: '-1rem', 
      marginTop: '1.3rem',   
    },
    [theme.breakpoints.between(600,960)] : {
      marginRight: '-1.3rem',
      marginTop: '1.3rem',
    },
    [theme.breakpoints.between(960,1280)] : {
      marginRight: '-1.2rem',
      marginTop: '1.5rem',

    },
    [theme.breakpoints.between(1280,1920)] : {
      position: 'sticky',
      marginTop: '1.5rem',
      marginRight: '1rem',
    }

  },
  totalCart:{
    position:'relative',
    fontSize:'1.2rem',
    color: '#0288D1',
    fontWeight: '700',
    //backgroundColor:'#0288D1',
   
    
    borderRadius: '3rem',
    
    [theme.breakpoints.down(420)] : {
      fontSize:'1.2rem',
      paddingRight:'.5rem',
      paddingLeft:'.5rem',
      left: '-.3rem',
      top:'-.7rem',

    },
    [theme.breakpoints.between(420,600)] : {
      fontSize: '1.2rem',
      top: '-1rem',
      left: '-1.2rem',
      paddingRight: '.5rem',
      paddingLeft: '.5rem',

    },
    [theme.breakpoints.between(600,960)] : {
      fontSize: '1.2rem',
      top: '-1rem',
      left: '-.9rem',
      paddingRight: '.5rem',
      paddingLeft: '.5rem',
    },
    [theme.breakpoints.between(960,1280)] : {
      fontSize: '1.2rem',
      top: '-.8rem',
      left: '-1rem',
      paddingRight: '.5rem',
      paddingLeft: '.5rem',
    },
    [theme.breakpoints.between(1280,1920)] : {
      position: 'absolute',
      margin: '0 auto',
      fontSize: '1.2rem',

      top: '.5rem ',
      left: '2.5rem',
      
    }

    
  },
  gutters : {
    [theme.breakpoints.down(420)] : {
      padding: '0rem',
    },
    [theme.breakpoints.between(420,600)] : {
      padding: '0rem',
    },
    [theme.breakpoints.between(600,960)] : {
      padding: '0rem',
    },
    [theme.breakpoints.between(960,1280)] : {
      padding: '0rem',
    },
    [theme.breakpoints.between(1280,1920)] : {
      padding: '0rem',
    }
  },
  text: {
    cursor: 'pointer',
    fontSize: '1rem',
  	color: 'black',
  	marginLeft: '1rem',
    padding:'.5rem',
    borderRadius:'.7rem',
    transition: 'all .1s linear',
    '&:hover':{
      backgroundColor:'#424242',
      color:'white',
    },
     [theme.breakpoints.down(420)]: {
      display: 'none',
      },
    [theme.breakpoints.between(420,960)] : {
      display: 'none',
    }
   
  },
 
  search: {
    position: 'relative',
    borderRadius: '.6rem 0 0 .6rem',
    backgroundColor: '#E0E0E0',

    '&:hover': {
      backgroundColor: '',
    },
    marginLeft: 0,
    width: 'auto',
    
    [theme.breakpoints.down(420)] : {
      width: 'auto',
     
      paddingLeft:'0rem',
      flexGrow: '1',
      overflow: 'hidden',
    },
    [theme.breakpoints.between(420,600)] : {
      width: 'auto',
      flexGrow: '1',
      overflow:'hidden',
    },
    [theme.breakpoints.between(600,960)] : {
      width: 'auto',
       //flexGrow: '1',
       overflow: 'hidden',

    }
    
  },
  searchIcon: {
    backgroundColor: '#BDBDBD',
    position: 'relative',
    //borderTopStyle: 'none',
    border: '.07rem solid #BDBDBD',
    borderRadius: '0 .6rem .6rem 0',
    paddingRight: '.3rem',
    paddingLeft: '.5rem',
    color:'#455A64',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down(420)] : {
      paddingLeft: '.2rem',
      justifyContent: 'left',
      alignItems: 'left',
      marginRight: '1rem',
       backgroundColor: '#BDBDBD',
    position: 'relative',
    //borderTopStyle: 'none',
    //border: '.07rem solid #BDBDBD',
    borderRadius: '0 .6rem .6rem 0',
    padding: '.35rem 0 .35rem 0',
    color:'#455A64',
    },
      [theme.breakpoints.between(420,600)] : {
        marginRight: '0rem',
      },
      [theme.breakpoints.between(1280,1920)] : {
        marginRight: '5rem',
      },
      [theme.breakpoints.between(960, 1280)] : {
        marginRight: '2rem',
      },
      [theme.breakpoints.between(600,960)] : {
        marginRight: '4rem',
      }
  },
  searchIconroot: {
  	fontSize:'2.4rem',
    cursor:'pointer',
    [theme.breakpoints.down(420)] : {
      fontSize: '1.7rem',
    },


    
  	
  },
  inputRoot: {
    color: '#455A64',
  },
  inputInput: {
    padding: '1rem',
   	fontSize:'1.3rem',
    // paddingLeft: '5rem',
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '30ch',
    //   '&:focus': {
    //     width: '43ch',
    //   },
    //},
    [theme.breakpoints.down(420)]: {
      padding: '.5rem',
      width:'14ch',
      textAlign:'left',
      // paddingLeft:'3rem',
      marginRight: '',
    },
    [theme.breakpoints.between(420,600)] : {
      padding: '.5rem',
      width: '20ch',
      // paddingLeft: '4rem',
      marginRight: '',
    },
    [theme.breakpoints.between(600,960)] : {
      padding: '.5rem',
      width: '20ch',
      // paddingLeft: '4.4rem',
      '&:focus' : {
        width:'26ch',
       },
    },
    [theme.breakpoints.between(960,1280)] : {
      padding: '.5rem',
      // paddingLeft: '4.4rem',
      width: '20ch',
      '&:focus': {
        width: '25ch'
      }
    },
    [theme.breakpoints.between(1280,1920)] : {
      padding: '.5rem',
      // paddingLeft: '4.4rem',
      width: '24ch',
      '&:focus': {
        width: '29ch'
      }
    }



    

  },

menucontainer: {
  
    position:'absolute',
    zIndex: '3',
    backgroundColor:'#E0E0E0',
    width: ' 17rem',
    margin: '0rem 0 0 0 ',
    borderRadius: '0 0 .7rem 0',
    boxShadow: '2px 4px 6px  2px rgba(0, 0, 0, 0.2)',
    left: '-18rem',
    transition: 'all .4s linear',
  },
  showSlido : {
    
    left: '0rem'
  },
  
 



menusubcon :{
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
 
  
  marginBottom: '1rem',
},
menulangcon : {
  display: 'flex',
  flexDirection: 'column',
 
  
  marginTop: '1rem',
  marginBottom: '2rem',
},
menutext: {
  cursor: 'pointer',
  display: 'flex',
  alignItems:'center',
  alignContent:'center',
  paddingLeft: '2rem',
  paddingTop: '.3rem',
  paddingBottom: '.3rem',
   fontSize: '1rem',
  justifyContent: 'space-between',
  color:'#424242',
  marginBottom: '.28rem',
  borderRadius:'.5rem',
  '&:hover':{
    backgroundColor: '#212121',
    color:'white',
    transition:'all 60ms linear',
  }
},

Icons : {
  marginRight: '2rem',
},

}));

export default useStyles;