import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { getAllUsers } from 'redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// function createData(name, barcode, mass, area, price, select) {
//     return { name, barcode, mass, area, price, select };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9)
// ];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function DenseTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const userList = useSelector((state) => state.users.users?.allUsers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // if (!user) {
        //     navigate('/login');
        // }
        if (user?.accesssToken) {
            getAllUsers(user.accesssToken, dispatch);
        }
        getAllUsers(user.accesssToken, dispatch);
    }, []);
    console.log(userList);
    return (
        <>
            <Grid item xs={2} margin="10px 0px">
                <Button size="large" type="submit" variant="contained" color="primary" onClick={handleOpen}>
                    Create Account
                </Button>
            </Grid>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Button size="large" type="submit" variant="contained" color="primary" onClick={handleClose}>
                        Create Account
                    </Button>
                </Box>
            </Modal>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>UserName</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Position</TableCell>
                            <TableCell align="right">Select</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((users) => {
                            // let user_childrens = Object.keys(users);
                            return (
                                <TableRow key={users.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    {/* {user_childrens.map((user) => console.log(user))} */}
                                    <TableCell component="th" scope="user">
                                        {users.id}
                                    </TableCell>
                                    <TableCell align="right">{users.first_name}</TableCell>
                                    <TableCell align="right">{users.last_name}</TableCell>
                                    <TableCell align="right">
                                        <Checkbox />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
