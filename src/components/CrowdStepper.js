import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, FormControl, InputLabel, MenuItem, Select, Input, TextField, FormControlLabel, FormHelperText } from '@material-ui/core'
import { updateForms } from './../../src/store/forms'
import {INIT_APP} from './../actions'

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

const WhoStep = ({dispatch}) => {
  const [values, setValues] = useState({
    type: '',
    name: 'Business Owner',
  });
  
  function handleChange(event) {
    updateForms((dispatch, oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))

    // setValues(oldValues => ({
    //   ...oldValues,
    //   [event.target.name]: event.target.value,
    // }));
  }

  const classes = useStyles();
  return (
    <Grid item>
      <Typography variant="h5" align="center">Which category would you fit into?</Typography>
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel>Select a type:</InputLabel>
        <Select
          value={values.type}
          onChange={handleChange}
          input={<Input name="type" id="type-helper" />}
          displayEmpty
          name="type"
        >
          <MenuItem value={'Business Owner'}>Business Owner</MenuItem>
          <MenuItem value={'Investor'}>Investor</MenuItem>
          <MenuItem value={'Business Mentor / Coach'}>Business Mentor</MenuItem>
        </Select>  
      </FormControl>
    </Grid>
  )
}
const InfoStep = ({type}) => {
  const [values, setValues] = useState({
    name: "LemonTopia",
    sales: 6000,

  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  //name of business, purpose of investment, how much needed, what can you offer in return (select), Annual sales (or last 3 months), Value added (direct impact)
  //formulas: free cash flow (net income + non-cash expenses - capital expenditures - working capital)
  return (
    <>
      <Typography variant="h5">Business Information:</Typography>
      <FormControl fullWidth>
        <TextField
        id="name-helper"
        label='Name of your Business.'
        value={values.name}
        onChange={handleChange('name')}
        margin='normal'
        /> 
      </FormControl>

<FormControl fullWidth>
        <TextField
        label='What were your sales in the last 3 months?'
        value={values.sales}
        onChange={handleChange('sales')}
        margin='normal'
        /> 
        </FormControl>
        
    </>
  )
}
const HowStep = (params) => {
  const [values, setValues] = useState({
    amount: 500,
    purpose: 'Buy Foodtruck',
    return: 'Money, Equity, Gift',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <>
    <Typography variant="h5">Investment Information:</Typography>
      
        
<FormControl>
        <TextField
        label='How much would you need?'
        value={values.amount}
        onChange={handleChange('amount')}
        margin='normal'
        /> 

        </FormControl>
        
<FormControl fullWidth>
        <TextField
        id="purpose-helper"
        label='What will you use the investment for?'
        value={values.purpose}
        onChange={handleChange('purpose')}
        margin='normal'
        multiline
        
        /> 
        </FormControl>
        <Typography variant="h5">What can you offer in return for investment?</Typography>
        <FormControl fullWidth>
          <InputLabel>Select an Incentive:</InputLabel>
        <Select
          value={values.return}
          onChange={handleChange}
          input={<Input name="type" id="return-helper" />}
        >
          <MenuItem value={'Money'}>Money</MenuItem>
          <MenuItem value={'Equity'}>Equity</MenuItem>
          <MenuItem value={'Gift'}>Gifts</MenuItem>
          <MenuItem value={'Perks'}>Perks</MenuItem>
        </Select>
        </FormControl>

    </>
  )
}
const ConfirmStep = (params) => {
  return (
    <>
    <Typography variant="h5">Please Confirm:</Typography>
    </>
  )
}


function getSteps() {
  return ['Category', 'Information', 'Quantify', 'Confirm'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <WhoStep />;
    case 1:
      return <InfoStep type="Business Owner"/>;
    case 2:
      return <HowStep />;
    case 3:
      return <ConfirmStep />;
    default:
      return 'Unknown step';
  }
}

const CrowdStepper = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const steps = getSteps();
  const formValues = useSelector(state => state.forms.values)
  const [activeStep, setActiveStep] = useState(0);

  function handleNext(values) {
    updateForms((dispatch, formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }))
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack(values) {
    updateForms((dispatch, formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }))
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
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
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant="h3">All steps completed!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Close
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default CrowdStepper


