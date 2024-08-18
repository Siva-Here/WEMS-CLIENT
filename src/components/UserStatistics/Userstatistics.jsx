// // import styles from "./userstatistics.module.css";
// // import { useState } from "react";
// // import { useSelector } from "react-redux";

// // export const Userstatistics = () => {
// //     const expenses = useSelector((state) => state.expenses.expenses);
// //     const status = useSelector((state) => state.expenses.status);
// //     const error = useSelector((state) => state.expenses.error);
    

// //     const [openAccordion, setOpenAccordion] = useState(null);

// //     const handleAccordionToggle = (id) => {
// //         setOpenAccordion((prev) => (prev === id ? null : id));
// //     };

// //     const userData = expenses.filter((expense) => {
// //         return expense.purchased_by_name === "David Wilson";
// //     });

// //     const userData2 = userData.sort((a, b) => new Date(b.date) - new Date(a.date));

// //     if (status === 'pending') {
// //         return <center><div className="h1 fw-bold fs-5 mt-5 text-danger">Loading...</div></center>;
// //     }

// //     if (status === 'rejected') {
// //         return <center><div className="h1 fw-bold fs-5 mt-5 text-danger" >Error: {error}</div></center>;
// //     }

// //     if (status === 'idle') {
// //         return (
// //             <>
// //                 <div className={`container ${styles["main-head"]}`}>
// //                     <div className={`container ${styles.head} row align-items-center justify-content-center`}>
// //                         <div className="col-2">
// //                             <img src="stats.png" alt="menuIcon" className="img-fluid" />
// //                         </div>
// //                         <div className="col-10 text-center">
// //                             <p className="h1 m-0 text-white">USER STATISTICS</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="container">
// //                     <div className={`container ${styles.content}`}>
// //                         {userData2.map((elem, id) => {
// //                             // Calculate the bill split among the users
// //                             const billSplit = elem.total_cost / elem.consumed_by_names.length;

// //                             return (
// //                                 <div
// //                                     className={`${styles.box} container mt-3 ${styles.box}`}
// //                                     key={id}
// //                                 >
// //                                     <div className="row">
// //                                         <div className="col-7 d-flex justify-content-start align-items-center">
// //                                             <p className="m-0">
// //                                                 {new Date(elem.date).toLocaleDateString()}
// //                                             </p>
// //                                         </div>
// //                                         <div className="col-5 d-flex justify-content-end align-items-center">
// //                                             <p className="m-0">
// //                                                 MEAL TYPE : <span className="fw-5 ms-3">{elem.meal_type}</span>
// //                                             </p>
// //                                         </div>
// //                                     </div>
// //                                     <div className={`row mt-3 drop mb-3 ${styles.drop}`}>
// //                                         <div className="col-2 d-flex justify-content-center align-items-center">
// //                                             Items:
// //                                         </div>
// //                                         <div className="col-10 d-flex justify-content-center align-items-center">
// //                                             <div className="accordion" id="accordionExample">
// //                                                 <div className={`accordion-item ${styles.aitem}`}>
// //                                                     <h2 className="accordion-header" id="headingOne">
// //                                                         <button
// //                                                             className={`accordion-button ${
// //                                                                 openAccordion === `items-${elem.id}` ? "" : "collapsed"
// //                                                             } ${styles.abtn}`}
// //                                                             type="button"
// //                                                             onClick={() => handleAccordionToggle(`items-${elem.id}`)}
// //                                                             aria-expanded={openAccordion === `items-${elem.id}`}
// //                                                             aria-controls={`items-${elem.id}`}
// //                                                         >
// //                                                             listOfItems
// //                                                         </button>
// //                                                     </h2>
// //                                                     <div
// //                                                         id={`items-${elem.id}`}
// //                                                         className={`accordion-collapse collapse ${
// //                                                             openAccordion === `items-${elem.id}` ? "show" : ""
// //                                                         }`}
// //                                                         aria-labelledby="headingOne"
// //                                                         data-bs-parent="#accordionExample"
// //                                                     >
// //                                                         <div className={`accordion-body ${styles.abody}`}>
// //                                                             {elem.items.map((item, i) => (
// //                                                                 <div key={i}>
// //                                                                     {item.item} - ${item.cost} <br />
// //                                                                 </div>
// //                                                             ))}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                     {/* CONSUMED_BY SECTION */}
// //                                     <div className={`row mt-3 drop mb-3 ${styles.drop}`}>
// //                                         <div className="col-2 d-flex justify-content-center align-items-center">
// //                                             <span className="ms-5">Consumed_By:</span>
// //                                         </div>
// //                                         <div className="col-10 d-flex justify-content-center align-items-center">
// //                                             <div className="accordion" id="accordionExample">
// //                                                 <div className={`accordion-item ${styles.aitem} ms-4`}>
// //                                                     <h2 className="accordion-header" id="headingTwo">
// //                                                         <button
// //                                                             className={`accordion-button ${
// //                                                                 openAccordion === `consumedBy-${elem.id}` ? "" : "collapsed"
// //                                                             } ${styles.abtn}`}
// //                                                             type="button"
// //                                                             onClick={() => handleAccordionToggle(`consumedBy-${elem.id}`)}
// //                                                             aria-expanded={openAccordion === `consumedBy-${elem.id}`}
// //                                                             aria-controls={`consumedBy-${elem.id}`}
// //                                                         >
// //                                                             <span>users</span>
// //                                                         </button>
// //                                                     </h2>
// //                                                     <div
// //                                                         id={`consumedBy-${elem.id}`}
// //                                                         className={`accordion-collapse collapse ${
// //                                                             openAccordion === `consumedBy-${elem.id}` ? "show" : ""
// //                                                         }`}
// //                                                         aria-labelledby="headingTwo"
// //                                                         data-bs-parent="#accordionExample"
// //                                                     >
// //                                                         <div className={`accordion-body ${styles.abody}`}>
// //                                                             {elem.consumed_by_names.map((name, index) => (
// //                                                                 <div key={index}>
// //                                                                     {name} - ${billSplit.toFixed(2)} <br />
// //                                                                 </div>
// //                                                             ))}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </div>

// //                                     <div className="row">
// //                                         <div className="col fs-6">
// //                                             <pre>Bill : {elem.total_cost}$</pre>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             );
// //                         })}
// //                     </div>
// //                 </div>
// //             </>
// //         );
// //     }

// //     return null;
// // };



// import styles from "./userstatistics.module.css";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// export const Userstatistics = () => {
//     const expenses = useSelector((state) => state.expenses.expenses);
//     const status = useSelector((state) => state.expenses.status);
//     const error = useSelector((state) => state.expenses.error);

//     const [openAccordion, setOpenAccordion] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const expensesPerPage = 3;

//     const handleAccordionToggle = (id) => {
//         setOpenAccordion((prev) => (prev === id ? null : id));
//     };

//     const userData = expenses.filter((expense) => {
//         return expense.purchased_by_name === "Charlie Brown";
//     });

//     const userData2 = userData.sort((a, b) => new Date(b.date) - new Date(a.date));

//     // Calculate the index range for the current page
//     const indexOfLastExpense = currentPage * expensesPerPage;
//     const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
//     const currentExpenses = userData2.slice(indexOfFirstExpense, indexOfLastExpense);

//     const totalPages = Math.ceil(userData2.length / expensesPerPage);

//     const handlePageChange = (newPage) => {
//         if (newPage > 0 && newPage <= totalPages) {
//             setCurrentPage(newPage);
//         }
//     };

//     if (status === 'pending') {
//         return <center><div className="h1 fw-bold fs-5 mt-5 text-danger">Loading...</div></center>;
//     }

//     if (status === 'rejected') {
//         return <center><div className="h1 fw-bold fs-5 mt-5 text-danger">Error: {error}</div></center>;
//     }

//     if (status === 'idle') {
//         return (
//             <>
//                 <div className={`container ${styles["main-head"]}`}>
//                     <div className={`container ${styles.head} row align-items-center justify-content-center`}>
//                         <div className="col-2">
//                             <img src="stats.png" alt="menuIcon" className="img-fluid" />
//                         </div>
//                         <div className="col-10 text-center">
//                             <p className="h1 m-0 text-white">USER STATISTICS</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className={`container ${styles.content}`}>
//                         {currentExpenses.map((elem, id) => {
//                             // Calculate the bill split among the users
//                             const billSplit = elem.total_cost / elem.consumed_by_names.length;

//                             return (
//                                 <div
//                                     className={`${styles.box} container mt-3 ${styles.box}`}
//                                     key={id}
//                                 >
//                                     <div className="row table">
//                                         <div className="col-7 d-flex">
//                                             <p className="m-0">
//                                                 {new Date(elem.date).toLocaleDateString()}
//                                             </p>
//                                         </div>
//                                         <div className="col-5 d-flex justify-content-end align-items-center">
//                                             <p className="m-0" style={{fontSize:"10px"}}>
//                                                 MEAL TYPE : <span className="fw-5 ms-2">{elem.meal_type}</span>
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className={`row mt-3 drop mb-3 ${styles.drop}`}>
//                                         <div className="col-2 d-flex justify-content-center align-items-center">
//                                             Items:
//                                         </div>
//                                         <div className="col-10 d-flex justify-content-center align-items-center">
//                                             <div className="accordion" id="accordionExample">
//                                                 <div className={`accordion-item ${styles.aitem}`}>
//                                                     <h2 className="accordion-header" id="headingOne">
//                                                         <button
//                                                             className={`accordion-button ${
//                                                                 openAccordion === `items-${elem.id}` ? "" : "collapsed"
//                                                             } ${styles.abtn}`}
//                                                             type="button"
//                                                             onClick={() => handleAccordionToggle(`items-${elem.id}`)}
//                                                             aria-expanded={openAccordion === `items-${elem.id}`}
//                                                             aria-controls={`items-${elem.id}`}
//                                                         >
//                                                             listOfItems
//                                                         </button>
//                                                     </h2>
//                                                     <div
//                                                         id={`items-${elem.id}`}
//                                                         className={`accordion-collapse collapse ${
//                                                             openAccordion === `items-${elem.id}` ? "show" : ""
//                                                         }`}
//                                                         aria-labelledby="headingOne"
//                                                         data-bs-parent="#accordionExample"
//                                                     >
//                                                         <div className={`accordion-body ${styles.abody}`}>
//                                                             {elem.items.map((item, i) => (
//                                                                 <div key={i}>
//                                                                     {item.item} - ${item.cost} <br />
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* CONSUMED_BY SECTION */}
//                                     <div className={`row mt-3 drop mb-3 ${styles.drop}`}>
//                                         <div className="col-2 d-flex justify-content-center align-items-center">
//                                             <span className="ms-5">Consumed_By:</span>
//                                         </div>
//                                         <div className="col-10 d-flex justify-content-center align-items-center">
//                                             <div className="accordion" id="accordionExample">
//                                                 <div className={`accordion-item ${styles.aitem} ms-4`}>
//                                                     <h2 className="accordion-header" id="headingTwo">
//                                                         <button
//                                                             className={`accordion-button ${
//                                                                 openAccordion === `consumedBy-${elem.id}` ? "" : "collapsed"
//                                                             } ${styles.abtn}`}
//                                                             type="button"
//                                                             onClick={() => handleAccordionToggle(`consumedBy-${elem.id}`)}
//                                                             aria-expanded={openAccordion === `consumedBy-${elem.id}`}
//                                                             aria-controls={`consumedBy-${elem.id}`}
//                                                         >
//                                                             <span>users</span>
//                                                         </button>
//                                                     </h2>
//                                                     <div
//                                                         id={`consumedBy-${elem.id}`}
//                                                         className={`accordion-collapse collapse ${
//                                                             openAccordion === `consumedBy-${elem.id}` ? "show" : ""
//                                                         }`}
//                                                         aria-labelledby="headingTwo"
//                                                         data-bs-parent="#accordionExample"
//                                                     >
//                                                         <div className={`accordion-body ${styles.abody}`}>
//                                                             {elem.consumed_by_names.map((name, index) => (
//                                                                 <div key={index}>
//                                                                     {name} - ${billSplit.toFixed(2)} <br />
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="row">
//                                         <div className="col fs-6">
//                                             <pre>Bill : {elem.total_cost}$</pre>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                         <div className="d-flex justify-content-center mt-4">
//                             <button
//                                 className="btn btn-primary me-2"
//                                 onClick={() => handlePageChange(currentPage - 1)}
//                                 disabled={currentPage === 1}
//                             >
//                                 Previous
//                             </button>
//                             <button
//                                 className="btn btn-primary ms-2"
//                                 onClick={() => handlePageChange(currentPage + 1)}
//                                 disabled={currentPage === totalPages}
//                             >
//                                 Next
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }

//     return null;
// };

import styles from "./userstatistics.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Userstatistics = () => {
    const expenses = useSelector((state) => state.expenses.expenses);
    const status = useSelector((state) => state.expenses.status);
    const error = useSelector((state) => state.expenses.error);
    const username=useSelector((state)=>state.auth.username);

    const [openAccordion, setOpenAccordion] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const expensesPerPage = 3;

    const handleAccordionToggle = (id) => {
        setOpenAccordion((prev) => (prev === id ? null : id));
    };

    const userData = expenses.filter((expense) => {
        return expense.purchased_by_name === username;
    });

    const userData2 = userData.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Calculate the index range for the current page
    const indexOfLastExpense = currentPage * expensesPerPage;
    const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
    const currentExpenses = userData2.slice(indexOfFirstExpense, indexOfLastExpense);

    const totalPages = Math.ceil(userData2.length / expensesPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    if (status === 'pending') {
        return <center><div className="h1 fw-bold fs-5 mt-5 text-danger">Loading...</div></center>;
    }

    if (status === 'rejected') {
        return <center><div className="h1 fw-bold fs-5 mt-5 text-danger">Error: {error}</div></center>;
    }

    if (status === 'idle') {
        return (
            <>
                <div className={`container ${styles["main-head"]}`}>
                    <div className={`container ${styles.head} row align-items-center justify-content-center`}>
                        <div className="col-2">
                            {/* <img src="stats.png" alt="menuIcon" className="img-fluid" /> */}
                            <i className="fa-solid fa-chart-simple" style={{fontSize:"30px",color:"white",marginLeft:"10px"}}></i>
                        </div>
                        <div className="col-10 text-center">
                            <p className="h1 m-0 text-white">USER STATISTICS</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={`container ${styles.content}`} style={{borderRadius:"12px"}}>
                        {currentExpenses.map((elem, id) => {
                            // Calculate the bill split among the users
                            const billSplit = elem.total_cost / elem.consumed_by_names.length;

                            return (
                                <div
                                    className={`${styles.box} container mt-3 ${styles.box}`}
                                    key={id} style={{borderRadius:"15px"}}
                                >
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td style={{color:"#1A2097"}}>Date:</td>
                                                <td>{new Date(elem.date).toLocaleDateString()}</td>
                                            </tr>
                                            <tr>
                                                <td style={{color:"#1A2097"}}>Meal Type:</td>
                                                <td>{elem.meal_type}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table" style={{marginTop:"5px"}}>
                                        <tbody>
                                            <tr>
                                                <td id="label1" style={{color:"#1A2097"}}>Items:</td>
                                                <td id="field1">
                                                    <div className="accordion" id={`accordionItems-${elem.id}`}>
                                                        <div className={`accordion-item ${styles.aitem}`}>
                                                            <h2 className="accordion-header" id={`headingItems-${elem.id}`}>
                                                                <button
                                                                    className={`accordion-button ${
                                                                        openAccordion === `items-${elem.id}` ? "" : "collapsed"
                                                                    } ${styles.abtn}`}
                                                                    type="button"
                                                                    onClick={() => handleAccordionToggle(`items-${elem.id}`)}
                                                                    aria-expanded={openAccordion === `items-${elem.id}`}
                                                                    aria-controls={`items-${elem.id}`}
                                                                >
                                                                    listOfItems
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id={`items-${elem.id}`}
                                                                className={`accordion-collapse collapse ${
                                                                    openAccordion === `items-${elem.id}` ? "show" : ""
                                                                }`}
                                                                aria-labelledby={`headingItems-${elem.id}`}
                                                                data-bs-parent={`#accordionItems-${elem.id}`}
                                                            >
                                                                <div className={`accordion-body ${styles.abody}`}>
                                                                    {elem.items.map((item, i) => (
                                                                        <div key={i}>
                                                                            {item.item} - ${item.cost} <br />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="label2" style={{color:"#1A2097"}}>Consumed By:</td>
                                                <td id="field2">
                                                    <div className="accordion" id={`accordionConsumedBy-${elem.id}`}>
                                                        <div className={`accordion-item ${styles.aitem}`}>
                                                            <h2 className="accordion-header" id={`headingConsumedBy-${elem.id}`}>
                                                                <button
                                                                    className={`accordion-button ${
                                                                        openAccordion === `consumedBy-${elem.id}` ? "" : "collapsed"
                                                                    } ${styles.abtn}`}
                                                                    type="button"
                                                                    onClick={() => handleAccordionToggle(`consumedBy-${elem.id}`)}
                                                                    aria-expanded={openAccordion === `consumedBy-${elem.id}`}
                                                                    aria-controls={`consumedBy-${elem.id}`}
                                                                >
                                                                    <span>users</span>
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id={`consumedBy-${elem.id}`}
                                                                className={`accordion-collapse collapse ${
                                                                    openAccordion === `consumedBy-${elem.id}` ? "show" : ""
                                                                }`}
                                                                aria-labelledby={`headingConsumedBy-${elem.id}`}
                                                                data-bs-parent={`#accordionConsumedBy-${elem.id}`}
                                                            >
                                                                <div className={`accordion-body ${styles.abody}`}>
                                                                    {elem.consumed_by_names.map((name, index) => (
                                                                        <div key={index}>
                                                                            {name} - ${billSplit.toFixed(2)} <br />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{color:"#1A2097"}}>Bill:</td>
                                                <td>{elem.total_cost}$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                        <div className="d-flex justify-content-center mt-4">
                            <button
                                className="btn btn-primary me-2"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1} style={{color:"white",backgroundColor:"#1A2097"}}
                            >
                                Previous
                            </button>
                            <button
                                className="btn btn-primary ms-2"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages} style={{color:"white",backgroundColor:"#1A2097"}}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return null;
};
