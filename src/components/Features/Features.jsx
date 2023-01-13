import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TbFileExport } from "react-icons/tb";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "./Features.scss";
import { useState } from "react";
const Features = () => {
  const [order, setOrder] = useState("");

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  
  return (
    <Container className="featues-section" sx={{ my: 2,background:"#1e2d39",py:3,boxShadow: 3,borderRadius:1}}>
      <Box sx={{color:'white'}} >
        <Grid container sx={{display:'flex',justifyContent:'center'}}>
          <Grid item xs={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
            <Box>
              <Typography variant="h5" align="center">
                Filter by Gender
              </Typography>
              <Box  sx={{mt:2}}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="All"
                      
                      control={<Radio defaultChecked sx={{
                        color: '#1976d2',
                        '&.Mui-checked': {
                          color: '#1976d2',
                        },
                      }} />}
                      label="All"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio  sx={{
                        color: '#1976d2',
                        '&.Mui-checked': {
                          color: '#1976d2',
                        },
                      }}/>}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio  sx={{
                        color: '#1976d2',
                        '&.Mui-checked': {
                          color: '#1976d2',
                        },
                      }}/>}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
            <Box>
              <Typography variant="h5" align="center">
                Sort by Value
              </Typography>
              <Box sx={{ width: 200,mt:2}} >
                <FormControl fullWidth >
                  <InputLabel id="demo-simple-select-label"  sx={{color:'#fff',top:'-8px'}}>Sort by </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={order}
                    label="order"
                    onChange={handleChange}
                    sx={{color:'#fff'}}
                    size="small" 
                  >
                    <MenuItem value={'New to Old'}>New to Old</MenuItem>
                    <MenuItem value={'Old to New'} >Old to New</MenuItem>
                   
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
            <Box >
              <Typography variant="h5" align="center">
                Filter by Status
              </Typography>
              <Box>
              <Box sx={{mt:2}}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="All"
                      
                      control={<Radio  defaultChecked  sx={{
                        color: '#1976d2',
                        '&.Mui-checked': {
                          color: '#1976d2',
                        },
                      }}/>}
                      label="All"
                    />
                    <FormControlLabel
                      value="Active"
                      control={<Radio  sx={{
                        color: '#1976d2',
                        '&.Mui-checked': {
                          color: '#1976d2',
                        },
                      }}/>}
                      label="Active"
                    />
                    <FormControlLabel
                      value="Inactive"
                      control={<Radio  sx={{
                        color: '#1976d2',
                        '&.Mui-checked': {
                          color: '#1976d2',
                        },
                      }}/>}
                      label="Inactive"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Features;
