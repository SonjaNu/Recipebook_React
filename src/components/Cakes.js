import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

export default function Cakes() {


 
  return (
    <Box sx={{ width: 1300, height: 1000, paddingLeft: 7, paddingRight: 7, }}>

<Typography component="div">
<Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', textAlign: 'center', paddingTop: 5, m: 1 }}>Kakut</Box>
      
      <Box sx={{ textAlign: 'center', m: 1, marginTop: '1cm' }}>
      Kakut kruunaavat juhlan ja sulostuttavat arkea! Vaihtoehtoja on paljon: juustokakku, mutakakku, kuivakakku, täytekakku...
      Kuivakakku eli kahvikakku on kakkujen klassikko. Nimestään huolimatta parhaat kuivakakut eivät ole kuivia, vaan pehmeitä ja jopa meheviä.
      Täytekakku on juhlien symboli, joka kuuluu juhlatarjoiluun vuodesta toiseen. Vain kakun täytteet, muoto ja kuorrutus vaihtelevat. 
      Paras täytekakku on ajankohtainen ja juhlien mukainen. Se on sekä päältä kaunis että sisältä mehevä, raikas ja sopivan makea. 
      Juustokakusta voi tehdä raikkaan tai tuhdin, suklaisen tai hedelmäisen, mausteisen tai marjaisan.
      Mutakakku eli mudcake on saanut nimensä kakun rakenteesta, joka jätetään maun mukaan joko löysäksi tai tahmean suklaiseksi. Mutakakku on parhaimmillaan sellaisenaan, kermavaahdon kanssa. 
      Jos kuitenkin haluaa lisätwistiä, voi kakkuun lisätä kirpeyttä mustaherukoilla tai syvyyttä lakritsijauheella.
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
  img: "./photos/cake2.jpg",
  title: 'leivos',
  nameofphoto: 'Leivonnaiset',
  },
 
  {
  img: "./photos/cake3.jpg",
  title: 'starter',
  nameofphoto: 'Alkupalat / Kevyet ateriat',
  },
  
  {
  img: "./photos/cake4.jpg",
  title: 'snakcs',
  nameofphoto: 'Naposteltavat',
  },
  
  {
  img: "./photos/cake5.jpg",
  title: 'bread',
  nameofphoto: 'Leivät',
  },
 
  ];