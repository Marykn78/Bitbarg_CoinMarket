import {createTheme} from '@mui/material'

const Theme = createTheme({
    components:{
        MuiCssBaseline:{
            styleOverrides:{
                body:{
                    // backgroundColor:'#8d8d8d',
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
                        // width:'50%',
                        // padding:'7px 16px',
                        '&:hover':{

                        }
                    }
                },
                {
                    props:{variant:'secondaryButton'},
                    style:{
                        color:'#727272',
                        backgroundColor:'#F2F2F2',
                        fontSize:'14px',

                    }
                },
            ]
        }
    },
    typography:{
        fontFamily:'Iransans',
        h1:{

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
        }
    },
    palette:{
        primary:{
            main:'#000',
            light:'',
            dark:''
        }

    }
})

export default Theme;




// --primary-main: #4285f2;
//     --primary-light: #4285f24d;
//     --primary-lighter: #4285f21a;
//     --primary-contrastText: #fff;
//     --secondary-main: #8b9098;
//     --secondary-light: #ebedf1;
//     --secondary-lighter: rgba(235,237,241,.3);
//     --secondary-contrastText: #fff;
//     --success-main: #30be81;
//     --success-light: #a0d6aeb2;
//     --success-lighter: #a0d6ae1a;
//     --success-contrastText: #fff;
//     --error-main: #eb4137;
//     --error-light: #f5a09bb2;
//     --error-lighter: #f5a09b1a;
//     --error-contrastText: #fff;
//     --warning-main: #fbbd06;
//     --warning-light: #fdde82b2;
//     --warning-lighter: #fdde821a;
//     --info-main: #4a7f9c;
//     --info-light: #60abd547;
//     --info-lighter: #60abd51a;
//     --info-sky: rgba(66,133,242,.1);
//     --background-default: #fff;
//     --background-secondary: #fafafa;
//     --background-paper: #fff;
//     --text-primary: #212121;
//     --text-secondary: rgba(0,0,0,.6);
//     --text-mute: #bdbdbd;
//     --action-disabledBackground: #6c759624;
//     --action-selected: rgba(0,0,0,.08);
//     --divider: #e0e0e0;
//     --skeleton: rgba(33,33,33,.11);
//     --grey-50: #fafafa;
//     --grey-100: #f5f5f5;
//     --grey-200: #eee;
//     --grey-300: #e0e0e0;
//     --grey-400: #bdbdbd;
//     --grey-500: #9e9e9e;
//     --grey-600: #757575;
//     --grey-700: #616161;
//     --grey-800: #424242;
//     --grey-900: #212121;
//     --grey-A100: #f5f5f5;
//     --grey-A200: #eee;
//     --grey-A400: #bdbdbd;
//     --grey-A700: #616161;