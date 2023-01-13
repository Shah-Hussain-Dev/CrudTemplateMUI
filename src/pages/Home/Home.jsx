import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { TbFileExport } from "react-icons/tb";
import Features from "../../components/Features/Features";
import UserList from "../../components/UserList/UserList";
import Pagination from "@mui/material/Pagination";
const Home = () => {
  const buttonStyle = {
    background: "#59CE8F",
    borderRadius: "50px",
    "&:hover": {
      background: "#49bf7f",
    },
  };
  return (
    <Container>
      {/*Filtering features*/}
      <Features />
      {/*User List  features*/}
      <UserList />
      <Grid container>
     
        <Grid item xs={12} md={8} >
        <Box sx={{ mt: 3 }}>
        <Pagination count={10} color="primary" />
        </Box>
        </Grid>
        <Grid item xs={12} md={2} sx={{ ml: "auto" }}>
          <Box sx={{ width: 200, mt: 3 }}>
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
  
      </Grid>
    </Container>
  );
};

export default Home;
