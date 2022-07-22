import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={ProductListing}/>
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route path="/not-found" component={NotFound} />
        {/* <Redirect from='/' exact to='/home'/> */}
      <Redirect exact to='/not-found' />
      </Switch>
    </>
  );
}

export default App;
