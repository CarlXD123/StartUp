import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import ProductList from "./products/ProductList";
import Landing from "./landing/Landing";
import Logueo from "./login/Logueo";


function App() {
  return (
   
      <Switch>
        <Route path="/" exact>
        <Logueo />
        </Route>
        <Route path="/product" exact>
          <ProductList />
        </Route>
        <Route path="/products/:slug">
          <ProductDetail />
        </Route>
        <Route path="/inicio" exact>
          <Landing />
        </Route>
      </Switch>
    
  );
}

export default App;
