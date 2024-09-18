import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import NewArrivalsSection from "./components/NewArrivalsSection";

// import Card from "./components/Card";
import { shoes } from "./components/constant";

function App() {
  return (
    <div className="animate-fadeIn p-10 lg:px-24">
      <Nav />
      <ShoeDetail />
      {/* <Card item={shoes[0]} /> */}
      <NewArrivalsSection shoes={shoes} />
    </div>
  );
}

export default App;
