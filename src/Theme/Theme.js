import {createTheme} from '@mui/material'

const Theme = createTheme({
    components:{
        MuiCssBaseline:{
            styleOverrides:{
                body:{
                    backgroundColor:'red',
                }
            }
        },
        MuiButton:{
            variants:[
                {
                    props:{variant:'mainButton'},
                    style:{
                        color:'black',
                        '&:hover':{

                        }
                    }
                },
            ]
        }
    },
    typography:{
        h1:{

        }
    },
    palette:{
        primary:{
            main:'',
            light:'',
            dark:''
        }

    }
})

export default Theme;