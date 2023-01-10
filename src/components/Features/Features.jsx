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
  const buttonStyle = {
    background: "#59CE8F",
    borderRadius: "50px",
    "&:hover": {
      background: "#49bf7f",
    },
  };
  
  return (
    <Container className="featues-section" sx={{ my: 4 }}>
      <Box>
        <Grid container >
          <Grid item xs={6} md={3}>
            <Box sx={{ width: 200,mt:3}}>
              <Button
                variant="contained"
                sx={buttonStyle}
                endIcon={<TbFileExport />}
                className="export"
              >
                Export to CSV
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Filter by Gender
              </Typography>
              <Box>
                <FormControl sx={{ ml: 2 }}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="All"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center" , mb:1}}>
                Sort by Value
              </Typography>
              <Box sx={{ width: 200 , mx:'auto'}} >
                <FormControl fullWidth >
                  <InputLabel id="demo-simple-select-label">Sort by </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={order}
                    label="order"
                    onChange={handleChange}
                   
                  >
                    <MenuItem value={10}>New to Old</MenuItem>
                    <MenuItem value={20}>Old to New</MenuItem>
                   
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Filter by Status
              </Typography>
              <Box>
              <Box>
                <FormControl sx={{ ml: 1 }}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="All"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="Active"
                      control={<Radio />}
                      label="Active"
                    />
                    <FormControlLabel
                      value="Inactive"
                      control={<Radio />}
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
