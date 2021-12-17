import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import CreateIcon from '@mui/icons-material/Create';

const kortti = {
    
  minWidth: 100,
  maxWidth: 800, 
  minHeight: 150,
  
 
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'black',
  borderRadius: 2
}

function RecipeItem (props) {

  let { id } = useParams();
  let { nimi } = useParams();
  let { kategoria } = useParams();
  let { ainekset } = useParams();
  let { ohje } = useParams();
  let { allergia } = useParams(); 
  let { valmistusaika } = useParams(); 
  let { vaikeus } = useParams(); 
  let { arvostelut } = useParams(); 

    return (
      <Box sx={ {paddingTop: 7, paddingLeft: 30, paddingRight: 30, minWidth: 200, minHeight: 200} }> 
      <Card sx={ kortti }>


      <CardHeader 
         avatar={ <StarIcon />}
         title={ nimi.toUpperCase() }
         subheader={ kategoria } />

      <CardContent>
         
          <Typography variant="h7">  Ainekset: </Typography> 
          <Typography>  { ainekset.split(";").map(place => <p> {place} </p>)  } </Typography>
          <Typography variant="h7"> Valmistusohje: </Typography> 
          <Typography> { ohje.split(";").map(place => <p> {place} </p>) }</Typography>
          <Typography variant="h7">  Lisätietoja: </Typography>
          <Typography> { arvostelut.split(";").map(place => <p> {place} </p>) } </Typography>
          <Typography> <StarIcon /> Erityisruokavalio: { allergia }</Typography>
          <Typography> <StarIcon /> Valmistusaika: { valmistusaika }</Typography>
          <Typography> <StarIcon /> Vaikeusaste: { vaikeus }</Typography>
          


         
      </CardContent>

      <CardActions>
        <Button backIcon={<ArrowBackIcon/>} component={ Link } to='/nayta' startIcon={< ArrowBackIcon />}>Takaisin</Button>  
        <Button backIcon={<ArrowBackIcon/>} component={ Link } to={'/muokkaa/' + id +  '/' + nimi + '/' + kategoria + '/' + allergia + '/' + ainekset + '/' + ohje + '/' + valmistusaika + '/' + vaikeus + '/' + arvostelut} startIcon={<CreateIcon />}>Muokkaa reseptiä</Button>
 
      </CardActions>
          
   </Card>
                 

   </Box>
  
  );
}


export default RecipeItem;