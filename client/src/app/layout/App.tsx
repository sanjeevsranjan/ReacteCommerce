import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";

function App() {
  const[darkMode , setDarkMode] =  useState(false);
  const paletteType = darkMode?'dark':'light'
  const theme = createTheme({
    palette: {
      mode : paletteType,
      background:{
        default: paletteType=== 'light'? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
}

 
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=>{
    fetch("http://localhost:5000/api/products")
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[])
   

  function addProduct(){
    setProducts(prevState => [...products,
       {
        id: prevState.length+101,
      name:'product'+(prevState.length+1),
       price:(prevState.length*100)+100,
       brand: "some brand",
       description: "Some Description",
       pictureUrl: "http://picsum.photos/200"
      }])
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
      <Container>
         <Catalog />
      </Container>
     
    </ThemeProvider>
    
  );
 
}

export default App;
