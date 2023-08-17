import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./connect.css";
import { FaCode } from 'react-icons/fa';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00DBDB',
    },
    secondary: {
      main: '#00DBDB',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&.Mui-focused  .MuiOutlinedInput-notchedOutline': {
          borderColor: '#00DBDB',
        },
      },
    },
  },
});

const Connect = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateEmail(form.current.user_email.value)) {

      emailjs.sendForm('service_j5xay59', 'template_2go77aq', form.current, 'Ef0mNcdOui0eM0-gj')
        .then((result) => {
          console.log(result.text);
          setIsSuccess(true); 
          setEmailError(null);
          form.current.reset(); 
        })
        .catch((error) => {
          console.log(error.text);
        });
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="connectContainer" id="connect">
      <h3 className='skillsTitle'>Connect</h3>
        <div className="connectForm">
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              sx={{ input: { color: 'rgb(0, 219, 219)' }}}
              margin="normal"
              required
              fullWidth
              name="user_name"
              label="Name"
              id="user_name"
              variant="outlined"
              InputLabelProps={{ className: "textFieldLabel" }}
              color="primary"
            />
            <TextField
              sx={{ input: { color: 'rgb(0, 219, 219)' }}}
              margin="normal"
              required
              fullWidth
              name="user_email"
              label="Email"
              id="user_email"
              variant='outlined'
              InputLabelProps={{ className: "textFieldLabel" }}
              color="primary"
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
              id="Message"
              variant='outlined'
              multiline
              inputProps={{ style: { resize: "both", color: 'rgb(0, 219, 219)', overflow: 'auto', maxHeight: '120px' } }}
              InputLabelProps={{ className: "textFieldLabel" }}
              color="primary"
            />
            <Button type="submit" variant="outlined" sx={{ fontSize: 15, color: "rgb(0, 219, 219)" }}>
              Send
            </Button>
            {isSuccess && <p>Email sent successfully!</p>}
          </form>
        </div>
        <div className="code">
          <FaCode input type="submit" onClick={sendEmail} value="Send" />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Connect;