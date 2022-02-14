import './App.css';
import MainPage from './main/index.js';
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product"

function App() {
  return <div>
    <Switch>
      <Route exact={true} path="/">
        <MainPage />
      </Route>

      <Route exact={true} path="/products/:id">
        <ProductPage />
      </Route>

      <Route exact={true} path="/upload">
        <UploadPage />
      </Route>
    </Switch>
  </div>;
}


export default App;