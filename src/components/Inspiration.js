import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';


  export default function Inspiration() {
  return (
<Box sx={ {paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 5} } >

<Box
      sx={{
        color: 'text.primary', 
        fontSize: 64, 
        fontWeight: 'medium',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 10,
        },
      }}
    >
<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4 }} underline="none" to ={'/leivonnaiset' } > <MenuItem>#Leivonnaiset</MenuItem>  </Link>
<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4 }} underline="none" to ={'/cocktailit' }> <MenuItem > #Cocktailit </MenuItem>  </Link>
<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4 }} underline="none" to ={'/leivat' }> <MenuItem > #Leivät </MenuItem> </Link>
<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4 }} underline="hover" to ={'/kakut' }> <MenuItem> #Kakut </MenuItem> </Link>

    </Box>


<Box
      sx={{
        paddingTop: 3,
        color: 'text.primary', 
        fontSize: 64, 
        fontWeight: 'medium',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 10,
        },
      }}
    >
      

<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4 }} underline="hover" to ={'/arkiruoka' }> <MenuItem> #Arkiruoka  </MenuItem> </Link>
<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4 }} underline="hover" to ={'/piirakat' }> <MenuItem> #Piirakat </MenuItem> </Link>
<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4 }} underline="hover" to ={'/salaatit' }> <MenuItem> #Salaatit </MenuItem> </Link>
<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4 }} underline="hover" to ={'/smoothiet' }> <MenuItem> #Smoothiet </MenuItem> </Link>
    
    </Box>

    <Box
      sx={{
        paddingTop: 3,
        color: 'text.primary', 
        fontSize: 64, 
        fontWeight: 'medium',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 15,
        },
      }}
    >

<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4 }} underline="hover" to ={'/keitot' }> <MenuItem> #Keitot </MenuItem> </Link>
<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4  }} underline="hover" to ={'/alkupalat' }> <MenuItem> #Alkupalat </MenuItem> </Link>
<Link style={{ textDecoration: 'none', borderWidth: 3, borderStyle: 'inset', borderColor: 'brown', borderRadius: 4}} underline="hover" to ={'/teemaruuat' }> <MenuItem> #Teemaruuat </MenuItem> </Link>
    

    </Box>



 <ImageList variant="masonry" cols={3} gap={12} >
 {itemData.map((item) => (
   <ImageListItem  key={item.img}>
      
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
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'leivonnaiset',
},
{
img: "./photos/cocktail.jpg",
title: 'cocktail',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'cocktailit',
},
{
img: "./photos/everydayfood.jpg",
title: 'everydayfood',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Arkiruuat',
},
{
img: "./photos/soup.jpg",
title: 'soup',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Keitot',
},

{
img: "./photos/theme2.jpg",
title: 'theme',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Teemaruuat / Teemaherkut',
},

{
img: "./photos/starter.jpg",
title: 'starter',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Alkupalat / Kevyet ateriat',
},
{
img: "./photos/sweetpie.jpg",
title: 'sweetpie',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Makeat piirakat',
},
{
img: "./photos/pie.jpg",
title: 'pie',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Suolaiset piirakat',
},
{
img: "./photos/snacks.jpg",
title: 'snakcs',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Naposteltavat',
},

{
img: "./photos/smoothie.jpg",
title: 'smoothie',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Smoothiet',
},

{
img: "./photos/cake.jpg",
title: 'cake',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Kakut',
},
{
img: "./photos/bread.jpg",
title: 'bread',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Leivät',
},

{
  img: "./photos/theme4.jpg",
  title: 'snakcs',
  nameofphoto: 'Naposteltavat',
  },
  
{
img: "./photos/salad.jpg",
title: 'salad',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Salaatit',
},
{
img: "./photos/dessert.jpg",
title: 'dessert',
subheader: 'Leivonnaiset ovat hyviä',
nameofphoto: 'Jälkiruuat',
},
];