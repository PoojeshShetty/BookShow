import './App.css';
import Sidebar from './compenent/sidebar/Sidebar';
import HomePage from './page/home/HomePage';
import {Switch, Route} from 'react-router-dom'
import LoginPage from './page/login/LoginPage';
import SignupPage from './page/signup/SignupPage';
import MovieViewPage from './page/movie/MovieViewPage';
import BookingPage from './page/book/BookingPage';
import AddMoviePage from './page/admin/addmovie/AddMoviePage';
import ViewMoviesPage from './page/admin/viewmovies/ViewMoviesPage';
import EditMoviePage from './page/admin/editmovie/EditMoviePage';

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
        
      </Switch>
        <div className="App__container">
            <Switch>
              <Route path="/" exact>
                  <HomePage />
              </Route>

              <Route path="/movie">
                <MovieViewPage />
              </Route>

              <Route path="/like">
                  Liked movie
              </Route>

              <Route path="/book">
                <BookingPage />
              </Route>

              <Route path="/admin/addmovie">
                <AddMoviePage />
              </Route>

              <Route path="/admin/editmovie/:id">
                <EditMoviePage />
              </Route>

              <Route path="/admin/viewmovies">
                <ViewMoviesPage />
              </Route>

            </Switch>
          <Sidebar />
        </div>
      

    </div>
  );
}

export default App;
