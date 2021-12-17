import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

export default function Cakes() {
 
  return (
    <Box sx={{ width: 1300, height: 1000, paddingLeft: 7, paddingRight: 7, }}>

<Typography component="div">
<Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', textAlign: 'center', paddingTop: 5, m: 1 }}>Cocktailit</Box>
      
      <Box sx={{ textAlign: 'center', m: 1, marginTop: '1cm' }}>
      Cocktail vai drinkki, se on makuasia. Drinkkien sekoittaminen on hauskaa puuhastelua, joka sopii myös juhlien ohjelmanumeroksi. 
      Laadukkaat cocktailit syntyvät oikeanlaisten baaritarvikkeiden, hienojen lasien ja monipuolisten ainesosien avulla, mutta vähemmälläkin panostuksella pääsee hyvin alkuun.
      Pitkät drinkit tarkoittavat korkeaan lasiin tehtäviä drinkkejä, joissa käytetään reilusti mikseriä. 
      Lyhyitä drinkkejä taas ovat monet klassiset cocktailit, joissa on nestettä usein vain 4–8 cl ja jotka tarjotaan joko lyhyestä lasista tai cocktaillasista. 
      Maultaan lyhyet drinkit ovat pitkiä voimakkaampia, ja niissä on mahdollisesti tuntuvaa karvautta, hapokkuutta tai makeutta. Ne nautitaankin pikkuhiljaa pieninä erinä.
      Juomien koristelun voi toteuttaa satokauden mukaan. Alkukesästä raparperi on helposti saatava ja trendikäs vaihtoehto, 
      kesän edetessä taas kannattaa ottaa käyttöön mansikat ja vadelmat. Syksyllä lasiin sopivat puolukka, mustikka ja karpalo.
      Mielessä kannattaa pitää myös esimerkiksi pippurit, basilika, rosmariini, tee, kaneli sekä Saarisen ikisuosikki kurkku, joka sopii todella moneen juomaan. 
      Koristeita varioimalla tuttuihinkin drinkkeihin saa uusia, jännittäviä sävyjä.
      </Box>
     
    </Typography>

   <Box sx={{paddingLeft: 10, paddingRight: 40}}>

    <ImageList sx={{ width: 1000, height: 550}} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=464&h=464&fit=crop&auto=format`}
            srcSet={`${item.img}?w=464&h=464&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    </Box>   
      
</Box>
);
}

const itemData = [
  {
  img: "./photos/cocktail.jpg",
  title: 'leivos',
  nameofphoto: 'Leivonnaiset',
  },
 
  {
  img: "./photos/cocktail2.jpg",
  title: 'starter',
  nameofphoto: 'Alkupalat / Kevyet ateriat',
  },
  
  {
  img: "./photos/cocktail3.jpg",
  title: 'snakcs',
  nameofphoto: 'Naposteltavat',
  },
  
  {
  img: "./photos/cocktail4.jpg",
  title: 'bread',
  nameofphoto: 'Leivät',
  },
 
  ];