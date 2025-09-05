import React from "react";
import { Box, Button, Card, CardContent, Fab, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

export const MuiDemo1 = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: "#E7E7E7",
        minHeight: "600px",
        border: "1px solid black",
        borderRadius: "10px",
        m: 2,
      }}
    >
      <Typography variant="h4" sx={{ color: "blue", textAlign: "center" }}>
        DASHBOARD
      </Typography>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                    <Typography variant="h6">Users</Typography>
                    <Typography variant="h4">120</Typography>
                </CardContent>
            </Card>
        </Grid>

         <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                    <Typography variant="h6">Orders</Typography>
                    <Typography variant="h4">1200</Typography>
                </CardContent>
            </Card>
        </Grid>
         <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                    <Typography variant="h6">Viewers</Typography>
                    <Typography variant="h4">12000</Typography>
                </CardContent>
            </Card>
        </Grid>
         <Grid item xs={12} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h6">Payment</Typography>
                    <Typography variant="h4">5,00,000 rs</Typography>
                </CardContent>
            </Card>
        </Grid>
        
      </Grid> */}
      <Grid container spacing={2}>
        <Grid size={8} sx={{height:"100px",backgroundColor:"pink"}}>
            <Typography>size =8</Typography>
            <Button variant="text" sx={{color:"black"}}>DELETE</Button>
        </Grid>
        <Grid size={4} sx={{height:"100px",backgroundColor:"white"}}>
            <Typography>size =4</Typography>
            <Button variant="contained">DELETE</Button>
            <Button variant="outlined">DELETE</Button>
        </Grid>
        <Grid size={{xs:12,md:8,sm:6}} sx={{height:"400px",backgroundColor:"pink"}}>
            <Typography>size =8</Typography>
            <Button variant="contained" endIcon={<DeleteIcon/>}>DELETE</Button>
            <IconButton>
                <FingerprintIcon/>
            </IconButton>
            <Fab>
                <FingerprintIcon></FingerprintIcon>
            </Fab>
        </Grid>
         <Grid size={{xs:12,md:4,sm:6}} sx={{height:"400px",backgroundColor:"white"}}>
            <Typography>size =4</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
