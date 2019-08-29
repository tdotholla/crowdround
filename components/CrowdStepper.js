import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, FormControl, InputLabel, MenuItem, Select, Input, TextField, FormControlLabel, FormHelperText } from '@material-ui/core'

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

const WhoStep = (params) => {
  const [values, setValues] = useState({
    type: '',
    name: 'Business Owner',
  });
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" align="center">Who category would you fit into?</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="type-helper">Category</InputLabel>
        <Select
          value={values.type}
          onChange={handleChange}
          input={<Input name="type" id="type-helper" />}
        >
          <MenuItem value={'Business Owner'}>Business Owner</MenuItem>
          <MenuItem value={'Investor'}>Investor</MenuItem>
          <MenuItem value={'Business Mentor / Coach'}>Business Mentor</MenuItem>
        </Select>
        
      </FormControl>
    </>
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
      <Typography>Business Information:</Typography>
      <FormControl fullWidth>
        <InputLabel htmlFor="name-helper">Business Name</InputLabel>
        <TextField
        id="name-helper"
        label='Name of your Business.'
        value={values.name}
        onChange={handleChange('name')}
        margin='normal'
        
        /> 
        <FormHelperText>Official Business Name</FormHelperText>
      </FormControl>

<FormControl fullWidth>
        <InputLabel htmlFor="">Revenue</InputLabel>
        <TextField
        label='What were your sales in the last 3 months?'
        value={values.sales}
        onChange={handleChange('sales')}
        margin='normal'
        /> 
        <FormHelperText>One Quarter</FormHelperText>
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
    <Typography>Business Information:</Typography>
      
        
<FormControl>
        <InputLabel htmlFor="">Business Name</InputLabel>
        <TextField
        label='How much investment would you need?'
        value={values.amount}
        onChange={handleChange('amount')}
        margin='normal'
        /> 
        <FormHelperText>Official Business Name</FormHelperText>

        </FormControl>
        
<FormControl fullWidth>
        <InputLabel htmlFor="purpose-helper">Business Name</InputLabel>
        <TextField
        id="purpose-helper"
        label='What will you use the investment for?'
        value={values.purpose}
        onChange={handleChange('purpose')}
        margin='normal'
        multiline
        
        /> 
        <FormHelperText>Purpose for Investment</FormHelperText>
        </FormControl>

        <FormControl fullWidth>
        <InputLabel htmlFor="return-helper">ROI</InputLabel>
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
        <FormHelperText>Official Business Name</FormHelperText>
        </FormControl>

    </>
  )
}
const ConfirmStep = (params) => {
  return (
    <>
    <Typography>Please Confirm:</Typography>
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
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
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
              <Typography>{getStepContent(index)}</Typography>
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
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default CrowdStepper


