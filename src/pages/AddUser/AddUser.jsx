import {useState} from "react";
import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import { HiUserAdd } from "react-icons/hi";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { PhotoCamera } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
const AddUser = () => {
const [error,setError] = useState(false);
const [status, setStatus] = useState("");

const handleChange = (event) => {
  setStatus(event.target.value);
};

  return (
    <Container sx={{ my: 2 }}>
      <Grid container>
       <Grid item xs={12} md={12}>
       <Box >
        <Paper  elevation={16}  >
        <Typography  variant="h5" color="primary" sx={{  color: '#424242', textAlign:'center',cursor:'pointer',py:3}}>     
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ml:2}}
       
        >
        <HiUserAdd/>
        </IconButton>
        Add User </Typography>
        <Box>
       <Grid container justifyContent={'center'}>
       <Grid item md={5} xs={11} mb={2} ml={2} sx={{mx:'auto'}}>
       <TextField
         fullWidth
         id="outlined-error-helper-text"
         label={error ? 'error':'First Name'}
        
         helperText={error && "Incorrect entry."}
       />
       </Grid>
       <Grid item md={5} xs={11} mb={2} ml={2} sx={{mx:'auto'}}> 
       <TextField
       fullWidth
       id="outlined-error-helper-text"
       label={error ? 'error':'Last Name'}
      
       helperText={error && "Incorrect entry."}
     />
       </Grid>
       <Grid item md={5} xs={11} mb={2} ml={2} sx={{mx:'auto'}}>
       <TextField
       fullWidth
       id="outlined-error-helper-text"
       label={error ? 'error':'Email'}
      
       helperText={error && "Incorrect entry."}
     />
       </Grid>
       <Grid item md={5} xs={11} mb={2} ml={2} sx={{mx:'auto'}}>
       <TextField
       fullWidth
       id="outlined-error-helper-text"
       label={error ? 'error':'Mobile'}
      
       helperText={error && "Incorrect entry."}
     />
       </Grid>
       <Grid item md={5} xs={11} mb={2} ml={2} sx={{mx:'auto'}}>
       <FormControl>
       <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
       <RadioGroup
         row
         aria-labelledby="demo-row-radio-buttons-group-label"
         name="row-radio-buttons-group"
       >
         <FormControlLabel value="female" control={<Radio />} label="Female" />
         <FormControlLabel value="male" control={<Radio />} label="Male" />
       </RadioGroup>
     </FormControl>
       </Grid>
       <Grid item md={5} xs={11} mb={2} ml={2} sx={{mx:'auto'}}>
       <FormControl fullWidth >
       <InputLabel id="demo-simple-select-label" >Status</InputLabel>
       <Select
         labelId="demo-simple-select-label"
         id="demo-simple-select"
         value={status}
         label="order"
         onChange={handleChange}
       
       >
         <MenuItem value={'Active'}>Active</MenuItem>
         <MenuItem value={'InActive'} >InActive</MenuItem>
        
       </Select>
     </FormControl>
       </Grid>
       <Grid item md={5} xs={11} mb={2} ml={2} sx={{mx:'auto'}}>
       <Button variant="contained" component="label" startIcon={<PhotoCamera/>}>
       Upload Profile
       <input hidden accept="image/*" multiple type="file" />
     </Button>
       </Grid>
       <Grid item md={5} xs={11} mb={2} ml={2} sx={{mx:'auto'}}>
       <TextField
       fullWidth
       id="outlined-error-helper-text"
       label={error ? 'error':'Location'}
      
       helperText={error && "Incorrect entry."}
     />
       </Grid>
       <Grid item md={11} xs={11} mb={2} ml={2} sx={{mx:'auto'}}>
      <Button variant="contained" fullWidth endIcon={<SendIcon/>} >Submit</Button>
       </Grid>
       </Grid>
        </Box>
        </Paper>
        </Box>
       </Grid>
      </Grid>
    </Container>
  );
};

export default AddUser;
