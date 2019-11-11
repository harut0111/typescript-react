import { FormControl, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
    },
  }));


const ContactInfo = () => {

    const classes = useStyles();
    
    return (
        <div className='contactInfo'>
            <div className='sender'>
                <h1>Отправитель</h1>
                <FormControl className='formControl'>
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
                        label="Наименование отправитель"
                        // defaultValue="Hello World"
                        // helperText="Incorrect entry."
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />
                </FormControl>

                <div className='formControl-info'>
                    <h1>Контактная информация</h1>
                </div>
            </div>

            <div className='receiver'>
                <h1>Получатель</h1>
                <FormControl className='formControl'>
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
                        label="Наименование отправитель"
                        // defaultValue="Hello World"
                        // helperText="Incorrect entry."
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />
                </FormControl>
                <div className='formControl-info'>
                    <h1>Контактная информация</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
