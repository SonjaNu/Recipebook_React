import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import bmitaulukko from './bmitaulukko.JPG';
import CalculateIcon from '@mui/icons-material/Calculate';


function createData(name, calories, fat, carbs, protein, fiber) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    fiber,
  };
}

const rows = [
  createData('Appelsiini', 43, 0.3, 8.9, 0.6, 2.1),
  createData('Avokado', 187, 19.4, 1.1, 2.6, 3.4),
  createData('Banaani', 84, 0.4, 18.3, 1.1, 1.8),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 0.2),
  createData('Greippi', 32, 0.3, 6.5, 0.6, 1.4),
  createData('Kananmuna', 143, 10.3, 0.3, 12.5, 0.0),
  createData('Kantarelli', 24, 0.5, 3.0, 1.8, 1.9),
  createData('Kesäkurpitsa', 17, 0.4, 2.5, 0.6, 0.7),
  createData('Kiivi', 42, 0.6, 7.1, 0, 2.7),
  createData('Kurkku', 10, 0.1, 1.4, 0.6, 0.7),
  createData('Lanttu', 25, 0.3, 4.6, 1.0, 1.8),
  createData('Lohifilee', 165, 11.0, 0.0, 16.8, 0.0),
  createData('Mango', 53, 0.4, 10.7, 1.0, 2.1),
 
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Ruoka-aine 100g',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Kalorit (kcal)',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Rasva (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Hiilihydraatit (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Proteiini (g)',
  },
  {
    id: 'fiber',
    numeric: true,
    disablePadding: false,
    label: 'Kuitu (g)',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select Ruoka-aine',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
         Ravintotietoja
        </Typography>
      )}
    </Toolbar>
  );
};


EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 

  const isSelected = (name) => selected.indexOf(name) !== -1;


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    {/*------------------ painoindeksin laskeminen ------------------------------- */}


    const [bmi, setValues] = useState( {paino:0, pituus:0} );
const [viesti, setViesti] = useState('');

const muuta = (e) => {
  setValues({
    ...bmi,
    [e.target.name]: e.target.value
  
  });
setViesti('');
}

const laskeBmi = (e) => {
let teksti = '';
if (isNaN(bmi.pituus) === true || isNaN(bmi.paino) === true) {
  teksti = 'Käytä vain numeroita!';
}
if (isNaN(bmi.pituus) === false && bmi.pituus <= 0) {
  teksti= teksti + 'Pituuden on oltava suurempi kuin 0. ';
}

if (isNaN(bmi.paino) === false && bmi.paino <= 0) {
  teksti= teksti + 'Painon on oltava suurempi kuin 0. ';
}

if (teksti.length === 0) {
  let s = bmi.pituus * bmi.pituus;
  let m = bmi.paino;
  let v = m/s;
  teksti = 'Painoindeksisi on ' + v.toFixed(1);
}

setViesti(teksti);

}

  return (
    <Box sx={{ width: '100%', paddingRight: 5, paddingLeft: 5, paddingTop: 3 }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
             
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (

                 
                   
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                     
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">{row.fiber}</TableCell>
                    </TableRow>
                   
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

{/*------------------ painoindeksin laskeminen ------------------------------- */}
      <Box sx={{ margin: 2}}>
        
<Paper sx={ {paddingTop: 2, marginLeft: 2, marginRight: 2, paddingRight: 2, paddingLeft: 2, marginBottom: 2, paddingBottom: 1} }>
<FormLabel sx={{ color: 'text.primary', fontSize: 20, fontWeight: 'medium' }}> Laske painoindeksisi (bmi)</FormLabel>
<Box> 
<Typography > Kirjoita paino kiloina (esim. 70.5) ja pituus metreinä (esim. 1.68) </Typography>
<TextField label='Paino kg' name='paino' margin='normal' 
  value={bmi.paino} onChange={ muuta } required />
  
</Box> 
<Box> 
  <TextField label='Pituus m' name='pituus' margin='normal' 
  value={bmi.pituus} onChange={ muuta } required />
</Box> 
<Box> 
  <Button onClick={ laskeBmi } variant='contained'
  sx={{ marginRight: 3 }} startIcon={ <CalculateIcon /> }> Laske </Button>
</Box>


<Typography sx={{marginTop:2}}> {viesti} </Typography>

<img src={bmitaulukko} height="200" width="200"/>

</Paper>
  </Box>

    </Box>   
  );
}







