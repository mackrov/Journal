import Nav from "./components/navbar";
import Cards from "./components/Cards";
import data from "./components/data";


function App() {
  const detais=data.map(item=>{
    return <Cards 
    key={item.id}
    hahas={item}
    // img1={item.img1} 
    // map={item.map} 
    // anchor={item.anchor} 
    // title={item.title} 
    // date={item.date} 
    // description={item.description}
    />
})
  return (
    <>
    <Nav/>
    {detais}
    </>
  );
}

export default App;
