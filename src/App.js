import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import Land from "./components/views/Land";

const Auth = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Land} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={Forgot} />
        <Route path="/land" component={Land} />
      </Switch>
    </Router>
  );
};

export default Auth;
