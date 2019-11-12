import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

const useStyles = makeStyles({
  root: {
    overflowX: 'auto',
    width: '100%',
  },
  table: {
    minWidth: 650,
  },
});

function createData(name:string, calories:number, fat:number, carbs:number, protein:number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('SafePack 32', 159, 6.0, 24, 4.0),
  createData('SafePack 30', 237, 9.0, 37, 4.3),
  createData('Korobka', 262, 16.0, 24, 6.0),
  createData('SafePack 33', 305, 3.7, 67, 4.3),
  createData('SafePack 31', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Наименование грузы</TableCell>
            <TableCell align="right">Количество</TableCell>
            <TableCell align="right">Вес</TableCell>
            <TableCell align="right">Длина</TableCell>
            <TableCell align="right">Ширина</TableCell>
            <TableCell align="right">Высота</TableCell>
            <TableCell align="right">Температура</TableCell>
            <TableCell align="right">Термобокс</TableCell>
            <TableCell align="right">Термодатчик</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}