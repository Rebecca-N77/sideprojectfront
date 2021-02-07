import logo from "./logo.svg";

import Products from "./products";
import Detail from "./detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./contactUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <div>HOME</div>} />
        <Route path="/products" render={(props) => <Products {...props} />} />
        <Route path="/detail/:id" render={(props) => <Detail {...props} />} />
        <Route path="/contactus" render={(props) => <ContactUs {...props} />} />
      </Switch>
    </Router>
  );
  /* return <Detail />; */
  /*  return <Products />; */
}

export default App;
