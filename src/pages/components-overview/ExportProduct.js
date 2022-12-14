import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Grid, Button, Modal, Box } from '@mui/material';
import FormProduct from './FormProduct';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

function createData(name, barcode, mass, area, price, select) {
    return { name, barcode, mass, area, price, select };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    window: 12,
    alignItems: 'center'
};
export default function DenseTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid container xs={7}>
                <Grid item xs={2} margin="10px 0px">
                    <Button size="large" type="submit" variant="contained" color="primary" onClick={handleOpen}>
                        Add Product
                    </Button>
                </Grid>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Button xs={{ mr: 10 }} open={open} onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                        <FormProduct />
                    </Box>
                </Modal>
                <Grid item xs={2} margin="10px 0px">
                    <Button size="large" type="submit" variant="contained" color="primary">
                        Xuất phiếu
                    </Button>
                </Grid>
            </Grid>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">BarCode</TableCell>
                            <TableCell align="right">Mass&nbsp;(kg)</TableCell>
                            <TableCell align="right">Area</TableCell>
                            <TableCell align="right">Price&nbsp;(VND)</TableCell>
                            <TableCell align="right">Select</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.barcode}</TableCell>
                                <TableCell align="right">{row.mass}</TableCell>
                                <TableCell align="right">{row.area}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
