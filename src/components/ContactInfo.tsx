import { FormControl, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import './style/contactInfo.scss';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));


const ContactInfo = () => {

    const classes = useStyles();
    
    return (
        <div className='contactInfo'>
            <div className='send'>
                <h1>Send</h1>
                <FormControl>
                    {/* <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    <TextField
                        type='email'
                        error={false}
                        id="outlined-error-helper-text"
                        label="Адрес отправитель"
                        placeholder="Начните вводить адрес отправительныя"
                        // helperText="Incorrect entry."
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />

                    <TextField
                        type='email'
                        error={false}
                        id="outlined-error-helper-text"
                        label="наименование отправитель"
                        // defaultValue="Hello World"
                        // helperText="Incorrect entry."
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />
                </FormControl>
            </div>
        </div>
    )
}

export default ContactInfo;
