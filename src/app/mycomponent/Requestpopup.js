import { React, useState } from 'react';
import './Requestpopup.css';
import axios from 'axios.js';

import TextField from '@mui/material/TextField';

const Requestpopup = (props) => {
  const price = [350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900];

  const create_classroom = async () => {
    if (newlines == '') {
      window.alert('enter a valid class name');
    } else {
      const accessToken = window.localStorage.getItem('token');

      const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      };

      const result2 = await axios.post(
        process.env.REACT_APP_BACKEND_URL + 'student/info',
        {},
        {
          headers: headers,
        }
      );

      const result = await axios.post(
        process.env.REACT_APP_BACKEND_URL + 'student/createclassroom',
        {
          teacher_id: props.req_value.teacher_id,
          subject: newlines,
          credit: price[result2.data.result.Standard - 1],
          status: 0,
        },
        {
          headers: headers,
        }
      );

      props.change_req();

      window.location.reload();
    }
  };

  const [newlines, lineupdated] = useState('');

  const [empty, changeempty] = useState(true);

  const valuechanged = (event) => {
    lineupdated(event.target.value);
    if (event.target.value.trim() == '') {
      changeempty(true);
    } else {
      changeempty(false);
    }
  };
  console.log(newlines);
  return (
    <div className="outer-popup-div">
      <div
        className="outer-popup"
        onClick={() => {
          props.change_req();
        }}
      ></div>
      <div className="inner-popup">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
        <div className="inner-popup-3">
          <h1>REQUEST A CLASS </h1>

          <TextField
            fullWidth
            disabled
            id="filled-disabled"
            variant="filled"
            label="Name"
            defaultValue={props.req_value.teacher_name}
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            id="outlined-required"
            label="Class Name"
            type="text"
            placeholder="enter the subject"
            onChange={valuechanged}
            value={newlines}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            disabled
            id="filled-disabled"
            variant="filled"
            label="YEAR OF EXPERIENCE"
            defaultValue={props.req_value.exp}
            sx={{ mb: 3 }}
          />

          <buton id="req-button2" onClick={create_classroom}>
            start a classroom
          </buton>
        </div>
      </div>
    </div>
  );
};

export default Requestpopup;
