import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    input: {
        boxSizing: 'borderBox',
        marginTop: '8px',
        marginBottom: '8px',
        width: '100%',

    }
}));

const TextFieldComponent = ({ label = null, placeholder = null, onChangeTex, valueInput = null }) => {
    const classes = useStyles();
    return <TextField
        value={valueInput}
        className={classes.input}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        onChange={e => onChangeTex(e.target.value.trim())}
    />
}

export default TextFieldComponent