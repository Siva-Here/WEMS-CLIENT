// import { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import styles from "./accordion.module.css";

// export const Accordion = ({ items = {}, debts = [], credits = [] }) => {
//   const [toggle, setToggle] = useState(false);

//   const isEmpty =
//     Object.keys(items).length === 0 &&
//     debts.length === 0 &&
//     credits.length === 0;

//   const renderSection = (data, type) => (
//     data.map((entry, idx) => (
//       <div className="d-flex justify-content-between" key={idx}>
//         <p style={{ fontWeight: 800, fontSize: "13.5px" }}>
//           {type === 'items' ? `${entry[0]} - ₹${entry[1]}` 
//             : type === 'debts' ? `${entry.user} owes ₹${entry.amount.toFixed(2)}` 
//             : `${entry.user} is owed ₹${entry.amount.toFixed(2)}`}
//         </p>
//         {/* {<img src="images/solar_hamburger-menu-broken.svg" alt="img" style={{marginTop:"-20px"}}/>} */}
//         {idx === 0 && (
//           <p className={toggle ? styles.up : styles.down} >
//             <IoIosArrowDown />
//           </p>
//         )}
//       </div>
//     ))
//   );

//   return (
//     <div
//       className={`${styles.content} ${toggle ? styles.toggleOn : styles.toggleOff}  ms-1`}
//       onClick={() => setToggle(!toggle)} 
//     >
//       {isEmpty ? (<p className="text-center fw-bold fs-5">None</p>):(<div>
//         {items && renderSection(Object.entries(items), 'items')}
//         {debts && renderSection(debts, 'debts')}
//         {credits && renderSection(credits, 'credits')}
//       </div>)}
//     </div>
//   );
// };





import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./accordion.module.css";

export const Accordion = ({ items = {}, debts = [], credits = [] }) => {
  const [toggle, setToggle] = useState(false);

  const isEmpty =
    Object.keys(items).length === 0 &&
    debts.length === 0 &&
    credits.length === 0;

  const renderSection = (data, type) => (
    data.map((entry, idx) => (
      <div className="d-flex justify-content-between align-items-center" key={idx}>
        <p style={{ fontWeight: 800, fontSize: "13.5px" }}>
          {type === 'items' ? `${entry[0]} - ₹${entry[1]}` 
            : type === 'debts' ? `${entry.user} owes ₹${entry.amount.toFixed(2)}` 
            : `${entry.user} is owed ₹${entry.amount.toFixed(2)}`}
        </p>
        {type === 'debts' && (
          <img 
            src="images/solar_hamburger-menu-broken.svg" 
            alt="img" 
            style={{ marginTop: "-20px" }} 
          />
        )}
        {idx === 0 && (
          <p className={toggle ? styles.up : styles.down}>
            <IoIosArrowDown />
          </p>
        )}
      </div>
    ))
  );

  return (
    <div
      className={`${styles.content} ${toggle ? styles.toggleOn : styles.toggleOff} ms-1`}
      onClick={() => setToggle(!toggle)} 
    >
      {isEmpty ? (
        <p className="text-center fw-bold fs-5">None</p>
      ) : (
        <div>
          {items && renderSection(Object.entries(items), 'items')}
          {debts && renderSection(debts, 'debts')}
          {credits && renderSection(credits, 'credits')}
        </div>
      )}
    </div>
  );
};
