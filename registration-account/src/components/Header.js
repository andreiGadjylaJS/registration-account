import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontSize: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        color: 'black',
        fontWeight: 'bold',
    },
}));

const Header = ({ title, color }) => {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ backgroundColor: `${color}` }}>
            <Toolbar className={classes.title} >
                {title}
            </Toolbar>
        </AppBar>
    );
}

export default Header