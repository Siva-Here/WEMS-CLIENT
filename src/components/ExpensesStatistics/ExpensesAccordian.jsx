import { useState } from 'react';
import styles from './ExpensesStatistics.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';

export const ExpensesAccordion = () => {
    const expenses = useSelector((state) => state.expenses.expenses);
    const status = useSelector((state) => state.expenses.status);
    const error = useSelector((state) => state.expenses.error);
    const [openedIndex, setOpenedIndex] = useState(null);
    const [toggledItems, setToggledItems] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    // Sort expenses by date (assuming date is in a format that can be directly compared)
    const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Calculate the index range for the current page
    const indexOfLastExpense = currentPage * itemsPerPage;
    const indexOfFirstExpense = indexOfLastExpense - itemsPerPage;
    const currentExpenses = sortedExpenses.slice(indexOfFirstExpense, indexOfLastExpense);

    const totalPages = Math.ceil(sortedExpenses.length / itemsPerPage);

    const handleToggled = (index) => {
        setOpenedIndex(prevIndex => prevIndex === index ? null : index);
    };

    const handleToggleClick = (index, event) => {
        event.stopPropagation();
        setToggledItems(prev => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev));
    };

    return (
        <div>
            {currentExpenses.map((bill, index) => {
                const itemsString = bill.items.map(item => `${item.item} (${item.cost})`).join(', ');
                const isToggled = openedIndex === index;
                const isItemToggled = toggledItems[index];

                return (
                    <div key={index} className={styles.toggled} onClick={() => handleToggled(index)}>
                        {isToggled ? (
                            <div className={`${styles["lower-part"]} mt-3`}>
                                <p className={`${styles.para} fw-bold`}>{bill.date}:</p>
                                <div className={`${styles["para-div"]} rounded-3 mt-1`}>
                                    <p className={`${styles.para1} fw-bold mt-1 mb-1 d-flex justify-content-left ps-3`}>
                                        Paid by: <span className={`text-dark fw-bold ${styles.paid_by}`} style={{ marginLeft: "10px" }}>{bill.purchased_by_name}</span>
                                    </p>
                                    <div className={`${styles.para1} fw-bold mt-1 mb-1 d-flex justify-content-left ps-3`}>
                                        Items & Cost:
                                        <div className={`${styles.content} ${isItemToggled ? styles.toggleOn : styles.toggleOff} ms-2`} onClick={(e) => handleToggleClick(index, e)} id="subaccord">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <p className={`text-dark ${styles.innertoggle1} fw-bold`} style={{ fontSize: "8px" }}>{itemsString}</p>
                                                    <p className={isItemToggled ? styles.up : styles.down}><IoIosArrowDown /></p>
                                                </div>
                                                <div className={`toggle-items ${isItemToggled ? "show" : "hide"}`}>
                                                    {bill.items.map((item, itemIndex) => (
                                                        <p key={itemIndex} className={`text-dark ${styles.innertoggle} fw-bold`} style={{ fontSize: "11px" }}>{item.item} - ₹{item.cost}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={`${styles.para1} fw-bold mt-1 mb-1 d-flex justify-content-left ps-3`}>
                                        Meal type: <span className='text-dark fw-bold ms-2'>{bill.meal_type}</span>
                                    </p>
                                    <p className={`${styles.para1} fw-bold mt-1 mb-1 d-flex justify-content-left ps-3`}>
                                        <div className={styles['consumed-by-container']} style={{ lineHeight: "30px" }}>
                                            <span className=''>Consumed by: </span>
                                            <span className={`text-dark fw-bold text-success ${styles['consumed-by-values']}`} style={{ marginLeft: "8px" }}>
                                                {Array.isArray(bill.consumed_by_names)
                                                    ? bill.consumed_by_names.join(', ')
                                                    : bill.consumed_by_names}
                                            </span>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className={`${styles["lower-part"]} mt-3 mb-2`}>
                                <p className={`${styles.para} fw-bold`} style={{ position: "relative", top: "15px" }}>{bill.date}:</p>
                                <div className={`${styles["para-div"]} rounded-3 mt-1 d-flex justify-content-between`}>
                                    <p className={`${styles.para1} fw-bold`}>{bill.purchased_by_name}</p>
                                    <p className={`${styles.para2} fw-bold`}>
                                        <span className='text-secondary'>Total-Cost : </span><span>₹&nbsp;</span>{bill.total_cost} &nbsp; &nbsp;
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}

            {/* Pagination Controls */}
            <div className="d-flex justify-content-between mt-3">
                <button
                    className="btn"
                    style={{ backgroundColor: "#1A2097", color: "white", fontWeight: "bold" ,marginLeft:"20px",marginTop:"10px"}}
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <button
                    className="btn"
                    style={{ backgroundColor: "#1A2097", color: "white", fontWeight: "bold" ,marginRight:"20px",marginTop:"10px"}}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
