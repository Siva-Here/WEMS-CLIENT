// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getExpenses } from './store/slices/ExpenseSlice';
// import { ExpensesStatistics } from './components/ExpensesStatistics/ExpensesStatistics';
// import { Userstatistics } from './components/UserStatistics/Userstatistics';
// import {WeeklyStats} from './components/Statistics/WeeklyStats';
// import { addExpense } from './store/slices/ExpenseSlice';
// import {RegistrationPage} from './components/Registration/RegistrationPage.jsx'
// import {Login} from './components/Login/Login.jsx'
// import {Service} from './components/AddExpenses/services.jsx'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Error from './components/Error/Error.jsx';

// import {Navbar} from './components/Navbar/Navbar.jsx'
// function App() {
//   const dispatch = useDispatch();
//   const expensefetched = useSelector((state) => state.expenses.fetched);

//   useEffect(() => {
//     if (!expensefetched) {
//       console.log("fetching process")
//       dispatch(getExpenses());
//     }
//   }, [dispatch, expensefetched]);


//   return (

//     <RegistrationPage/>
//     // <Login/>

//   //   <BrowserRouter>
//   //   <Routes>
//   //     <Route path="/" element={<Navbar/>}>
//   //       <Route index element={<Service/>}/>
//   //       <Route path="service" element={<Service/>}/>
//   //       <Route path="user" element={<Userstatistics/>}/>
//   //       <Route path="expenses" element={<ExpensesStatistics/>}/>
//   //       <Route path="report" element={<WeeklyStats/>}/>
//   //       <Route path="*" element={<Error/>}/>
//   //     </Route>
//   //   </Routes>
//   // </BrowserRouter>
//   );
// }
// export default App;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExpenses } from './store/slices/ExpenseSlice';
import { ExpensesStatistics } from './components/ExpensesStatistics/ExpensesStatistics';
import { Userstatistics } from './components/UserStatistics/Userstatistics';
import { WeeklyStats } from './components/Statistics/WeeklyStats';
import { RegistrationPage } from './components/Registration/RegistrationPage.jsx';
import { Login } from './components/Login/Login.jsx';
import { Service } from './components/AddExpenses/services.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error from './components/Error/Error.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { setAuthenticated, setRegistrationCompleted } from './store/slices/AuthSlice';

function App() {
  
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const hasCompletedRegistration = useSelector((state) => state.auth.hasCompletedRegistration);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/service" />} />
        <Route path="service" element={<PrivateRoute element={<Service/>} />}/>
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<PrivateRoute element={<Userstatistics />} />} />
        <Route path="expenses" element={<PrivateRoute element={<ExpensesStatistics />} />} />
        <Route path="report" element={<PrivateRoute element={<WeeklyStats />} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
