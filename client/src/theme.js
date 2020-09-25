import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette:{
        primary:{
            main:   '#0258FF',
            light : '#03FFED'
        },
        secondary:{
            main: "#333333",
            light: '#eaeaea'
        },
        background:{
            default:'#fff'
        }
    },
    typography:{
        fontFamily: `"Bubblegum Sans","Roboto", "Helvetica", "Arial", sans-serif`,
    },
    shadows: ["none"],
})
export default theme;