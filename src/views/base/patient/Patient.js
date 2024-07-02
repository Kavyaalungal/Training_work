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
      const [isEditMode, setIsEditMode] = useState(false); // Track edit mode
      const [errors, setErrors] = useState({});

         useEffect(() => {
          console.log('Component mounted or updated.');
         }, []);

         const resetForm = () => {
           console.log('Resetting form.');
           setPatientDetails(null);
           setSearchValue('');
           setSuggestions([]);
           setIsEditMode(false);
           setErrors({});
        };

      const handleSearchCriteriaChange = (event) => {
        setSearchCriteria(event.target.value);
        console.log('Search criteria changed:', newCriteria)
       setSearchValue('');
        setSuggestions([]);
      };

     const handleSearchValueChange = (event, value) => {
     console.log('Search value changed:', value);
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
            console.log('Updated Patient Details State:', patientDetailsWithNormalizedTitle);
            setIsEditMode(false);  // Log updated state

            // Update searchValue to show the selected search item value in the TextField
            let selectedValue;
            switch (searchCriteria) {
             case 'Patient ID':
                selectedValue = newValue.Patient_Code;
                break;
              case 'Name':
                selectedValue = newValue.Patient_Name;
                break;
              case 'Email':
                selectedValue = newValue.Patient_Email;
                break;
              case 'Phone':
                selectedValue = newValue.Patient_Phno;
                break;
              default:
                selectedValue = '';
            }
            setSearchValue(selectedValue);
          } else {
            toast.error('Patient details not found');
          }
        } catch (error) {
          console.error('Error fetching patient details:', error); // Log the error to console
          toast.error('Error fetching patient details');
        }
      };

  const calculateAge = (dob) => {
   if (!dob) return;

    const today = new Date();
    const birthDate = new Date(dob);
  
    // Calculate age
    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - birthDate.getMonth();
    let ageDay = today.getDate() - birthDate.getDate();

    // Adjust negative ageMonth
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth += 12;
    }

    // Adjust negative ageDay
    if (ageDay < 0) {
      const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDay = tempDate.getDate() + ageDay;
      ageMonth--;
    }

    // Update state
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
     Patient_Ageyy: ageYear.toString(),
      Patient_Agemm: ageMonth.toString(),
      Patient_Agedd: ageDay.toString(),
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!patientDetails.Patient_Name) {
    newErrors.Patient_Name = 'Name is required';
      toast.warn('Please fill the required fields')
    }
   if(patientDetails.Patient_Phno && !/^\d{10}$/.test(patientDetails.Patient_Phno)){
    newErrors.Patient_Phno = 'please enter a valid phone number';
    toast.error('Please enter a valid phone number')
    }
    if(patientDetails.Patient_mobile && !/^\d{10}$/.test(patientDetails.Patient_mobile)){
     newErrors.Patient_mobile = 'Invalid mobile number';
      toast.error('please enter a valid mobile  number')
    }
    if (patientDetails.Patient_Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientDetails.Patient_Email)) {
      newErrors.Patient_Email = 'Invalid email address';
      toast.error('please enter a valid email address')
    }
    if (!patientDetails.Patient_Ageyy || !patientDetails.Patient_Agemm || !patientDetails.Patient_Agedd) {
     newErrors.Patient_Age = 'Age is required';
     toast.warn('Please fill in the age fields');
   }
   if (!patientDetails.Patient_Ismale) {
     newErrors.Patient_Ismale = 'Gender is required';
     toast.warn('Please select the gender');
   }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   const handleTitleChange = (e) => {
   const newTitle = e.target.value;
   let gender = '';

    switch (newTitle) {
      case 'Mr':
        gender = 'Male';
       break;
      case 'Mrs':
      case 'Ms':
      case 'Miss':
        gender = 'Female';
        break;
      default:
        gender = '';
    }

   setPatientDetails((prevDetails) => ({
      ...prevDetails,
     Patient_Title: newTitle,
      Patient_Ismale: gender,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      Patient_Ismale: '',
    }));
  };




  const handleSaveOrUpdate = async () => {
   if (!validate()) {
      return;
    }
    try {
      const editFlag = isEditMode ? 1 : 0;
      const response = await axios.post('http://172.16.16.10:8082/api/PatientSaveUpdate', {
        ...patientDetails,
        Patient_CpyId: 2,
        Patient_YrId: 2425,
        EditFlag: editFlag,
      });

      if (response.data.status && response.data.status.length > 0 && response.data.status[0].status === 'Success') {
        toast.success('Patient details saved successfully');
        if (!isEditMode) {
          resetForm();
        } else {
          setIsEditMode(false);
        }
      } else {
        toast.error('Failed to save/update patient details');
      }
    } catch (error) {
      console.error('Error saving/updating patient details:', error);
      toast.error('Error saving/updating patient details');
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

          const parts = text.split(new RegExp(`(${highlight})`,'gi'));
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
             {/* <table>
               <tr>
                 <td>{renderHighlightedText(Patient_Name || '',searchCriteria === 'Name')}</td>
               </tr>
               <tr>
                 <td>{renderHighlightedText(Patient_Email || '', searchCriteria === 'Email')}</td>
               </tr>
               <tr>
                 <td>{renderHighlightedText(Patient_Phno || '', searchCriteria === 'Phone')}</td>
                 <td>{renderHighlightedText(Patient_Code || '', searchCriteria === 'Patient ID')}</td>
               </tr>
               </table> */}
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
                    <Select
                     value={searchCriteria}
                      onChange={handleSearchCriteriaChange}
                      label="Search By"
                      sx={{ height: '40px' }} 
                    >
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
                     <TextField
                        {...params}
                       label={searchCriteria}
                       variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '14px' } }} 
                        InputProps={{
                          ...params.InputProps,
                           style: { marginBottom:'20px' }, 
                        }}
                        sx={{
                          '& .MuiAutocomplete-inputRoot': {
                            paddingRight: '0px', 
                          },
                        }}
                     />
                   )}
                  inputValue={searchValue}
                  />
                </Grid>
                </Grid>
                {patientDetails && (
                  <Grid container spacing={2}>
         <Grid item xs={12} sm={3}>
                      <TextField
                        id="patientid"
                      label="Patient ID"
                        variant="outlined"
                       value={patientDetails.Patient_Code}
                        onChange={(e) => setPatientDetails({ ...patientDetails, Patient_Code: e.target.value })}
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '14px' } }}
                        disabled={!isEditMode} 
                      />
                    </Grid>
     <Grid item xs={12} sm={2}>                    
                   <FormControl fullWidth variant="outlined" sx={{ width: '100%', height: '100%' }}>
                        <InputLabel sx={{ fontSize: '0.9rem', color: 'rgba(0, 0, 0, 0.6)', marginTop: '-3px' }}>Prefix</InputLabel>
                        <Select
                          name="prefix"
                          label="Prefix"
                         value={patientDetails.Patient_Title}
                         onChange={handleTitleChange}
                         sx={{ width: '100%', height: '75%' }}
                          disabled={!isEditMode} 
                        >
                          <MenuItem value=""><em>None</em></MenuItem>
                          <MenuItem value="Mr">Mr</MenuItem>
                          <MenuItem value="Mrs">Mrs</MenuItem>
                          <MenuItem value="Ms">Ms</MenuItem>
                         <MenuItem value="Miss">Miss</MenuItem>
                        </Select>
                      </FormControl>
                   </Grid>
                    <Grid item xs={12} sm={7}>
                     <TextField
                        id="name"
                        label="Name"
                        variant="outlined"                       
                        value={patientDetails.Patient_Name}
                        onChange={(e) => {
                         setPatientDetails({ ...patientDetails, Patient_Name: e.target.value });
                         setErrors((prevErrors) => ({ ...prevErrors, Patient_Name: '' }));
                       }}
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '14px' } }}
                        disabled={!isEditMode} 
                        error={!!errors.Patient_Name}
                        // helperText={errors.Patient_Name}
                      />
                    </Grid>
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
                          onChange={(e) => {
                           setPatientDetails({ ...patientDetails, Patient_Agedd: e.target.value });
                           setErrors((prevErrors) => ({ ...prevErrors, Patient_Age: '' }));
                         }}
                            InputLabelProps={{ style: { fontSize: '14px' } }}
                            disabled={!isEditMode} 
                            error={!!errors.Patient_Age}
                            helperText={errors.Patient_Age}
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
                           onChange={(e) => {
                             setPatientDetails({ ...patientDetails, Patient_Agemm: e.target.value });
                             setErrors((prevErrors) => ({ ...prevErrors, Patient_Age: '' }));
                           }}
                            InputLabelProps={{ style: { fontSize: '14px' } }}
                            disabled={!isEditMode} 
                            error={!!errors.Patient_Age}
                            helperText={errors.Patient_Age}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="yyyy"
                            label="Year"
                            variant="outlined"
                            size="small"
                            value={patientDetails.Patient_Ageyy}
                            onChange={(e) => {
                             setPatientDetails({ ...patientDetails, Patient_Ageyy: e.target.value });
                             setErrors((prevErrors) => ({ ...prevErrors, Patient_Age: '' }));
                           }}
                            fullWidth
                            InputLabelProps={{ style: { fontSize: '14px' } }}
                            disabled={!isEditMode} 
                            error={!!errors.Patient_Age}
                            helperText={errors.Patient_Age}
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
                            InputProps={{
                              readOnly: true,
                            }}
                           //  onChange={(e) => {
                           //   setPatientDetails({ ...patientDetails, Patient_Ismale: e.target.value });
                           //   setErrors((prevErrors) => ({ ...prevErrors, Patient_Ismale: '' }));
                           // }}
                            disabled={!isEditMode} 
                            error={!!errors.Patient_Ismale}
                          >
                            <MenuItem value=""><em>None</em></MenuItem>
                           <MenuItem value="Male">Male</MenuItem>
                           <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </Select>
                          {errors.Patient_Ismale && (
                       <Typography variant="caption" color="error">
                         {errors.Patient_Ismale}
                       </Typography>
                     )}
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
                      onChange={(e) => {
                     const dob = e.target.value;
                     setPatientDetails({ ...patientDetails, Patient_Dob: dob });
                       calculateAge(dob); // Update age fields
                       }}
                        InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
                      disabled={!isEditMode} 
                     />
              </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      id="phone1"
                      label="Phone1"
                      variant="outlined"
                     size="small"
                      value={patientDetails.Patient_Phno}
                      onChange={(e) => {
                       setPatientDetails({ ...patientDetails, Patient_Phno: e.target.value });
                       setErrors((prevErrors) => ({ ...prevErrors, Patient_Phno: '' }));
                     }}
                      fullWidth
                     InputLabelProps={{ style: { fontSize: '14px' } }}
                     disabled={!isEditMode} 
                      error={!!errors.Patient_Phno}
                       helperText={errors.Patient_Phno}
                    />
                 </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      id="phone2"
                      label="Phone2"
                      variant="outlined"
                      size="small"
                      value={patientDetails.Patient_mobile}
                     onChange={(e) => {
                       setPatientDetails({ ...patientDetails, Patient_mobile: e.target.value });
                       setErrors((prevErrors) => ({ ...prevErrors, Patient_mobile: '' }));
                     }}
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '14px' } }}
                      disabled={!isEditMode} 
                      error={!!errors.Patient_mobile}
                       helperText={errors.Patient_mobile}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      size="small"
                      value={patientDetails.Patient_Email}
                      onChange={(e) => {
                       setPatientDetails({ ...patientDetails, Patient_Email: e.target.value });
                       setErrors((prevErrors) => ({ ...prevErrors, Patient_Email: '' }));
                     }}
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '14px' } }}
                      disabled={!isEditMode} 
                      error={!!errors.Patient_Email}
                      helperText={errors.Patient_Email}
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
                      disabled={!isEditMode} 
                    />
                 </Grid>
              
                 </Grid>
                )}
   <Grid container spacing={2} justifyContent="flex-end">
    <Grid item>
      {!isEditMode ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsEditMode(true)}
          sx={{ marginTop: 2 }} // Adds margin top
        >
          Edit
        </Button>
      ) : (
        <>
         <Button
           variant="contained"
            onClick={() => setIsEditMode(false)}
            sx={{ marginTop: 2, marginRight: 1 }} 
         >
           Cancel
          </Button>
         <Button
            variant="contained"
            color="primary"
            onClick={handleSaveOrUpdate}
            sx={{ marginTop: 2 }} 
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={resetForm}
            sx={{ marginTop: 2, marginLeft: 2 }} 
         >
            NEW
         </Button>
        </>
      )}
    </Grid>
  </Grid>

             </Container>
             {/* <ToastContainer/> */}
              <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
            </div>
          </CCard>
        </>
      );
    };

 export default Patient;






   