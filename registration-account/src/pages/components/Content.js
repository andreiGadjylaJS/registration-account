import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { columnsTable } from '../../constans/labelTexts'

const useStyles = makeStyles((theme) => ({
    container: {
        maxHeight: '100%',
    },
}));

const Content = ({ users }) => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        console.log(+event.target.value)
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root} >
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table" >
                    <TableHead>
                        <TableRow>
                            {columnsTable.map(column => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={users.length - index}>
                                    <TableCell align="left">{row.surname}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.sname}</TableCell>
                                    <TableCell align="left">{row.bdate}</TableCell>
                                    <TableCell align="left">{row.identif}</TableCell>
                                    <TableCell align="left">{row.addressLast}</TableCell>
                                    <TableCell align="left">{row.ateAddress}</TableCell>
                                    <TableCell align="center">{row.dsdDateRec}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default Content
