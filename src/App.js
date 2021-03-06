import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './config/routes'
// import AdminHome from './pages/Admin'
// import Home from './pages/Home'

import './App.scss';


function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouterWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouterWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  )
}

export default App;
