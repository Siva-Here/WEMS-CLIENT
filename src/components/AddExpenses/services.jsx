import React, { useState, useEffect } from "react";
import styles from "./service.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "../../store/slices/ExpenseSlice";
import { getUsers } from "../../store/slices/UserSlice";
import SweetAlert from 'sweetalert';

const USERS_PER_PAGE = 5;

export const Service = () => {
    const [rows, setRows] = useState([{ name: "", cost: "" }]);
    const [mealType, setMealType] = useState("");
    const [selectedUsers, setSelectedUsers] = useState(new Set());
    const [submitted, setSubmitted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);
    const expenseStatus = useSelector((state) => state.expenses.status);
    const expenseError = useSelector((state) => state.expenses.error);
    const userId = useSelector((state) => state.auth.userId);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    // Handle checkbox change
    const handleCheckboxChange = (userId) => {
        setSelectedUsers(prev => {
            const newSelection = new Set(prev);
            if (newSelection.has(userId)) {
                newSelection.delete(userId);
            } else {
                newSelection.add(userId);
            }
            return newSelection;
        });
    };

    const handleAddExpense = () => {
        const newExpense = {
            date: new Date().toISOString().split('T')[0],
            mealType: mealType,
            items: rows.map((row) => ({ item: row.name, cost: parseFloat(row.cost) })),
            consumedBy: Array.from(selectedUsers),
            purchasedBy: userId
        };

        console.log(newExpense);
        dispatch(addExpense(newExpense));
        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
            if (expenseStatus === 'idle' && !expenseError) {
                SweetAlert('Success', 'Expense added successfully!', 'success');
                setRows([{ name: "", cost: "" }]);
                setMealType("");
                setSelectedUsers(new Set());
            } else if (expenseStatus === 'rejected') {
                SweetAlert('Error', 'Failed to add expense. Please try again.', 'error');
            }
            setSubmitted(false);
        }
    }, [expenseStatus, expenseError, submitted]);

    // Pagination
    const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
    const paginatedUsers = users.slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE);

    return (
        <>
            <div className="container mt-3">
                <div className="container p-1">
                    <div className={`container ${styles["main-content"]} p-3 mt-3`}>
                        <div className="container row ms-auto me-auto">
                            <p className={`fs-3 ${styles.head} col-md-3 ms-4`}>MEAL TYPE:</p>
                            <select
                                className="form-select col-md-3"
                                value={mealType}
                                onChange={(e) => setMealType(e.target.value)}
                            >
                                <option defaultChecked>Choose</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Coffee">Coffee</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                        </div>

                        <div className={`${styles.items} mt-3`}>
                            <div className="h1 text-center">ITEMS</div>
                            {rows.map((row, index) => (
                                <div
                                    className={`container row ${styles.list} text-center mt-4 ms-3`}
                                    key={index}
                                >
                                    <input
                                        type="text"
                                        placeholder="NAME"
                                        className={`col-5 ${styles.name} text-white`}
                                        value={row.name}
                                        onChange={(e) => {
                                            const newRows = [...rows];
                                            newRows[index].name = e.target.value;
                                            setRows(newRows);
                                        }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="COST"
                                        className={`col-5 ${styles.cost}`}
                                        value={row.cost}
                                        onChange={(e) => {
                                            const newRows = [...rows];
                                            newRows[index].cost = e.target.value;
                                            setRows(newRows);
                                        }}
                                    />
                                    <div className="col-2">
                                        {index === rows.length - 1 && (
                                            <i
                                                className={`bi bi-plus-circle ${styles.plus}`}
                                                onClick={() => setRows([...rows, { name: "", cost: "" }])}
                                            ></i>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`mt-4 ${styles.consume} check-users`}>
                            <center className={`${styles.he}`}>Consumed_By</center>
                            {paginatedUsers.map((user) => (
                                <div className="form-check ms-5 me-3 mb-3 mt-2" key={user.id}>
                                    <label className="form-check-label fw-bold" htmlFor={`checkbox-${user.id}`}>
                                        {user.name}
                                    </label>
                                    <input
                                        className="form-check-input border border-primary"
                                        type="checkbox"
                                        id={`checkbox-${user.id}`}
                                        checked={selectedUsers.has(user.id)}
                                        onChange={() => handleCheckboxChange(user.id)}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="pagination mt-3">
                            <button
                                className="btn btn-primary me-2"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                                style={{ backgroundColor: "#1A2097", color: "white", fontWeight: "bold" ,marginLeft:"20px",marginTop:"10px"}}
                            >
                                Prev
                            </button>
                            <span className="text-center text-lead">Page {currentPage} of {totalPages}</span>
                            <button
                                className="btn btn-primary ms-2"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(currentPage + 1)}
                                style={{ backgroundColor: "#1A2097", color: "white", fontWeight: "bold" ,marginRight:"20px",marginTop:"10px"}}
                            >
                                Next
                            </button>
                        </div>

                        <div className={`${styles.title} btn`} onClick={handleAddExpense} >
                            Add Expense
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
