import React, { useState } from 'react'
import moment from 'moment'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import calculateDeliveryFee from './calculateDeliveryFee';
import './App.css';

const errorMsgIncorrectField = 'At least one field is empty';
const errorMsgZeroItem = 'The cart should have at least one item';

function App() {
  const [time, setTime] = useState(
    moment().format(),
  );
  const [cartValue, setCartValue] = useState('')
  const [distance, setDistance] = useState('')
  const [number, setNumber] = useState('')
  const [deliveryPrice, setDeliveryPrice] = useState(0)

  const [error, setError] = useState('')

  const handleChangeTime = (newValue: any) => {
    setTime(moment(newValue).format());
  };
  
  const handleChangeCartValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCartValue(event.target.value)
  }

  const handelChangeDistance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(event.target.value)
  }

  const handelChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value)
  }

  const handleSubmit = () => {
    if (number === '' || distance === '' || cartValue === '' || time === 'Invalid date') {
      setError(errorMsgIncorrectField);
      return;
    }
    setError('')
    const price = calculateDeliveryFee(parseFloat(cartValue), parseInt(distance), parseInt(number), time); 
    setDeliveryPrice(price);
  }

  return (
    <div className="App">
        <header>
          Delivery Fee Calculator
        </header>
        <div className="Form">
          <Stack spacing={3}>
            <TextField 
              id="outlined-basic" 
              label="Cart Value (€)" 
              variant="outlined" 
              value={cartValue} 
              onChange={handleChangeCartValue}
            />
            <TextField 
              id="outlined-basic" 
              label="Delivery Distance (m)" 
              variant="outlined"
              value={distance} 
              onChange={handelChangeDistance}
            />
            <TextField
              id="outlined-basic" 
              label="Number of Items" 
              variant="outlined"
              value={number}
              helperText={number === '0' && errorMsgZeroItem}
              error={number === '0'}
              onChange={handelChangeNumber}
            />

            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                label="Time"
                value={time}
                onChange={handleChangeTime}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button 
              variant="contained" 
              onClick={handleSubmit}
            >
              Calculate Delivery Price
            </Button>
            {
              error === ''
                ? <div>Delivery Fee {(deliveryPrice / 100).toFixed(2)} €</div>
                : <div>{error}</div>
            }
          </Stack>
        </div>
    </div>
  );
}

export default App;
