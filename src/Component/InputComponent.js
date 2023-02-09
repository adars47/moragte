import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as yup from 'yup';
import moment from 'moment/moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

function InputComponent({setInterest,setPrinciple,setTime,setStartDate,setDownPayment,setAdditionalPayment}) {

  const validationSchema = yup.object({
    loan_amt: yup
      .number("Invalid Load Amount")
      .required('Loan Amount is required')
      .integer("Loan Amount is required")
      .test(
        'Is positive?', 
        'ERROR: Enter a valid loan amount', 
        (value) => value > 0
        ),
      loan_term: yup
      .number("Enter a valid loan term")
      .integer("Loan term is required")
      .required('loan term is required')
      .test(
        'Is positive?', 
        'ERROR: Enter a valid loan term', 
        (value) => value > 0
        ),
      interest_rate: yup
      .number('Enter a valid interest rate')
      .integer("Interest rate is required")
      .test(
        'Is positive?', 
        'ERROR: Enter a valid interest rate', 
        (value) => value > 0
        )
      .required('Interest rate is required'),
      downpayment: yup
      .number('Enter a valid downpayment')
      .test(
        'Is positive?', 
        'ERROR: Enter a valid downpayment', 
        (value) => value >= 0
        ),
        additionalPayment: yup
        .number('Enter a valid additional payment')
        .test(
          'Is positive?',
          'ERROR: Enter a valid additional payment', 
          (value) => value >= 0
          ),
  });

  const formik = useFormik({
    initialValues: {
      loan_amt: 20000,
      loan_term: 15,
      interest_rate: 6,
      downpayment: 4000,
      additionalPayment: 50,
    },
    validationSchema:validationSchema,
    onSubmit: (values) => {
      setInterest(values.interest_rate)
      setPrinciple(values.loan_amt)
      setTime(values.loan_term)
      setDownPayment(values.downpayment)
      setAdditionalPayment(values.additionalPayment)
    }});

    let date = moment().format("yyyy-MM")
    
    const dateFormatter = str => {
      return date;
    };
  
    return (
      <div className="App">
        <h1>Input the details</h1>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="loan_amt"
              name="loan_amt"
              label="Loan Amount"
              value={formik.values.loan_amt}
              onChange={formik.handleChange}
              error={formik.touched.loan_amt && Boolean(formik.errors.loan_amt)}
              helperText={formik.touched.loan_amt && formik.errors.loan_amt}
            />
            
            <TextField
              fullWidth
              id="loan_term"
              name="loan_term"
              label="Loan Term"
              value={formik.values.loan_term}
              onChange={formik.handleChange}
              error={formik.touched.loan_term && Boolean(formik.errors.loan_term)}
              helperText={formik.touched.loan_term && formik.errors.loan_term}
            />

            <TextField
              fullWidth
              id="interest_rate"
              name="interest_rate"
              label="Interest Rate"
              value={formik.values.interest_rate}
              onChange={formik.handleChange}
              error={formik.touched.interest_rate && Boolean(formik.errors.interest_rate)}
              helperText={formik.touched.interest_rate && formik.errors.interest_rate}
            />
            <TextField
              fullWidth
              id="downpayment"
              name="downpayment"
              label="Down Payment"
              value={formik.values.downpayment}
              onChange={formik.handleChange}
              error={formik.touched.downpayment && Boolean(formik.errors.downpayment)}
              helperText={formik.touched.downpayment && formik.errors.downpayment}
            />

            <TextField
              fullWidth
              id="additionalPayment"
              name="additionalPayment"
              label="Additional Payment"
              value={formik.values.additionalPayment}
              onChange={formik.handleChange}
              error={formik.touched.additionalPayment && Boolean(formik.errors.additionalPayment)}
              helperText={formik.touched.additionalPayment && formik.errors.additionalPayment}
            />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="yyyy-MM"
              views={['year', 'month']}
              label="Start Date"
              onChange={(newValue)=>{
                setStartDate(newValue);
                date = newValue
              }}
              rifmFormatter = {dateFormatter}
              renderInput={(params) => <TextField {...params} helperText={null}/>}
            />
        </LocalizationProvider>

            <Button color="primary" variant="contained" fullWidth type="submit">
            Calculate
            </Button>
          </form>
    </div>
    
    );
  }
  
  export default InputComponent;
  