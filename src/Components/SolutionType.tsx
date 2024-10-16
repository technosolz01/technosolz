import { Typography,Card ,CardMedia,CardContent,CardActions,Button,} from "@mui/material"
import Grid from '@mui/material/Grid2'
import  Box  from "@mui/material/Box"

import { useState } from "react"
const SolutionType=()=>{
     const sol=[
      { "name": "Custom App and Web Application Development",im:"mob.jpeg"},
      { "name": "Food Delivery App Development",im:"food.jpeg"},
      { "name": "CRM Software Development",im:"crm.jpeg" },
      { "name": "E-commerce Platform Development",im:"ecc.jpeg" },
      { "name": "Healthcare App Development",im:"helth.jpeg" },
      { "name": "Real Estate App and Portal Development",im:"realState.jpeg"},
      { "name": "Fintech App Development",im:"fintech.jpeg"},
      { "name": "Education and eLearning App Development",im:"education.jpeg"},
      { "name": "Travel and Booking App Development",im:"travler.jpeg"},
      { "name": "Social Media App Development",im:"soc.jpeg" },    
      { "name": "Logistics and Transportation App Development",im:"log.jpeg"},
      { "name": "Inventory and Warehouse Management Software Development",im:"invent.jpeg"},
      { "name": "Fitness and Wellness App Development",im:"fitness.jpeg" },
      { "name": "Retail Management System Development" ,im:"retail.jpeg"},
      { "name": "Digital Marketing" ,im:"digit.jpeg"},
      { "name": "Cloud And Hosting" ,im:"webhost.jpeg"}
    ]
    const [solution,setSolution]=useState(sol)
    const cardFun=(mess:string,im:string)=>{
      console.log('image path:',`../asset/image/${im}`)
     
        return (<Card sx={{ maxWidth: 300,height:250,display:'flex',flexDirection: 'column', alignItems:'center', paddingTop:'7px'}}>
            <CardMedia
              sx={{
                height:{xs:170,sm:170,md:180,lg:180} ,// Set height to 150px
                width:{xs:170,sm:170,md:170,lg:170},// Make it responsive
                objectFit:'contain', // Maintain aspect ratio while covering the area
               

              }}
              image={`/images/${im}`}
              title="green iguana"
            />
            <CardContent sx={{ display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
               
                
                }}>
              <Typography gutterBottom variant="h6" component="div"
              sx={{
                fontSize: {
                  xs: '.80rem',   // Font size for extra small screens
                  sm: '.95rem', // Font size for small screens
                  md: '.95rem',  // Font size for medium screens
                  lg: '.95rem'  // Font size for large screens
                },
                lineHeight:1
              }}
              
              >
                {mess}
              </Typography>
             
            </CardContent>
            
          </Card>)
    }

    return (
     <Box sx={{ flexGrow: 1,margin:'5px'}}>
      <Grid container spacing={4} >
       {solution.map((elem)=>(
         <Grid size={{ xs: 6,sm:3, md: 3,lg:3 }}  >
        {cardFun(elem.name, elem.im)}
       </Grid>
       ))}
      </Grid>
    </Box>

        
        
      );


}
export default SolutionType