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
import React from 'react';
import { TextField, Grid, FormControlLabel, Checkbox, Button, MenuItem, Select, InputLabel, Radio, Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { CCard, CCardHeader, CCardBody } from '@coreui/react';

const Patient = () => {
    const patients = [
        { slNo: 1, labNo: 5749, name: "KRISHNA A S", age: 22, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "N Mohanan BSc MBBS MS", tests: ["COMPLETE HAEMOGRAM +", "HBsAg", "HIV-DUO (Ivth GENERATION T", "Anti HCV", "HAEMOGLOBIN (HB)"], specimen: "EDTA WHOLE ...", total: 1860, pendingAmt: 0 },
        { slNo: 2, labNo: 5748, name: "RABESHNA", age: 36, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "Vineetha S MBBS DGO FMAS", tests: ["HAEMOGLOBIN (HB)", "ANTI MULLARIAN HORMONE", "THYROID STIMULATING HORM..."], specimen: "SERUM", total: 1510, pendingAmt: 0 },
        { slNo: 3, labNo: 5747, name: "JAYAN N P", age: 57, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE"], specimen: "SERUM", total: 140, pendingAmt: 0 },
        { slNo: 4, labNo: 5746, name: "JOHN", age: 30, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE", "GLUCOSE PLASMA FASTING"], specimen: "PLASMA(fasti...", total: 1500, pendingAmt: 0 }
      ];
      
    
  return (
    // <Container component="main" maxWidth="lg">
      <CCard className="mb-4">
        <CCardHeader>
          <Grid container spacing={2} alignItems="center">
            {/* <Grid item xs={12} sm={2}>
              <h3 style={{ fontSize: '20px', color: '#523885', fontWeight: 'bold', margin: '0' }}>Patient Views</h3>
            </Grid> */}
            <Grid item xs={12} sm={12}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Result Issued"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="On Processing"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Time Over"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Cancelled Invoice"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Half Verified"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Time Over Reminder"
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" style={{ marginTop: '5px' }}>
            <Grid item xs={12} sm={1}>
              <FormControlLabel
                control={<Radio />}
                label="Bill View"
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <FormControlLabel
                control={<Radio />}
                label="Result View"
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <FormControlLabel
                control={<Radio />}
                label="Track View"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel>Sort By</InputLabel>
              <Select
                label="Sort By"
                variant="outlined"
                size="small"
                defaultValue=""
                fullWidth
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="amount">Amount</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                variant="outlined"
                size="small"
                defaultValue=""
                fullWidth
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="unpaid">Unpaid</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel>Type</InputLabel>
              <Select
                label="Type"
                variant="outlined"
                size="small"
                defaultValue=""
                fullWidth
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="urgent">Urgent</MenuItem>
                <MenuItem value="normal">Normal</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={1}>
              <TextField
                id="start-date"
                label="Start Date"
                type="date"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <TextField
                id="end-date"
                label="End Date"
                type="date"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <Button variant="contained" color="primary" fullWidth>Refresh</Button>
            </Grid>
          </Grid>
        </CCardHeader>
        <CCardBody>
          <div style={{ minHeight: '100vh', padding: '20px' }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={2}>
                <TextField
                  id="area"
                  label="Area"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="corporate"
                  label="Corporate"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="phone"
                  label="Phone No"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="referral"
                  label="Referral"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={2}>
                <TextField
                  id="sampleid"
                  label="Sample Id"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="department"
                  label="Department"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="ipop"
                  label="IPOP"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="specimen"
                  label="Specimen"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={2}>
                <TextField
                  id="labno"
                  label="Lab No"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="payment"
                  label="Payment"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="tests"
                  label="Tests"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
            </Grid>
            <table className='table'>
               <thead>
                <tr>
                    <th>Sl No</th>
                    <th>Lab No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Collected At</th>
                    <th>Reference</th>
                    <th>Tests</th>
                    <th>Specimen</th>
                    <th>Total</th>
                    <th>Pend Amt</th>
                </tr>
               </thead>
               <tbody>
                {patients.map((patient,index) => (
                        <tr key={index}>
                            <td>{patient.slNo}</td>
                            <td>{patient.labNo}</td>
                            <td>{patient.name} ({patient.age} Years {patient.gender})</td>
                            <td>{patient.date}</td>
                            <td>{patient.collectedAt}</td>
                            <td>{patient.reference}</td>
                     <td>{patient.tests.join(',')}</td>
                     <td>{patient.specimen}</td>
                            <td>{patient.total}</td>
                            <td>{patient.pendingAmt}</td>
                        </tr>
                ))}
               </tbody>
            </table>









             
            <ToastContainer />
          </div>
        </CCardBody>
      </CCard>
    // </Container>
  );
};

export default Patient;
