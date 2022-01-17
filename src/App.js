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
import LikePage from './page/like/LikePage';
import Wrapper from './compenent/wrapper/Wrapper';

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

        <Route path="/" exact>
            <Wrapper>
              <HomePage />
            </Wrapper>
        </Route>

        <Route path="/movie">
           <Wrapper>
           <MovieViewPage />
           </Wrapper>
        </Route>

        <Route path="/like">
            <Wrapper>
            <LikePage />
            </Wrapper>
        </Route>

        <Route path="/book">
          <Wrapper>
            <BookingPage />
          </Wrapper>
        </Route>

        <Route path="/admin/addmovie">
          <Wrapper>
          <AddMoviePage />
          </Wrapper>
        </Route>

        <Route path="/admin/editmovie/:id">
          <Wrapper>
          <EditMoviePage />
          </Wrapper>
        </Route>

        <Route path="/admin/viewmovies">
          <Wrapper>
          <ViewMoviesPage />
          </Wrapper>
        </Route>

      </Switch>
    
      

    </div>
  );
}

export default App;
