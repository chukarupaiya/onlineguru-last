import { React, useEffect, useState } from 'react';

import axios from 'axios.js';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import './Profile.css';

const Profilestudent = (props) => {
  const currencies = [
    {
      value: '1',
      label: 'CBSE',
    },
    {
      value: '2',
      label: 'ICSE',
    },
    {
      value: '3',
      label: 'IGCSE',
    },
    {
      value: '4',
      label: 'IB',
    },
  ];

  const [disab, update_disab] = useState(true);
  const [FirstName, update_FirstName] = useState(props.value.FirstName);
  const [LastName, update_LastName] = useState(props.value.LastName);
  const [Email, update_Email] = useState(props.value.Email);
  const [Standard, update_Standard] = useState(props.value.Standard);
  const [Board, update_Board] = useState(props.value.Board);
  const [Phno, update_Phno] = useState(props.value.phno);
  const [Address, update_Address] = useState(props.value.Address);
  const [City, update_City] = useState(props.value.city);
  const [State, update_State] = useState('');
  const [District, update_District] = useState('');
  const [Country, update_Country] = useState('');
  const [Postal_code, update_Postal_code] = useState('');

  const profile_submit = async (event) => {
    event.preventDefault();

    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      process.env.REACT_APP_BACKEND_URL + 'student/update/info',
      {
        FirstName: event.target.FirstName.value,
        LastName: event.target.LastName.value,
        Standard: event.target.Standard.value,
        Board: event.target.Board.value,
        phno: event.target.Phno.value,
        Address: event.target.Address.value,
        district: '',
        city: event.target.City.value,
        country: '',
        state: '',
        postal_code: '9',
      },
      {
        headers: headers,
      }
    );

    window.location.reload();
  };

  return (
    <div className="profile-outer">
      {disab && (
        <button
          id="hh6"
          onClick={() => {
            update_disab(false);
          }}
        >
          <EditIcon></EditIcon>
        </button>
      )}
      <form onSubmit={profile_submit}>
        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="First Name"
          type="text"
          disabled={disab}
          sx={{ mb: 3 }}
          value={FirstName}
          name={'FirstName'}
          onChange={(event) => {
            update_FirstName(event.target.value);
          }}
        />

        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="Last Name"
          type="text"
          disabled={disab}
          sx={{ mb: 3 }}
          value={LastName}
          name={'LastName'}
          onChange={(event) => {
            update_LastName(event.target.value);
          }}
        />

        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="Email"
          type="text"
          disabled
          sx={{ mb: 3 }}
          value={Email}
          name={'Email'}
          onChange={(event) => {
            update_Email(event.target.value);
          }}
        />

        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="Standard"
          type="text"
          sx={{ mb: 3 }}
          disabled={disab}
          value={Standard}
          name={'Standard'}
          onChange={(event) => {
            update_Standard(event.target.value);
          }}
        />

        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="Phone"
          type="text"
          sx={{ mb: 3 }}
          disabled={disab}
          value={Phno}
          name={'Phno'}
          onChange={(event) => {
            update_Phno(event.target.value);
          }}
        />

        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="City"
          type="text"
          disabled={disab}
          sx={{ mb: 3 }}
          value={City}
          name={'City'}
          onChange={(event) => {
            update_City(event.target.value);
          }}
        />

        <TextField
          id="outlined-select-currency"
          select
          sx={{ width: '70%', mb: 3 }}
          label="Board"
          margin="dense"
          value={Board}
          disabled={disab}
          name={'Board'}
          onChange={(event) => {
            // console.log(event.target.value);
            update_Board(event.target.value);
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="Address"
          type="text"
          disabled={disab}
          sx={{ mb: 3 }}
          value={Address}
          name={'Address'}
          onChange={(event) => {
            update_Address(event.target.value);
          }}
        />

        {!disab && <input id="sub-btn" type={'submit'} disabled={disab} value={'edit'}></input>}
      </form>
    </div>
  );
};

export default Profilestudent;
