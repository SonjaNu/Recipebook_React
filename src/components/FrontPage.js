import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

export default function FrontPage() {

  let itemDataFinal = [];
  var itemDataRandom;
  
  for (var i = 0; i < 3; i++) {
    itemDataRandom = itemData[Math.floor(Math.random() * itemData.length)]; // haetaan satunnainen "kuva" itemData-listasta itemDataRandom-muuttujaan
    if (itemDataFinal.indexOf(itemDataRandom) > -1) { // tarkastetaan löytyykö kuva jo itemDataFinal-listasta
      i--; // jos löytyy, vähennetään i:stä 1, jotta kuvia tulee kuitenkin kollaasiin 3 kpl
    } else { 
      itemDataFinal.push(itemDataRandom); // jos kuvaa ei löydy itemDataFinal listasta ennestään, lisätään se siihen
    }  
  };  
  

  return (
    <Box sx={{ width: 1300, height: 1000, paddingLeft: 7, paddingRight: 7, }}>

<Typography component="div">
<Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', textAlign: 'center', m: 1 }}>Tervetuloa käyttämään reseptikirjaa!</Box>
      
      <Box sx={{ textAlign: 'center', m: 1, marginTop: '1cm' }}>Tämä sovellus auttaa sinua pitämään elämäsi parhaimmat reseptit tallessa ja järjestyksessä.
     </Box>
      <Box sx={{ textAlign: 'center', m: 1 }}>Voit tallentaa uuden reseptin Lisää resepti -välilehdellä. 
      Näytä reseptit -välilehdellä näet kaikki tallentamasi reseptit ja pääset katsomaan niitä tarkemmin.
      Reseptihaussa voit hakea reseptejä nimen mukaan.
       Jos kaipaat inspiraatiota, kurkkaa Inspiraatio-välilehden taakse. Terveysnurkasta löytyy mm. ravintotietotaulukko ja muuta terveelliseen ruokavalioon liittyvää tietoa.</Box>
     
      <Box sx={{ textAlign: 'center', m: 1, fontSize: 20 }}>Nautinnollisia hetkiä reseptien parissa!</Box>
    </Typography>
      

    <ImageList variant="masonry" cols={3} gap={8}>
    {itemDataFinal.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
   </ImageListItem>
  ))}
  </ImageList>
      
</Box>
);
}

const itemData = [
  {
  img: "./photos/pastry.jpg",
  title: 'leivos',
  nameofphoto: 'Leivonnaiset',
  },
  {
  img: "./photos/cocktail.jpg",
  title: 'cocktail',
  nameofphoto: 'Cocktailit',
  },
  {
  img: "./photos/everydayfood.jpg",
  title: 'everydayfood',
  nameofphoto: 'Arkiruuat',
  },
  {
  img: "./photos/soup.jpg",
  title: 'soup',
  nameofphoto: 'Keitot',
  },
  
  {
  img: "./photos/theme.jpg",
  title: 'theme',
  nameofphoto: 'Teemaruuat / Teemaherkut',
  },
  
  {
  img: "./photos/starter.jpg",
  title: 'starter',
  nameofphoto: 'Alkupalat / Kevyet ateriat',
  },
  {
  img: "./photos/sweetpie.jpg",
  title: 'sweetpie',
  nameofphoto: 'Makeat piirakat',
  },
  {
  img: "./photos/pie.jpg",
  title: 'pie',
  nameofphoto: 'Suolaiset piirakat',
  },
  {
  img: "./photos/snacks.jpg",
  title: 'snakcs',
  nameofphoto: 'Naposteltavat',
  },
  
  {
  img: "./photos/smoothie.jpg",
  title: 'smoothie',
  nameofphoto: 'Smoothiet',
  },
  
  {
  img: "./photos/cake.jpg",
  title: 'cake',
  nameofphoto: 'Kakut',
  },
  {
  img: "./photos/bread.jpg",
  title: 'bread',
  nameofphoto: 'Leivät',
  },
  {
  img: "./photos/salad.jpg",
  title: 'salad',
  nameofphoto: 'Salaatit',
  },
  {
  img: "./photos/dessert.jpg",
  title: 'dessert',
  nameofphoto: 'Jälkiruuat',
  },
  ];