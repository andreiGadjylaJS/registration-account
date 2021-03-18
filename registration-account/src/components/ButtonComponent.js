import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        width: '100%'
    }
}));

const ButtonComponent = ({ submitForm }) => {
    const classes = useStyles();
    return (
        <Button variant="contained"
            color="primary"
            className={classes.button}
            type='submit'
        >
            Поиск в локальной БД
        </Button>
    )
}

export default ButtonComponent