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
//                     showing and hiding via CSS transitions.







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
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, Container, Paper, Autocomplete } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { CCard, CCardHeader } from '@coreui/react';

const Patient = () => {
  const [searchCriteria, setSearchCriteria] = useState('Patient ID');
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [patientDetails, setPatientDetails] = useState(null);

  const resetForm = () => {
    setPatientDetails(null);
    setSearchValue('');
    setSuggestions([]);
  };

  const handleSearchCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
    setSearchValue('');
    setSuggestions([]);
  };

  const handleSearchValueChange = (event, value) => {
    setSearchValue(value);
    fetchSuggestions(value);
  };

  const fetchSuggestions = async (value) => {
    console.log('Fetching suggestions with value:', value);
    try {
      const response = await axios.post('http://172.16.16.10:8082/api/PatientMstr/PatientSearchMaster', {
        YearId: 2425,
        BranchId: 2,
        SrchItem: searchCriteria,
        SrchVal: value
      });

      if (response.data && response.data.patientList) {
        setSuggestions(response.data.patientList);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      toast.error('Error fetching suggestions');
    }
  };

  const normalizeTitle = (title) => {
    switch (title) {
      case 'MR':
        return 'Mr';
      case 'MRS':
        return 'Mrs';
      case 'MS':
        return 'Ms';
      case 'MISS':
        return 'Miss';
      default:
        return title;
    }
  };

  const handleSelectPatient = async (event, newValue) => {
    if (!newValue) return;
    try {
      console.log('Selected Patient:', newValue); // Log selected patient for debugging

      const response = await axios.post('http://172.16.16.10:8082/api/PatientMstr/PatientDetailsMaster', {
        YearId: 2425,
        BranchId: 2,
        PatCode: newValue.Patient_Code
      });

      console.log('Response from fetchPatientDetails:', response); // Log API response for debugging

      if (response.data && response.data.patDetails) {
        const patientDetailsWithNormalizedTitle = {
          ...response.data.patDetails,
          Patient_Title: normalizeTitle(response.data.patDetails.Patient_Title),
        };

        console.log('Patient Details:', patientDetailsWithNormalizedTitle); // Log patient details received
        setPatientDetails(patientDetailsWithNormalizedTitle); // Update patient details with full details
        console.log('Updated Patient Details State:', patientDetailsWithNormalizedTitle); // Log updated state
      } else {
        toast.error('Patient details not found');
      }
    } catch (error) {
      console.error('Error fetching patient details:', error); // Log the error to console
      toast.error('Error fetching patient details');
    }
  };

  const renderOption = (props, option) => {
    const { Patient_Name, Patient_Email, Patient_Phno, Patient_Code } = option;
    const highlight = searchValue.toLowerCase();
  
    // Function to render highlighted text
    const renderHighlightedText = (text, isHighlighted) => {
      if (!isHighlighted) {
        return text;
      }
  
      const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
      return (
        <span>
          {parts.map((part, index) =>
            part.toLowerCase() === highlight ? (
              <span key={index} style={{ fontWeight: 'bold', backgroundColor: '#a6e88d' }}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </span>
      );
    };
  

   
    return (
      <li key={option.Patient_Code} {...props}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div>{renderHighlightedText(Patient_Name || '', searchCriteria === 'Name')}</div>
          <div>{renderHighlightedText(Patient_Email || '', searchCriteria === 'Email')}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{renderHighlightedText(Patient_Phno || '', searchCriteria === 'Phone')}</span>
            <span>{renderHighlightedText(Patient_Code || '', searchCriteria === 'Patient ID')}</span>
          </div>
        </div>
      </li>
    );
  };
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong style={{ fontSize: '2rem', color: '#523885', fontWeight: 'bold' }}>PATIENT REGISTRATION</strong>
        </CCardHeader>
        <div style={{ minHeight: '100vh', padding: '20px' }}>
          <Container component="main" maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth variant="outlined" sx={{ height: '40px', marginBottom: '25px' }}>
                  <InputLabel sx={{ fontSize: '1rem', top: '-2px' }}>Search By</InputLabel>
                  <Select value={searchCriteria} onChange={handleSearchCriteriaChange} label="Search By">
                    <MenuItem value="Patient ID">Patient ID</MenuItem>
                    <MenuItem value="Name">Name</MenuItem>
                    <MenuItem value="Email">Email</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8}>
            

                <Autocomplete
                  freeSolo
                  options={suggestions}
                  getOptionLabel={(option) => `${option.Patient_Name || ''}, ${option.Patient_Email || ''}, ${option.Patient_Phno || ''}, ${option.Patient_Code || ''}`}
                  onInputChange={handleSearchValueChange}
                  onChange={handleSelectPatient}
                  onClose={resetForm}
                  renderOption={renderOption}
                  renderInput={(params) => (
                    <TextField {...params} label={searchCriteria} variant="outlined" size="small" fullWidth />
                  )}
                />
              </Grid>
            </Grid>
            {patientDetails && (
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
                    value={patientDetails.Patient_Code}
                    onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Code: e.target.value })}
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
              {/* <Button variant="contained" color="primary"
              style={{
               
                color: 'white', 
                fontWeight: 'bold', 
                padding: '10px 10px', 
                borderRadius: '4px', 
                cursor: 'pointer',
                marginBottom:'10px' 
              }}>
                Search
              </Button> */}
              </Grid>
               
               
                <Grid item xs={12} sm={2}>
                  <FormControl fullWidth variant="outlined" sx={{ width: '100%', height: '100%' }}>
                    <InputLabel sx={{ fontSize: '0.9rem', color: 'rgba(0, 0, 0, 0.6)', marginTop: '-3px' }}>Prefix</InputLabel>
                    <Select
                      name="prefix"
                      label="Prefix"
                      value={patientDetails.Patient_Title}
                      onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Title: e.target.value })}
                      sx={{ width: '100%', height: '75%' }}
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
                    value={patientDetails.Patient_Name}
                    onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Name: e.target.value })}
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    id="address"
                    label="Address"
                    variant="outlined"
                    value={patientDetails.Patient_Address}
                    onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Address: e.target.value })}
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid> */}
              
                  <Grid item xs={12} sm={1}>
                    <Typography
                      style={{
                        color: 'rgba(0, 0, 0, 0.6)',
                        marginBottom: '10px',
                        fontSize: '14px',
                        width: '100%',
                        marginTop: '8px'
                      }}
                    >
                      Age:
                    </Typography>
                  </Grid>
                  <Grid item container xs={12} sm={7} spacing={1}>
                    <Grid item xs={3}>
                      <TextField
                        id="dd"
                        label="Day"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={patientDetails.Patient_Agedd}
                        onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Agedd: e.target.value })}
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
                        value={patientDetails.Patient_Agemm}
                        onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Agemm: e.target.value })}
                        InputLabelProps={{ style: { fontSize: '14px' } }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="yyyy"
                        label="Year"
                        variant="outlined"
                        size="small"
                        value={patientDetails.Patient_Ageyy}
                        onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Ageyy: e.target.value })}
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
                        label="Gender"
                        value={patientDetails.Patient_Ismale}
                        onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Ismale: e.target.value })}
                      >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
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
                    value={patientDetails.Patient_Dob ? patientDetails.Patient_Dob.split('T')[0] : ''}
                    onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Dob: e.target.value })}
                    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                  id="phone1"
                  label="Phone1"
                  variant="outlined"
                  size="small"
                  value={patientDetails.Patient_Phno}
                  onChange={(e)=>setPatientDetails({...patientDetails, Patient_Phno: e.target.value})}
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
                  value={patientDetails.Patient_mobile}
                  onChange={(e)=>setPatientDetails({...patientDetails, Patient_mobile: e.target.value})}
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
                  value={patientDetails.Patient_Email}
                  onChange={(e)=>setPatientDetails({...patientDetails, Patient_Email: e.target.value})}
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  size="small"
                  value={patientDetails.Patient_Address}
                  onChange={(e)=>setPatientDetails({...patientDetails, Patient_Address: e.target.value})}
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                />
              </Grid>
              
              </Grid>
            )}
          </Container>
          <ToastContainer />
        </div>
      </CCard>
    </>
  );
};

export default Patient;



