import React from 'react';
import { useState } from 'react';
import { Button, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AnimateButton from 'components/@extended/AnimateButton';
import { AddProduct } from 'redux/apiRequest';
export default function FormProduct() {
    // const [value, setValue] = useState(null);
    // const [open, setOpen] = useState(true);
    //const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [masp, setMasp] = useState('');
    const [tensp, setTensp] = useState('');
    const [kluongsp, setKluongsp] = useState('');
    const [giasp, setGiasp] = useState('');
    const [khuvucsp, setKhuvucsp] = useState('');
    const [nhaccsp, setNhaccsp] = useState('');
    const [ngaynhapsp, setNgaynhapsp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddproduct = (e) => {
        e.preventDefault();
        try {
            const newProduct = {
                masp: masp,
                tensp: tensp,
                kluongsp: kluongsp,
                giasp: giasp,
                khuvucsp: khuvucsp,
                nhaccsp: nhaccsp,
                ngaynhapsp: ngaynhapsp
            };
            if (tensp == '' || masp == '' || kluongsp == '' || giasp == '' || khuvucsp == '' || nhaccsp == '') {
                alert('No data');
            } else {
                AddProduct(newProduct, dispatch, navigate);
            }
        } catch (err) {
            if (!err?.res) {
                alert('No connect server');
            }
        }
    };

    return (
        <>
            <Formik
                noValidate
                autoComplete="off"
                initialValues={{
                    masp: '',
                    tensp: '',
                    kluongsp: '',
                    giasp: '',
                    khuvucsp: '',
                    nhaccsp: '',
                    ngaynhapsp: ''
                }}
            >
                {({ handleBlur, handleChange, isSubmitting, values }) => (
                    <form noValidate onSubmit={handleAddproduct} action="Login" method="post">
                        <Grid container spacing={3}>
                            <Grid item xs={5} margin="0px auto">
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="Ma_sanpham">Mã sản phẩm</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="masp"
                                        type="text"
                                        value={values.masp}
                                        name="masp"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setMasp(e.target.value);
                                        }}
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={5} margin="0px auto">
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="ten_sanpham">Tên sản phẩm</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="tensp"
                                        type="text"
                                        value={values.tensp}
                                        name="tensp"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setTensp(e.target.value);
                                        }}
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={5} margin="0px auto">
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="gia_sanpham">Giá sản phẩm</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="giasp"
                                        type="text"
                                        value={values.giasp}
                                        name="giasp"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setGiasp(e.target.value);
                                        }}
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={5} margin="0px auto">
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="kluong_sanpham">Khối lượng</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="kluongsp"
                                        type="text"
                                        value={values.kluongsp}
                                        name="kluongsp"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setKluongsp(e.target.value);
                                        }}
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={5} margin="0px auto">
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="kvuc_sanpham">Khu vực</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="khuvucsp"
                                        type="text"
                                        value={values.khuvucsp}
                                        name="khuvucsp"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setKhuvucsp(e.target.value);
                                        }}
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={5} margin="0px auto">
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="nhacc_sanpham">Nhà cung cấp</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="nhacc"
                                        type="text"
                                        value={values.nhaccsp}
                                        name="nhaccsp"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            changePassword(e.target.value);
                                            setNhaccsp(e.target.value);
                                        }}
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>

                            <Grid item xs={6} margin="10px auto">
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Lưu
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
                {/* <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Ma san pham"
                        value={masp}
                        name="masp"
                        onChange={(e) => {
                            handleChange(e);
                            setMasp(e.target.value);
                        }}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Ten San pham"
                        value={tensp}
                        name="tensp"
                        onChange={(e) => {
                            handleChange(e);
                            setTensp(e.target.value);
                        }}
                    />
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Ngày nhập"
                            value={ngaynhapsp}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider> */}
                {/* <TextField
                        id="outlined-khoiluong"
                        label="Khối lượng"
                        value={kluongsp}
                        name="kluongsp"
                        onChange={(e) => {
                            handleChange(e);
                            setKluongsp(e.target.value);
                        }}
                    />
                    <TextField
                        id="outlined-gia"
                        type="number"
                        label="Giá"
                        value={giasp}
                        name="giasp"
                        onChange={(e) => {
                            handleChange(e);
                            setGiasp(e.target.value);
                        }}
                    />
                    <TextField id="outlined-khoiluong" label="Khu vực" />
                    <TextField id="outlined-khoiluong" label="Nhà cung cấp" />
                    {/* <Select labelId="demo-simple-   select-label" id="demo-simple-select" value={age} label="Age"></Select> */}
                {/* </div> */}
                {/* <div>
                    <Button type="submit" variant="contained" color="primary" sx={{ m: 2 }}>
                        Save
                    </Button>
                </div> */}
            </Formik>
        </>
    );
}
