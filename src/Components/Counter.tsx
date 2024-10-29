import { Typography, Box } from "@mui/material";
import { count } from "console";
import { useState, useEffect, useRef } from "react";
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import {faPeopleArrows, faLaptopCode, faGlobe } from '@fortawesome/free-solid-svg-icons'




const Counter = () => {
  const [projects,setProject]=useState(0)
  const [years,setYears]=useState(0)
  const [countries,setCounty]=useState(0)
  const [statisfication,setSetisfication]=useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is in view
  });
  
  useEffect(()=>{
    let timer:NodeJS.Timeout|undefined;
    console.log(inView,projects)
    if(inView&&projects<100){
      timer = setInterval(() => {
        setProject(prevProjects => Math.min(prevProjects + 1, 300));
        setYears(prevY => Math.min(prevY + 1, 3));
        setCounty(prevC => Math.min(prevC + 1, 5));
        setSetisfication(prevS => Math.min(prevS + 1, 100));
        
      }, 1);
    }
    return () => clearInterval(timer);
   
  },[inView,projects])

  let cardFun=(n:number,icon:any,content:string)=>{
 
    return(
     
      <Card sx={{ maxWidth: 345,display:'flex',justifyContent:"center",height: {md: 200 }}}>
      <CardContent sx={{display:'flex',alignItems:"center",flexDirection:"column",height: {md: 200 }}}>
        <Box
         sx={{
          color: 'blue',
          '&:hover': {
            color: 'green', 
          },
        }}
        
        >
       <FontAwesomeIcon icon={icon} size="4x"  />
       </Box>
     
        <Typography variant="h4" sx={{  textAlign: 'center',marginTop:2}}>
         {n+'+'}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center',fontSize:{md:'1.4rem'}}}>
         {content}
        </Typography>
      </CardContent>
     
    </Card>
    )
  }
 
    return (
        
      <Grid container spacing={2} ref={ref}>
      <Grid size={{ xs: 6, md: 3 }}>
        {cardFun(projects,faPeopleArrows,'projects completed successfully')}
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
       {cardFun(years,faGlobe,'years experience')}
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
       {cardFun(countries,faLaptopCode,'countries we have worked')}
      </Grid>
      <Grid size={{ xs: 6, md: 3}}>
      {cardFun(statisfication,faHandshake,'satisfaction of our clients')}
      </Grid>
    </Grid>
      
    
         
            
    
    );
};

export default Counter;