import { React, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios.js';
import EditIcon from '@mui/icons-material/Edit';

import './Profile.css';

const Profileteacher = (props) => {
  const [disab, update_disab] = useState(true);
  const [Name, update_Name] = useState(props.value.Name);
  const [subject, update_subject] = useState(props.value.subject);
  const [Email, update_Email] = useState(props.value.Email);
  const [prefered_start_time, update_prefered_start_time] = useState(props.value.prefer_start_Time);
  const [prefered_end_time, update_prefered_end_time] = useState(props.value.prefer_end_Time);
  const [gender, update_gender] = useState(props.value.gender);
  const [phno, update_phno] = useState(props.value.phno);
  const [yearsofexperience, update_yearsofexperience] = useState(props.value.yearsofexperience);
  const [Address, update_Address] = useState(props.value.Address);
  const [City, update_City] = useState(props.value.City);
  const [state, update_state] = useState(props.value.state);
  const [district, update_district] = useState(props.value.district);
  const [Country, update_Country] = useState(props.value.Country);
  const [postal_code, update_postal_code] = useState(props.value.postal_code);

  const gender_array = [
    {
      value: '1',
      label: 'male',
    },
    {
      value: '0',
      label: 'female',
    },
    {
      value: '3',
      label: 'others',
    },
  ];

  const profile_submit = async (event) => {
    event.preventDefault();

    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      process.env.REACT_APP_BACKEND_URL + 'teacher/update/info',
      {
        Name: event.target.Name.value,
        subject: event.target.subject.value,
        prefer_start_Time: event.target.prefered_start_time.value,
        prefer_end_Time: event.target.prefered_end_time.value,
        gender: event.target.gender.value,
        yearsofexperience: event.target.yearsofexperience.value,
        phno: event.target.phno.value,
        Address: event.target.Address.value,
        district: '',
        city: event.target.City.value,
        state: '',
        country: '',
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
      <button
        id="hh6"
        onClick={() => {
          update_disab(false);
        }}
      >
        <EditIcon></EditIcon>
      </button>
      <form onSubmit={profile_submit}>
        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="Name"
          type="text"
          disabled={disab}
          sx={{ mb: 3 }}
          value={Name}
          name={'Name'}
          onChange={(event) => {
            update_Name(event.target.value);
          }}
        />
        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="subject"
          type="text"
          disabled
          sx={{ mb: 3 }}
          value={subject}
          name={'subject'}
          onChange={(event) => {
            update_subject(event.target.value);
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
          label="prefered start time"
          type="text"
          disabled={disab}
          sx={{ mb: 3 }}
          value={prefered_start_time}
          name={'prefered_start_time'}
          onChange={(event) => {
            update_prefered_start_time(event.target.value);
          }}
        />
        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="prefered end time"
          type="text"
          disabled={disab}
          sx={{ mb: 3 }}
          value={prefered_end_time}
          name={'prefered_end_time'}
          onChange={(event) => {
            update_prefered_end_time(event.target.value);
          }}
        />

        <TextField
          style={{ width: '70%' }}
          id="outlined-select-currency"
          select
          label="Gender"
          disabled={disab}
          name={'gender'}
          sx={{ mb: 3 }}
          defaultValue={'' + gender}
          onChange={(event) => {
            update_gender(event.target.value);
          }}
        >
          {gender_array.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="Phone number"
          type="text"
          disabled={disab}
          sx={{ mb: 3 }}
          value={phno}
          name={'phno'}
          onChange={(event) => {
            update_phno(event.target.value);
          }}
        />

        <TextField
          style={{ width: '70%' }}
          id="outlined-required"
          label="Experience"
          type="text"
          disabled={disab}
          sx={{ mb: 3 }}
          value={yearsofexperience}
          name={'yearsofexperience'}
          onChange={(event) => {
            update_yearsofexperience(event.target.value);
          }}
        />

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

        {!disab && <input id="sub-btn" type={'submit'} disabled={disab} value={'edit'}></input>}
      </form>
    </div>
  );
};

export default Profileteacher;
