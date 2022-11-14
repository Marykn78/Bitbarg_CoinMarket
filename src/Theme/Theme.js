import {createTheme} from '@mui/material'

const theme = createTheme({
    components:{
        MuiCssBaseline:{
            styleOverrides:{
                body:{
                    backgroundColor:'white',
                },
                'a':{
                    textDecoration:'none'
                }
            }
        },
        MuiButton:{
            variants:[
                {
                    props:{variant:'mainButton'},
                    style:{
                        color:'white',
                        backgroundColor:'#4285F2',
                        height:'36px',
                        fontSize:'14px',
                        width:'100%',
                        '&:hover':{

                        }
                    }
                },
                {
                    props:{variant:'secondaryButton'},
                    style:{
                        color:'#727272',
                        // F2F2F2
                        backgroundColor:'#F2F2F2',
                        fontSize:'14px',
                        width:'100%',
                    }
                },
            ]
        }
    },
    typography:{
        fontFamily:'Iransans',
        h1:{
            fontWeight:600,
            fontSize:'1.3rem',
            color:'#212121',
            lineHeight:1.5,
        },
        h2:{
            fontWeight:400,
            fontSize:'0.9rem',
            lineHeight:1.5,
            color:'#000',
        },
        navtitle:{
            fontWeight: 500,
            fontSize: '0.8rem',
            lineHeight: 1.75,
            color:'rgba(0,0,0,.6)',
        },
        subtitle1:{
            color:'#4285F2',
            fontSize:'12px',
            lineHeight:1.5,
            fontWeight:700,
        }
    },
    palette:{
        primary:{
            main:'#4285F2',
            light:'',
            dark:''
        }

    }
})

export default theme;