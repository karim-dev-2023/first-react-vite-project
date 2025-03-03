import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Dish from "./components/Dish.jsx";

function App() {
  return (
    <>
      <Header />
      <h1>Voici nos plats </h1>
      
      <Dish nameItem={"Tacos à l’unité"} imageSrc={"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"} price={3}/>
      <Dish nameItem={"Enchiladas"} imageSrc={"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"} price={12}/>
      <Dish nameItem={"Mole poblano"} imageSrc={"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"} price={15}/>
      <Footer />
    </>
  );
}

export default App;
