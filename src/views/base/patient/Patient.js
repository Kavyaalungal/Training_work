// import React from 'react'
// import { CCard,CCardBody,CCardHeader,CCol,CRow,CAccordion,CAccordionBody,CAccordionHeader,CAccordionItem,
// } from '@coreui/react'
// import { DocsExample } from 'src/components'

// const Accordion = () => {
//   return (
//     <CRow>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Accordion</strong>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-body-secondary small">
//               Click the accordions below to expand/collapse the accordion content.
//             </p>
//             <DocsExample href="components/accordion">
//               <CAccordion activeItemKey={2}>
//                 <CAccordionItem itemKey={1}>
//                   <CAccordionHeader>Accordion Item #1</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={2}>
//                   <CAccordionHeader>Accordion Item #2</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={3}>
//                   <CAccordionHeader>Accordion Item #3</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//               </CAccordion>
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Accordion</strong> <small>Flush</small>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-body-secondary small">
//               Add <code>flush</code> to remove the default <code>background-color</code>, some
//               borders, and some rounded corners to render accordions edge-to-edge with their parent
//               container.
//             </p>
//             <DocsExample href="components/accordion#flush">
//               <CAccordion flush>
//                 <CAccordionItem itemKey={1}>
//                   <CAccordionHeader>Accordion Item #1</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={2}>
//                   <CAccordionHeader>Accordion Item #2</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={3}>
//                   <CAccordionHeader>Accordion Item #3</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//               </CAccordion>
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Accordion</strong> <small>Always open</small>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-body-secondary small">
//               Add <code>alwaysOpen</code> property to make accordion items stay open when another
//               item is opened.
//             </p>
//             <DocsExample href="components/accordion#flush">
//               <CAccordion alwaysOpen>
//                 <CAccordionItem itemKey={1}>
//                   <CAccordionHeader>Accordion Item #1</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={2}>
//                   <CAccordionHeader>Accordion Item #2</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={3}>
//                   <CAccordionHeader>Accordion Item #3</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//               </CAccordion>
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//       </CCol>
//     </CRow>
//   )
// }

// export default Accordion






//import { CCard } from '@coreui/react';
//import { TextField } from '@mui/material';
//import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'assets/css/icons.min.css';
//import 'assets/css/app.min.css';

//const Login = () => {
 // return (
 //   <>
 //     <style>{`
  //      .content-wrapper {
  //        border-radius: 8px; /* Optional: for rounded corners */
  //        padding: 20px;
  //        background-color: #fff; /* Optional: for background color */
  //      }
  //    `}</style>
  //      <CCard className="mb-4">
  //    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 p-0">
  //      <div className="row g-0 justify-content-center align-items-center w-100">
  //        <div className="col-lg-4 d-flex justify-content-center align-items-center">
  //          <div className="content-wrapper w-100 p-4">
  //            <div className="text-center">
  //              <a href="index.html" className="authentication-logo">
  //                <img
  //                  src="assets/images/logo-dark.png"
                    // alt="Logo Dark"
  //                  height={20}
   //                 className="auth-logo logo-dark mx-auto"
   //               />
   //               <img
   //                 src="assets/images/logo-light.png"
                    // alt="Logo Light"
   //                 height={20}
   //                 className="auth-logo logo-light mx-auto"
   //               />
   //             </a>
   //             <h4 className="font-size-18 mt-4">Welcome Back!</h4>
   //             <p className="text-muted">Sign in to continue to Nazox.</p>
    //          </div>
    //          <div className="p-2 mt-5">
    //            <form action="index.html">
     //             <div className="mb-3 auth-form-group-custom">
     //               <i className="ri-user-2-line auti-custom-input-icon"></i>
                    {/* <label htmlFor="username" className="fw-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                    /> */}
   //                 <TextField
   //             id="username"
    //            label="Username"
    //            variant="outlined"
    //            size="small"
     //           fullWidth
                // value={labNo}
                // onChange={(e) => setLabNo(e.target.value)}
   //             InputLabelProps={{ style: { fontSize: '18px' } }}
   //              style={{ marginTop: '10px' }}
    //          />
    //              </div>
     //             <div className="mb-3 auth-form-group-custom">
     //               <i className="ri-lock-2-line auti-custom-input-icon"></i>
      //              <TextField
       //         id="password"
       //         label="Password"
        //        variant="outlined"
        //        size="small"
        //        fullWidth
                // value={labNo}
                // onChange={(e) => setLabNo(e.target.value)}
       //         InputLabelProps={{ style: { fontSize: '18px' } }}
       //          style={{ marginTop: '10px' }}
       //       />
                    {/* <label htmlFor="userpassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="userpassword"
                      placeholder="Enter password"
                    /> */}
        //          </div>
                  {/* <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customControlInline"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customControlInline"
                    >
                      Remember me
                    </label>
                  </div> */}
         //         <div className="mt-4 text-center">
         //           <button
         //             className="btn btn-primary w-md waves-effect waves-light"
         //             type="submit"
         //           >
         //             Log In
          //          </button>
          //        </div>
           //       <div className="mt-4 text-center">
           //         <a href="auth-recoverpw.html" className="text-muted">
           //           <i className="mdi mdi-lock me-1"></i> Forgot your password?
           //         </a>
           //       </div>
           //     </form>
           //   </div>
              {/* <div className="mt-5 text-center">
                <p>
                  Don't have an account?{" "}
                  <a
                    href="auth-register.html"
                    className="fw-medium text-primary"
                  >
                    Register
                  </a>
                </p>
                <p>
                  © Nazox. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger"></i> by Themesdesign
                </p>
              </div> */}
        //    </div>
       //   </div>
          {/* <div className="col-lg-8 d-none d-lg-block">
            <div className="authentication-bg">
              <div className="bg-overlay"></div>
            </div>
          </div> */}
     //   </div>
    // </div>
   //   </CCard>
   // </>
 // );
//};

//export default Login;





// import React from 'react'
// import { Link } from 'react-router-dom'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'

// const Login = () => {
//   return (
//     // <CCard className="mb-4">
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={8}>
//             <CCardGroup>
//             <CCard className="p-4 mb-4">
//               <CCard className="p-4 mb-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-body-secondary">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <CIcon icon={cilUser} />
//                       </CInputGroupText>
//                       <CFormInput placeholder="Username" autoComplete="username" />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <CIcon icon={cilLockLocked} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         placeholder="Password"
//                         autoComplete="current-password"
//                       />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs={6}>
//                         <CButton color="primary" className="px-4">
//                           Login
//                         </CButton>
//                       </CCol>
//                       <CCol xs={6} className="text-right">
//                         <CButton color="link" className="px-0">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//                 </CCard>
//               </CCard>
//               {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                       tempor incididunt ut labore et dolore magna aliqua.
//                     </p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard> */}
//             </CCardGroup>
           
//           </CCol>
          
//         </CRow>
//       </CContainer>
//     </div>
//     // </CCard>
//   )
// }

// export default Login
// import React, { useState } from 'react';
// import {
//   TextField, Grid, FormControlLabel, Checkbox, Button,
//   MenuItem, Select, InputLabel, Radio, RadioGroup, FormControl,
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
//   AppBar, Toolbar, Typography, Box, Container, FormGroup
// } from '@mui/material';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Patient = () => {
//   const [selectedView, setSelectedView] = useState('Bill View');
//   const patients = [
//     { slNo: 1, labNo: 5749, name: "KRISHNA A S", age: 22, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "N Mohanan BSc MBBS MS", tests: ["COMPLETE HAEMOGRAM +", "HBsAg", "HIV-DUO (Ivth GENERATION T", "Anti HCV", "HAEMOGLOBIN (HB)"], specimen: "EDTA WHOLE ...", total: 1860, pendingAmt: 0 },
//     { slNo: 2, labNo: 5748, name: "RABESHNA", age: 36, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "Vineetha S MBBS DGO FMAS", tests: ["HAEMOGLOBIN (HB)", "ANTI MULLARIAN HORMONE", "THYROID STIMULATING HORM..."], specimen: "SERUM", total: 1510, pendingAmt: 0 },
//     { slNo: 3, labNo: 5747, name: "JAYAN N P", age: 57, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE"], specimen: "SERUM", total: 140, pendingAmt: 0 },
//     { slNo: 4, labNo: 5746, name: "JOHN", age: 30, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE", "GLUCOSE PLASMA FASTING"], specimen: "PLASMA(fasti...", total: 1500, pendingAmt: 0 }
//   ];

//   const filterLabels = ['Result Issued', 'On Processing', 'Time Over', 'Cancelled Invoice', 'Half Verified', 'Time Over Reminder'];
//   const handleViewChange = (event) => {
//     setSelectedView(event.target.value); // Update selected radio button state
//   };
//   const checkboxColors = ['#0073e6', '#ff9900', '#4caf50', '#f44336', '#9c27b0', '#ffc107'];
//   return (
//     <>
//       <AppBar position="static" style={{ backgroundColor: '#0c97e6' }}>
//         <Toolbar>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             PATIENT VIEWS
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="lg">
//         <Box sx={{ p: 2 }}>
//           <Paper elevation={3}>
//             <Box p={2}>
//               <Grid container spacing={2} alignItems="center">
//                 <Grid item xs={12}>
//                 <FormGroup row style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//                     {filterLabels.map((label, index) => (
//                       <FormControlLabel
//                         key={label}
//                         control={<Checkbox sx={{ color: checkboxColors[index % checkboxColors.length] }} size="small" />}
//                         label={label}
//                         style={{ marginRight: '10px' }}
//                       />
//                     ))}
//                   </FormGroup>
//                   <Grid container spacing={2} alignItems="center" style={{ marginTop: '10px' }}>
//                     <Grid item xs={12} sm={4} md={3} lg={2}>
//                     <FormControl component="fieldset">
//                         <RadioGroup row value={selectedView} onChange={handleViewChange}>
//                           {['Bill View', 'Result View', 'Track View'].map(label => (
//                             <FormControlLabel
//                               key={label}
//                               value={label}
//                               control={<Radio size="small" />}
//                               label={label}
//                               style={{ marginRight: '10px' }}
//                             />
//                           ))}
//                         </RadioGroup>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={12} sm={4} md={3} lg={2}>
//                       <FormControl variant="outlined" size="small" fullWidth>
//                         <InputLabel>Sort By</InputLabel>
//                         <Select label="Sort By" defaultValue="">
//                           <MenuItem value="">None</MenuItem>
//                           <MenuItem value="date">Date</MenuItem>
//                           <MenuItem value="name">Name</MenuItem>
//                           <MenuItem value="amount">Amount</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={12} sm={4} md={3} lg={2}>
//                       <FormControl variant="outlined" size="small" fullWidth>
//                         <InputLabel>Status</InputLabel>
//                         <Select label="Status" defaultValue="">
//                           <MenuItem value="">All</MenuItem>
//                           <MenuItem value="paid">Paid</MenuItem>
//                           <MenuItem value="unpaid">Unpaid</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={12} sm={4} md={3} lg={2}>
//                       <FormControl variant="outlined" size="small" fullWidth>
//                         <InputLabel>Type</InputLabel>
//                         <Select label="Type" defaultValue="">
//                           <MenuItem value="">Any</MenuItem>
//                           <MenuItem value="urgent">Urgent</MenuItem>
//                           <MenuItem value="normal">Normal</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={3} lg={2}>
//                       <TextField
//                         id="start-date"
//                         label="Start Date"
//                         type="date"
//                         variant="outlined"
//                         size="small"
//                         InputLabelProps={{ shrink: true }}
//                         fullWidth
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={3} lg={2}>
//                       <TextField
//                         id="end-date"
//                         label="End Date"
//                         type="date"
//                         variant="outlined"
//                         size="small"
//                         InputLabelProps={{ shrink: true }}
//                         fullWidth
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={12} lg={2}>
//                       <Button variant="contained" color="primary" fullWidth>Refresh</Button>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//               <Grid container spacing={2} alignItems="center" style={{ marginTop: '20px' }}>
//                 {['Area', 'Corporate', 'Phone No', 'Referral', 'Sample Id', 'Department', 'IPOP', 'Specimen', 'Email', 'Lab No', 'Name', 'Payment', 'Tests'].map(label => (
//                   <Grid item xs={12} sm={6} md={4} lg={3} key={label}>
//                     <TextField
//                       id={label.toLowerCase().replace(' ', '-')}
//                       label={label}
//                       variant="outlined"
//                       size="small"
//                       fullWidth
//                       InputLabelProps={{ style: { fontSize: '16px' } }}
//                       style={{ marginBottom: '10px' }}
//                     />
//                   </Grid>
//                 ))}
//               </Grid>
//               <TableContainer component={Paper} style={{ marginTop: '20px' }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow style={{ backgroundColor: '#f0f0f0' }}> {/* Change background color here */}
//                       {['Sl No', 'Lab No', 'Name', 'Date', 'Collected At', 'Reference', 'Tests', 'Specimen', 'Total', 'Pend Amt'].map(header => (
//                         <TableCell key={header}>{header}</TableCell>
//                       ))}
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {patients.map((patient, index) => (
//                       <TableRow key={index}>
//                         <TableCell>{patient.slNo}</TableCell>
//                         <TableCell>{patient.labNo}</TableCell>
//                         <TableCell>{patient.name} ({patient.age} Years {patient.gender})</TableCell>
//                         <TableCell>{patient.date}</TableCell>
//                         <TableCell>{patient.collectedAt}</TableCell>
//                         <TableCell>{patient.reference}</TableCell>
//                         <TableCell>{patient.tests.join(', ')}</TableCell>
//                         <TableCell>{patient.specimen}</TableCell>
//                         <TableCell>{patient.total}</TableCell>
//                         <TableCell>{patient.pendingAmt}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <ToastContainer />
//             </Box>
//           </Paper>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Patient;
import React, { useState, useEffect } from 'react';

import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, FormControlLabel, FormGroup, Checkbox, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Patient= () => {
 return (
    <>
     <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px',  }}>
<Container component="main" maxWidth="md" >
      <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
                id="labno"
                label="Lab No"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
                 style={{ marginTop: '10px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
      id="invDateTime"
      label="Date"
      variant="outlined"
      size="small"
      fullWidth
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      style={{ marginTop: '10px' }}
    />
     </Grid>
     <Grid item xs={12} sm={4}>
                <TextField
                  id="patientid"
                  label="Patient ID"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="memberid"
                  label="Member Id"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
              <Button variant="contained" color="primary"
              style={{
                // backgroundColor: '#3f51b5', // Blue background
                color: 'white', // White text
                fontWeight: 'bold', // Bold text
                padding: '10px 10px', // Padding
                borderRadius: '4px', // Rounded corners
                cursor: 'pointer',
                marginBottom:'10px' // Pointer cursor on hover
              }}>
                Search
              </Button>
              </Grid>
            <Grid item xs={12} sm={2}>
  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
    <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px'
  }}>Prefix</InputLabel>
    <Select
      name="prefix"
      label="Prefix"
      sx={{ width: '100%',height:'75%' }}
        >
       <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                    <MenuItem value="Miss">Miss</MenuItem>
    </Select>
  </FormControl>
</Grid>
<Grid item xs={12} sm={10}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
        
            <Grid item xs={12} sm={1}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: 'rgba(0, 0, 0, 0.7)',
                  fontSize: '16px',
                  marginTop: '8px',
                  textAlign: 'left',
                }}> Age</Typography>
            </Grid>
              <Grid item container xs={12} sm={7} spacing={1}>
              <Grid item xs={3}>
              <TextField
                id="dd"
                label="Day"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="mm"
                label="Month"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="yyyy"
                label="Year"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid> 
            <Grid item xs={12} sm={3}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel id="genderLabel">Gender</InputLabel>
                    <Select
                      labelId="genderLabel"
                      id="gender"
                      label="Gender" >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
              <TextField
                id="dob"
                label="Date of Birth"
                type="date"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
              />
            </Grid>
<Grid item xs={12} sm={4}>
                <TextField
                  id="phone1"
                  label="Phone1"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
              <TextField
                id="phone2"
                label="Phone2"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
          
           
            <Grid item xs={12} sm={12}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
          <TextField
             id="refBy"
            label="Ref By"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
        </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                id="outdr"
                label="Out Dr"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="branch"
                label="Branch"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="ipopno"
                label="IP/OP"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
      <TextField
        id="collmode"
        label="Coll. Mode"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
            <TextField
          id="area"
          label="Area"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '14px' } }}
        />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="paymode"
                label="Pay mode"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="collperson"
                label="Coll.Person"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
      <TextField
        id="corporate"
        label="Corporate"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
</Grid>
<Grid item xs={12} sm={6}>
            <TextField
              id="cardno"
              label="Card No"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
      </Grid>
      <Grid item xs={12} sm={12}>
      <Box mt={3}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Field 1</TableCell>
                    <TableCell>Field 2</TableCell>
                    <TableCell>Field 3</TableCell>
                    <TableCell>Field 4</TableCell>
                    <TableCell>Field 5</TableCell>
                    <TableCell>Field 5</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Add rows dynamically if needed */}
                  <TableRow>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          </Grid>
      <Grid item xs={12} sm={6}>
  <TextField
    id="sampleOn"
    label="Sample On"
    type="datetime-local"
    variant="outlined"
    size="small"
    fullWidth
    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    id="reportTime"
    label="Report Time"
    type="datetime-local"
    variant="outlined"
    size="small"
    fullWidth
    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
  />
</Grid>
        <Grid item xs={12}>
      <FormControl component="fieldset">
        <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
        <FormGroup row>
          <FormControlLabel
             control={<Checkbox  name="personally" />}
            label="Personally"
          />
           <FormControlLabel
             control={<Checkbox  name="courier" />}
            label="Courier"
          />
          <FormControlLabel
             control={<Checkbox   name="phone" />}
            label="phone"
          />
         
          <FormControlLabel
             control={<Checkbox  name="email" />}
            label="Email"
          />
          <FormControlLabel
            control={<Checkbox  name="sms" />}
            label="SMS"
          />
         
        </FormGroup>
      </FormControl>
       </Grid>
    <Grid item xs={12} sm={12}>
              <TextField
                id="urgent"
                label="Urgent"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="total"
                label="Total"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="notes"
                // label="Notes"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
    {/* <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px'
  }}>Prefix</InputLabel> */}
    <Select
      name="prefix"
      label="Prefix"
      sx={{ width: '100%',height:'75%' }}
        >
       <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                    <MenuItem value="Miss">Miss</MenuItem>
    </Select>
  </FormControl>
</Grid>
<Grid item xs={12} sm={4}>
              <TextField
                id="discount"
                label="Discount"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="discreason"
                label="Disc Reason"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="scharge"
                label="S. Charge"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="paidamount"
                label="PaidAmount"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
             
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="balance"
                label="Balance"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
             
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="note"
                label="Note"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
          </Grid>
        

          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary">NEW</Button>
            <Button variant="contained" color="secondary">PREV</Button>
            <Button variant="contained" >NEXT</Button>
            <Button variant="contained" color="secondary">PRINT</Button>
            <Button variant="contained" color="primary">SAVE</Button>
          </Box>
      </Paper>
    </Container>
     <ToastContainer />
    </div>
    </>
  );
};

export default  Patient;
