import { FormControl, TextField } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';

const useStyles = makeStyles(theme => ({

    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    fab: {
        backgroundColor: '#4f0103',
        margin: theme.spacing(1),
        textAlign: 'right',
      },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
    },
    
  }));


const ContactInfo = () => {

    const classes = useStyles();

    console.log("Hello")
    
    return (
        <div className='contactInfo'>
            <div className='sender'>
                <div className='title'>
                    <h1>Отправитель</h1>
                </div>
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
                <div className='addInfo'>
                    <div className='title'>
                        <h2>Контактная информация</h2>
                    </div>
                </div>
            </div>

            <div className='receiver'>
                <div className='title'>
                    <h1>Получатель</h1>
                </div>
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
                <div className='addInfo'>
                    <div className='title'>
                        <h2>Контактная информация</h2>
                    </div>
                    <div className='addInfo-content'>
                        <div style={{margin: 'auto'}}>FIO</div>
                        <div style={{margin: 'auto'}}>Телефон</div>
                        <div className='addBtn'>
                            <Fab color="primary" aria-label="add" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </div>
                    </div>
                    <div className='addInfo-inputs'>
                        asdf
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
