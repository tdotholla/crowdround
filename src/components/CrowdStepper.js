import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, FormControl, InputLabel, MenuItem, Select, Input, TextField, FormControlLabel, FormHelperText } from '@material-ui/core'
// import { updateForms } from './../../src/store/forms'
import {Form, Field} from 'react-final-form'
import {INIT_APP, UPDATE_FORMS_ASPECT} from './../actions'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function getSteps() {
  return ['Category', 'Information', 'Quantify', 'Confirm'];
}

const CrowdStepper = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const steps = getSteps();
  const formValues = useSelector(state => state.forms.values)
  const [activeStep, setActiveStep] = useState(0);

  function handleNext(event) {
    dispatch({
      type: UPDATE_FORMS_ASPECT,
      aspect: "values",
      payload: {
        ...formValues,
        [event.target.name]: event.target.value
      }
    })
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }
  function handleBack(event) {
    // dispatch(event => ({
   //   type: UPDATE_FORMS_ASPECT,
    //   aspect: "values",
    //   payload: {
    //     ...formValues,
    //     [event.target.name]: event.target.value
    //   }
    // }))
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }
  const handleChange = event => {
    event.preventDefault();
    dispatch({
      type: UPDATE_FORMS_ASPECT,
        aspect: "values",
        payload: {
          ...formValues,
          [event.target.name]: event.target.value
        }
      })
  }
  function handleSubmit(event) {
    dispatch({
      type: "SUBMIT FORMDATA TO DB"
    })
  }
  function handleReset() {
    setActiveStep(0);
  }
  // const validate = (values) => {
  //   // console.log(values)
  //   // let errors = {};
  //   // if (!values.category || !values.name) {
  //   //   errors.category = "REQUIRED!"
  //   // } 
  //   // if (Object.error.keys.length ){
  //   //   return error
  //   // }
  //   return errors 
  // }
  return (
    <div className={classes.root}>
      <Form
        initialValues={formValues}
        // validate={validate}
        onSubmit={handleSubmit}
        render={({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {
                (() => {
                  switch (index) {
                  case 0:
                    return (
                    <Grid item>
                      {/* <Typography variant="h5" align="center">Which category would you fit into?</Typography> */}
                      <Field 
                      name="category"
                      label="Select a Category:"
                      required
                      render={
                        ({input: {name,value, onChange, ...restInput},
                          meta, label, ...rest
                        }) => {
                          const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;
                          return (
                          <FormControl fullWidth error={showError}>
                            <InputLabel htmlFor={name}>{label}</InputLabel>
                            <Select
                            {...rest}
                             name={name}
                             onChange={handleChange}
                             value={value}
                             inputProps={restInput}
                             />
                             {showError && 
                            <FormHelperText>{meta.error || meta.submitError}</FormHelperText>
                            }
                          </FormControl>
                        )}
                      }
                      >
                        <MenuItem value={'Business Owner'}>Business Owner</MenuItem>
                        <MenuItem value={'Investor'}>Investor</MenuItem>
                        <MenuItem value={'Business Mentor'}>Business Mentor</MenuItem>
                        </Field>
                    </Grid>
                    );
                  case 1:
                    return (
                      <div>

                      <Field 
                      name="businessName"
                      required
                      type="text"
                      label='Name of your Business'
                      fullWidth
                      render={({input: {name,value, onChange, ...restInput},
                        meta, label, ...rest
                      }) => 

                      <FormControl fullWidth >
                      <InputLabel htmlFor={name}>{label}</InputLabel>
                        <TextField 
                        {...rest}
                        name={name}
                        helperText={meta.error || meta.submitError }
                        inputProps={restInput}
                        onChange={handleChange}
                        value={value}/>

                      </FormControl>
                      }
                      />
      
                      <Field
                      label='Sales in Last 3 Months?'
                      name="sales"
                      required
                      fullWidth
                      onChange={handleChange}
                      component={TextField}
                      /> 
        </div>
                    );
                  case 2: 
                    return (
<div>
                      <Typography variant="h5">Investment Information:</Typography>

                              <TextField
                              label='How much would you need?'
                              value={values.amount}
                              margin='normal'
                              /> 
                              
                      <FormControl fullWidth>
                              <TextField
                              id="purpose-helper"
                              label='What will you use the investment for?'
                              value={values.purpose}
                              margin='normal'
                              multiline
                              
                              /> 
                              </FormControl>
                              <Typography variant="h5">What can you offer in return for investment?</Typography>
                              <FormControl fullWidth>
                                <InputLabel>Select an Incentive:</InputLabel>
                              <Select
                                value={values.return}
                                input={<Input name="return" id="return-helper" />}
                              >
                                <MenuItem value={'Money'}>Money</MenuItem>
                                <MenuItem value={'Equity'}>Equity</MenuItem>
                                <MenuItem value={'Gift'}>Gifts</MenuItem>
                                <MenuItem value={'Perks'}>Perks</MenuItem>
                              </Select>
                              </FormControl>
                              </div>
                    );
                  case 3: 
                    return (
                      <Typography variant="h5">Please Confirm:</Typography>

                    );
                  default:
                    return 'Unknown Step';
                }
              })()
              }
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
</form>
)} />
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant="h3">All steps completed!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Go to the Marketplace
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default CrowdStepper


