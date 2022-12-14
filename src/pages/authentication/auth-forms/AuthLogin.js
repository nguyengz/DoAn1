import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/apiRequest';
// material-ui
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
// project import
import AnimateButton from 'components/@extended/AnimateButton';
// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
// ============================|| FIREBASE - LOGIN ||============================ //
const AuthLogin = () => {
    const [username, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [checked, setChecked] = React.useState(false);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    // const token = localStorage.getItem();
    const handleLogin = (e) => {
        e.preventDefault(); // khi nhấn btn thì sẽ kh load lại trang
        const newUser = {
            // userName: username,
            email: email,
            password: password
        };
        loginUser(newUser, dispatch, navigate);
        console.log(token);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    userName: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    userName: Yup.string().max(255).required('UserName is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
            >
                {({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleLogin}>
                        <Grid container spacing={3}>
                            {/* <Grid item xs={12}> */}
                            {/* <Stack spacing={1}>
                                    <InputLabel htmlFor="userName_Login">User name</InputLabel>
                                    <OutlinedInput
                                        id="userName_Login"
                                        type="text"
                                        value={values.userName}
                                        name="userName"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setUser(e.target.value);
                                        }}
                                        placeholder="Enter User"
                                        fullWidth
                                        error={Boolean(touched.userName && errors.userName)}
                                    />
                                    {touched.userName && errors.userName && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.userName}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="Email_Login">Email</InputLabel>
                                    <OutlinedInput
                                        id="userName_Login"
                                        type="text"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setEmail(e.target.value);
                                        }}
                                        placeholder="Enter User"
                                        fullWidth
                                        //error={Boolean(touched.userName && errors.userName)}
                                    />
                                    {touched.userName && errors.userName && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.userName}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password_login">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="password_login"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setPassword(e.target.value);
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="Enter password"
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: -1 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={(event) => setChecked(event.target.checked)}
                                                name="checked"
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label={<Typography variant="h6">Keep me sign in</Typography>}
                                    />
                                    <Link variant="h6" component={RouterLink} to="" color="text.primary">
                                        Forgot Password?
                                    </Link>
                                </Stack>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
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
                                        Login
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthLogin;
