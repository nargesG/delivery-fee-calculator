import { useState } from 'react'
import moment from 'moment'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import calculateDeliveryFee from './calculateDeliveryFee';
import './App.css';

function App() {
  const [time, setTime] = useState(
    moment().format(),
  );
  const [cartValue, setCartValue] = useState('0')
  const [distance, setDistance] = useState('0')
  const [number, setNumber] = useState('0')
  const [deliveryPrice, setDeliveryPrice] = useState(0)

  const handleChangeTime = (newValue) => {
    setTime(moment(newValue).format());
  };
  
  const handleChangeCartValue = (event) => {
    setCartValue(event.target.value)
  }

  const handelChangeDistance = (event) => {
    setDistance(event.target.value)
  }
  const handelChangeNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleSubmit = () => {
    const price = calculateDeliveryFee(parseFloat(cartValue), parseInt(distance), parseInt(number), time); 
    setDeliveryPrice(price);
  }

  return (
    <div className="App">
        <header>
          Delivery Fee Calculator
        </header>
        <div style={{marginTop: 20, width: 300, display:'inline-block'}}>
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
              onChange={handelChangeDistance}/>

            <TextField
              id="outlined-basic" 
              label="Number of Items" 
              variant="outlined"
              value={number}
              onChange={handelChangeNumber}/>

            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                label="Time"
                value={time}
                onChange={handleChangeTime}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button variant="contained" onClick={handleSubmit}>Calculate Delivery Price</Button>
            <div>Delivery Fee {(deliveryPrice / 100).toFixed(2)} €</div>
          </Stack>
        </div>
    </div>
  );
}

export default App;
