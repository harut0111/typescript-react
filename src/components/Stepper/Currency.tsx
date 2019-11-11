// import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

const currencies = [
  {
    label: '$',
    value: 'USD',
  },
  {
    label: '€',
    value: 'EUR',
  },
  {
    label: '฿',
    value: 'BTC',
  },
  {
    label: '¥',
    value: 'JPY',
  },
  {
    label: '₽',
    value: 'RUB',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textarea: {
    display: "block",
    marginTop: '10px',
    resize: 'none',
    width: '100%',
  },
  // tslint:disable-next-line: object-literal-sort-keys
  menu: {
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  project: {
    width: 520
  }

}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const [values, setValues] = React.useState({
      orderNumber: 0,
      project: 'bio-4532tc'
  })

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(currencies[event.currentTarget.value].value);
  };

  const handleChange = (prop:string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate={true} autoComplete="off">
      <div className='firstLIne'>
        <TextField
          id="standard-select-currency"
          required={true}
          select={true}
          label="оценочная стоимость"
          className={classes.textField}
          value={currency}
          onChange={handleCurrencyChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            id="outlined-number"
            label="указанный номер заказа"
            type="number"
            value={values.orderNumber}
            onChange={handleChange('orderNumber')}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                endAdornment: <InputAdornment position="start">N</InputAdornment>,
            }}
            margin="normal"
            variant="outlined"
        />
        <TextField
          id="outlined-helperText"
          label="Проект"
          value={values.project}
          onChange={handleChange('project')}
          className={classes.project}
          margin="normal"
          variant="outlined"
        />
        <TextareaAutosize 
            aria-label="minimum height" 
            rows={5} 
            className={classes.textarea}
            placeholder="Minimum 3 rows" 

        />
      </div>
    </form>
  );
}