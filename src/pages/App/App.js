import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Landing from '../Landing';
import Qui from '../Qui';
import Intervenir from '../Intervenir';
import Inscription from '../Inscription';
import ErrorPage from '../ErrorPage';
import Footer from '../../components/Footer';



function App() {

  return (
    <Router className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Qui-sommes-nous " component={Qui} />
        <Route path="/Intervenir" component={Intervenir} />
        <Route path="/Je-m-inscris" component={Inscription} />
        <Route component={ErrorPage} />
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
