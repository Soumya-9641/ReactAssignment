import {useState,useContext} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
 import {useNavigate} from "react-router-dom"
 import {UserContext} from '../context/auth';

const Home = () => {
  //const { setIsAuthenticated } = useContext(AuthContext);
  const { setUserDetails } = useContext(UserContext);
  const navigate= useNavigate();
  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
 const [values, setValues] = useState({
      name:"",
      email:"",
      phone:""
 })
 const storedEmails = localStorage.getItem('emails');
 const storedData = localStorage.getItem('userData');
  const [emailsList, setEmailsList] = useState(storedEmails ? JSON.parse(storedEmails) : []);
  const [datalist, setDatalist] = useState(storedData ? JSON.parse(storedEmails) : []);

 const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
 }

  const handleClick=(e)=>{
    e.preventDefault();
    if (values.email.trim() === '') {
      // Show an error message or perform some action for empty email
      alert('Please enter a valid email address.');
    } else if (emailsList.includes(values.email)) {
      // Show an error message or perform some action for duplicate email
      alert('Email already exists in the list!');
    } else {
      // Add the email to the list and update localStorage
      setEmailsList((prevEmails) => {
        const newEmailsList = [...prevEmails, values.email];
        localStorage.setItem('emails', JSON.stringify(newEmailsList));
        return newEmailsList;
      });


      //storing userdata
      if (values.email.trim() === '') {
        // Show an error message or perform some action for empty email
        alert('Please enter a valid email address.');
      }  else {
        // Add the email to the list and update localStorage
        setDatalist((prevData) => {
          const newData = [...prevData, values];
          localStorage.setItem('useData', JSON.stringify(newData));
          return newData;
        });
      // Clear the form values after successful submission
      setValues({
        name: "",
        email: "",
        phone: ""
      });
      // Redirect to the desired page after successful submission
      setUserDetails(values);
      navigate("/renderdata");
    }
    console.log(emailsList)
    console.log(datalist)
  }
}

 // const marginTop = { marginTop: 5 }
  return (
    <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>User Credentials</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to acsess next page</Typography>
                </Grid>
                <form>
                    <TextField value={values.name} name='name' onChange={handleChange} fullWidth label='Name' placeholder="Enter your name" />
                    <TextField value={values.email} name='email' onChange={handleChange}  fullWidth label='Email' placeholder="Enter your email" />
                  
                    <TextField value={values.phone} name='phone' onChange={handleChange}  fullWidth label='Phone Number' placeholder="Enter your phone number" />
                  
                    <Button onClick={handleClick} type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
  )
}

export default Home