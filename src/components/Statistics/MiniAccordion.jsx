import { useState, useEffect } from "react";
import styles from "./accordion.module.css";
import { Accordion } from "./ReusedAccordion";
import { useSelector, useDispatch } from "react-redux";
import { getReport } from "../../store/slices/WeeklyStatsSlice";
// import {data} from './data.js'

export const Statis = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const start_date = useSelector((state) => state.report.start_date);
  const end_date = useSelector((state) => state.report.end_date);
  const data = useSelector((state) => state.report.report);
  const status = useSelector((state) => state.report.status);
  const error = useSelector((state) => state.report.error);
  const fetched = useSelector((state) => state.report.fetched);
  const dispatch = useDispatch();

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    dispatch(getReport(date));  // Dispatch the action with the selected date
  };

  useEffect(() => {
    if (!fetched && selectedDate) {
      dispatch(getReport(selectedDate));
    }
  }, [dispatch, fetched, selectedDate]);

  if (status === 'pending') {
    return <div className="" style={{ fontSize: "30px", fontWeight: "800", textAlign: "center" }}>Loading...</div>;
  }

  if (status === 'rejected') {
    return (
      <>
        <p className='d-flex justify-content-center fw-bold mt-3 text-danger'>Error: {error}</p>
      </>
    );
  }

  return (
    <div className="containerfluid mt-3">
      <div className="container mb-4 mt-1">
        <div className="row">
          <form action="">
          <div className="col-12 text-center mb-4">
            <label style={{fontSize:"21px",fontWeight:"bold"}}>Date:</label>
            <input type="Date" className="ms-2 " onChange={handleDateChange}/>
          </div>
          </form>
          <div className="col-12">
            <div className="row">
              <div className="col-6 d-flex justify-content-around me-auto" style={{border:"2px solid blue",height:"53px",width:"auto",borderRadius:"6px"}}>
              <div className="startDate text-center ">
                <span className="fw-bold">Start-Date:</span>
                <p>{start_date}</p>
              </div>
              </div>
              <div className="col-6 d-flex justify-content-around" style={{border:"2px solid blue",height:"53px",width:"auto",borderRadius:"6px"}}>
              <div className="endDate text-center">
                  <span className="fw-bold">End-Date:</span>
                  <p>{end_date}</p>
              </div>
              </div> 
            </div>
          </div>
          
        </div>
      </div>
      {data.map((bill, index) => (
        <div className="accordion mb-2" id="accordionExample" key={index}>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${
                  openAccordion === index ? "" : "collapsed"
                }`}
                style={{
                  background: "linear-gradient(90deg, #1A2097 0%, #2C53FD 100%)",
                  color: "white",
                  height: "70px",
                  fontWeight: "800",
                  border: "none",
                }}
                type="button"
                onClick={() => handleAccordionToggle(index)}
                aria-expanded={openAccordion === index}
                aria-controls={`collapse${index}`}
              >
                {bill.name}
              </button>
            </h2>
            {/* <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${
                openAccordion === index ? "show" : ""
              }`}
              aria-labelledby={`heading${index}`}
            > */}
            <div
              id={`collapse${index}`}
              className={`${styles.accordionCollapse} ${openAccordion === index ? styles.show : ""
                }`}
              aria-labelledby={`heading${index}`}
            >
              <div className="accordion-body">
                <table width="250px" >
                  <tbody>
                    <tr>
                      <td className={styles.head}>Items&price</td>
                      <td>:</td>
                      <td className={`${styles.res3}`}>
                        <Accordion items={bill.items} />
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.head}>Debts</td>
                      <td>:</td>
                      <td className={styles.res1}>
                        <Accordion debts={bill.owes_to} />
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.head}>Credits</td>
                      <td>:</td>
                      <td className={styles.res2}>
                        <Accordion credits={bill.owed_by} />
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.head}>TotalAmount</td>
                      <td>:</td>
                      <td className={`${styles.res}`}>
                        <span className="ms-3">{`₹${bill.total_amount}`}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
