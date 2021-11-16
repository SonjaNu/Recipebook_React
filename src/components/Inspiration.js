import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FormLabel from '@mui/material/FormLabel';

  export default function FrontPage() {
  return (

 <ImageList variant="masonry" cols={3} gap={8}>
 {itemData.map((item) => (
   <ImageListItem key={item.img}>
     <img
       src={`${item.img}?w=248&fit=crop&auto=format`}
       srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
       alt={item.title}
       loading="lazy"
     />
     <ImageListItemBar position="below" title={item.nameofphoto} />
   </ImageListItem>
 ))}
</ImageList>

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