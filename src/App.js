import './App.css';
import Sidebar from './compenent/sidebar/Sidebar';
import HomePage from './page/home/HomePage';
import {Switch, Route} from 'react-router-dom'
import LoginPage from './page/login/LoginPage';
import SignupPage from './page/signup/SignupPage';
import MovieViewPage from './page/movie/MovieViewPage';

function App() {
  return (
    <div className="App dark__mode">
      
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/signup">
          <SignupPage />
        </Route>

        <div className="App__container">
            <Route path="/" exact>
                <HomePage />
            </Route>

            <Route path="/movie">
              <MovieViewPage />
            </Route>

            <Route path="/like">
                Liked movie
            </Route>

          <Sidebar />
        </div>
      </Switch>

    </div>
  );
}

export default App;
