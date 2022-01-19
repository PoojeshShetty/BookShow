import './App.css';
import HomePage from './page/home/HomePage';
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './page/login/LoginPage';
import SignupPage from './page/signup/SignupPage';
import MovieViewPage from './page/movie/MovieViewPage';
import BookingPage from './page/book/BookingPage';
import AddMoviePage from './page/admin/addmovie/AddMoviePage';
import ViewMoviesPage from './page/admin/viewmovies/ViewMoviesPage';
import EditMoviePage from './page/admin/editmovie/EditMoviePage';
import LikePage from './page/like/LikePage';
import Wrapper from './compenent/wrapper/Wrapper';
import { useAuthContext } from './hook/useAuthContext';
import Loading from './compenent/loading/Loading';
import TicketsBookedPage from './page/tickets/TicketsBookedPage';

function App() {

  const {isAuthReady,user} = useAuthContext()

  const context = useAuthContext()

  console.log({context})
  if(!isAuthReady)
    return(
      <Loading />
    )
  
  return (
    <div className="App dark__mode">
      
      <Switch>
        <Route path="/login">
          {!user && <LoginPage />}
          {user && <Redirect to="/" />}
        </Route>

        <Route path="/signup">
          {!user && <SignupPage />}
          {user && <Redirect to="/" />}
        </Route>

        <Route path="/" exact>
          {user && 
            <Wrapper>
              <HomePage />
            </Wrapper>}
          {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/movie/:id">
          {user && 
          	<Wrapper>
              <MovieViewPage />
           </Wrapper>
            }
           {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/like">
            {user &&
            <Wrapper>
              <LikePage />
            </Wrapper>}
            {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/book">
           {user &&
           <Wrapper>
            <BookingPage />
          </Wrapper>}

          {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/admin/addmovie">
          {user &&
          <Wrapper>
            <AddMoviePage />
          </Wrapper>}

          {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/admin/editmovie/:id">
          {user && 
          <Wrapper>
            <EditMoviePage />
          </Wrapper>
          }

          {!user && <Redirect to="/login" />}
        </Route>

        
        <Route path="/ticket">
          {user && 
          <Wrapper>
            <TicketsBookedPage />
          </Wrapper>
          }

          {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/admin/viewmovies">
          {user &&
          <Wrapper>
            <ViewMoviesPage />
          </Wrapper>
          }

          {!user && <Redirect to="/login" />}
        </Route>

      </Switch>
    
    </div>
  );
}

export default App;
