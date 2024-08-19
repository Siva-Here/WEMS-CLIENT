import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Reg.module.css";

export const RegistrationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    const handleButtonClick = async (e) => {
        e.preventDefault();
        const uname = username.trim();
        const pass = password.trim();
        const cpass = confirm.trim();
        const phone = mobile.trim();

        if (uname.length >= 6 && uname.length <= 8) {
            const hasUpperCase = /[A-Z]/.test(pass);
            const hasLowerCase = /[a-z]/.test(pass);
            const hasDigit = /\d/.test(pass);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

            if (pass.length >= 6 && pass.length <= 8 && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
                if (password === cpass) {
                    if (phone.length === 10) {
                        const formData = {
                            uname,
                            upass: pass,
                            uphone: phone,
                            uemail: email,
                        };
                        console.log("check siva");
                        console.log(formData);

                        try {
                            const response = await axios.post("https://wems.onrender.com/add_roommate", formData);
                            console.log("siva");
                            console.log(response.data);

                            if (response.status === 201) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Registration completed!',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                }).then(() => {
                                    navigate("/login");
                                    alert("succesfully registered");
                                });
                            } else {
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'Something went wrong!',
                                    icon: 'error',
                                    confirmButtonText: 'OK'
                                });
                            }
                        } catch (error) {
                            Swal.fire({
                                title: 'Error!',
                                text: error.response ? error.response.data.message : 'Server error!',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                        }
                    } else {
                        alert("Invalid mobile!");
                    }
                } else {
                    alert("Passwords do not match!");
                }
            } else {
                alert("Invalid Password!");
            }
        } else {
            alert("Invalid username!");
        }
    };

    return (
        <center className={`mt-5 ${styles.mrgin}`}>
            <div className="container p-3">
                <div className={styles["border-div"]} style={{ height: 700 }}>
                    <div className="row mb-2">
                        <div className="col-sm-4 ">
                            <div className="mt-4 d-flex justify-content-around">
                            <span className={`h1 ${styles.welcome} ms-1`}>&nbsp; <img src="/images/logo.png"style={{height:"33px",width:"33px"}} className="me-2"/>&nbsp;W E M S</span>
                                <div className={`btn fw-bold ${styles.login} p-3 d-flex justify-content-center`} onClick={()=>navigate("/login")}>LOG IN</div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 p-3">
                        <div className={`${styles["form-div"]} bg-primary rounded-4 p-3 h4 mt-1`}>
                            <form autoComplete="off">
                                <div className="crt-acc text-center fw-bold text-white mb-4" onClick={()=>navigate("/")}>CREATE ACCOUNT</div>
                                <div className="mb-3">
                                    <input type="text" className={`form-control bg-transparent text-light ${styles["input-border"]} fw-bold`} placeholder="Username" required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className={`form-control bg-transparent text-light ${styles["input-border"]} fw-bold`} placeholder="Password" required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className={`form-control bg-transparent text-light ${styles["input-border"]} fw-bold`} placeholder="Confirm Password" required
                                        onChange={(e) => setConfirm(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className={`form-control bg-transparent text-light ${styles["input-border"]} fw-bold`} placeholder="Email" required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="tel" className={`form-control bg-transparent text-light ${styles["input-border"]} fw-bold`} placeholder="Mobile" required
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </div>
                                <center>
                                    <button type="submit" className={`btn bg-transparent text-light bordered-button border-white fw-bold rounded-pill ${styles.noor} mb-2`} onClick={handleButtonClick}>CREATE</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    );
};
