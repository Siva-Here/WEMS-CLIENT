import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { setAuthUsername, setAuthenticated ,setAuthUserId} from '../../store/slices/AuthSlice'; // Adjust the path as needed
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({ uname: '', upass: '' });

    const dispatch = useDispatch();
    const navigate=useNavigate();

    const handleButtonClick = async (e) => {
        e.preventDefault();
        const uname = username.trim();
        const pass = password.trim();

        if (uname.length >= 6 && uname.length <= 8) {
            const hasUpperCase = /[A-Z]/.test(pass);
            const hasLowerCase = /[a-z]/.test(pass);
            const hasDigit = /\d/.test(pass);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

            if (pass.length >= 6 && pass.length <= 8 && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
                try {
                    const updatedFormData = { uname, upass: pass };
                    setFormData(updatedFormData);

                    // Send login request to the backend
                    const response = await axios.post('https://wems.onrender.com/login', updatedFormData);
                    if (response.status === 200) {
                        const { name,userId } = response.data;

                        // Update authentication state
                        dispatch(setAuthenticated(true));
                        dispatch(setAuthUsername(name));
                        dispatch(setAuthUserId(userId));

                        // Show SweetAlert on successful login with custom styling
                        MySwal.fire({
                            icon: 'success',
                            title: `Welcome to WEMS ${name}!`,
                            text: 'Login successful',
                            confirmButtonText: 'OK',
                            customClass: {
                                title: 'swal-title',
                                htmlContainer: 'swal-text'
                            }
                        });

                        navigate("/service");

                    } else {
                        MySwal.fire({
                            icon: 'error',
                            title: 'Login failed',
                            text: 'Please try again.',
                            confirmButtonText: 'OK',
                            customClass: {
                                title: 'swal-title',
                                htmlContainer: 'swal-text'
                            }
                        });
                    }
                } catch (error) {
                    console.error('Login error:', error);
                    MySwal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'An error occurred during login. Please try again later.',
                        confirmButtonText: 'OK',
                        customClass: {
                            title: 'swal-title',
                            htmlContainer: 'swal-text'
                        }
                    });
                }
            } else {
                MySwal.fire({
                    icon: 'warning',
                    title: 'Invalid Password!',
                    text: 'Password must be 6-8 characters long and include uppercase, lowercase, digit, and special character.',
                    confirmButtonText: 'OK',
                    customClass: {
                        title: 'swal-title',
                        htmlContainer: 'swal-text'
                    }
                });
            }
        } else {
            MySwal.fire({
                icon: 'warning',
                title: 'Invalid Username!',
                text: 'Username must be 6-8 characters long.',
                confirmButtonText: 'OK',
                customClass: {
                    title: 'swal-title',
                    htmlContainer: 'swal-text'
                }
            });
        }
    };

    return (
        <center className={`mt-5 ${styles.mrgin}`}>
            <div className="container p-3">
                <div className={styles['border-div']}>
                    <div className="row mb-2">
                        <div className="col-sm-4">
                            <div className="mt-4 d-flex justify-content-around">
                                <div className={`btn fw-bold ${styles.login} pe-5 d-flex justify-content-center ms-auto`} onClick={()=>navigate("/registration")}>
                                    CREATE ACCOUNT
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 p-3">
                        <div className={`${styles['form-div']} bg-primary rounded-4 p-3 h4 mt-1`}>
                            <form className="" autoComplete="off">
                                <div className="crt-acc text-center fw-bold text-white mb-4 mt-4">LOG IN</div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className={`form-control bg-transparent text-white ${styles['input-border']} fw-bold`}
                                        placeholder="Username"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className={`form-control bg-transparent text-white ${styles['input-border']} fw-bold`}
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <center>
                                    <button
                                        type="submit"
                                        className={`btn bg-transparent text-light bordered-button border-white fw-bold rounded-pill ${styles.noor} mb-3 mt-5`}
                                        onClick={handleButtonClick}
                                    >
                                        LOGIN
                                    </button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    );
};
