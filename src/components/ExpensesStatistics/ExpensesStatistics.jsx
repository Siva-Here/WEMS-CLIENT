import { ExpensesAccordion } from './ExpensesAccordian';
import styles from './ExpensesStatistics.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getExpenses } from '../../store/slices/ExpenseSlice';

export const ExpensesStatistics = () => {
    const expenses = useSelector((state) => state.expenses.expenses);
    const status = useSelector((state) => state.expenses.status);
    const error = useSelector((state) => state.expenses.error);
    const dispatch = useDispatch();
    const expensefetched = useSelector((state) => state.expenses.fetched);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if(isAuthenticated){
          if (!expensefetched) {
            console.log("fetching process");
            dispatch(getExpenses());
          }
        }
      }, [dispatch, expensefetched]);

    return (
        
        <>
            {status === 'pending' && <p className='d-flex justify-content-center fw-bold mt-5 text-danger'>Loading...</p>}
            {status === 'rejected' && <p className='d-flex justify-content-center fw-bold mt-5 text-danger'>Error: {error}</p>}
        <div className={`${styles["border-div"]} mt-5 ms-1 me-1`}>
            <div className="d-flex justify-content-end">
                {/* headerpart */}
            </div>
            <div className={styles["middel-part"]}>
                <i className="fa-solid fa-indian-rupee-sign mt-2"></i>
                <h5 className={`${styles["h5-head"]} mt-1 fw-bold d-flex justify-content-center mt-3`}>Total Expenses</h5>

                {/* {status === 'pending' && <p style={{position:"relative",top:"70%"}}>Loading...</p>} */}
                {/* {status === 'rejected' && <p>Error: {error}</p>} */}
                {status === 'idle' && expenses.length > 0 && (
                    <div className={`${styles.count} ms-4 mt-2`}>{expenses.length}</div>
                )}
                {status === 'idle' && expenses.length === 0 && <p>No expenses found.</p>}
            </div>
            {status === 'idle' && expenses.length > 0 && <ExpensesAccordion />}
        </div>
        </>
    );
};
