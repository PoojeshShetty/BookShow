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
import PageNotFound from './page/pagenotfound/PageNotFound';
import useThemeContext from './hook/useThemeContext';

function App() {

  const {isAuthReady,user} = useAuthContext()
  const {theme} = useThemeContext()

  if(!isAuthReady)
    return(
      <Loading />
    )
  
  return (
    <div className={theme === 'dark' ? "App dark__mode" : "App light__mode"}>
      
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

        <Route path="/movie/:id" exact>
          {user && 
          	<Wrapper>
              <MovieViewPage />
           </Wrapper>
            }
           {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/like" exact>
            {user &&
            <Wrapper>
              <LikePage />
            </Wrapper>}
            {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/book" exact>
           {user &&
           <Wrapper>
            <BookingPage />
          </Wrapper>}

          {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/admin/addmovie" exact>
          {user  &&
            user.type === "admin" ?
            <Wrapper>
              <AddMoviePage />
            </Wrapper>:
          <Redirect to="/"/>
          }
          
          {!user && <Redirect to="/login" />}

        </Route>

        <Route path="/admin/editmovie/:id" exact>
          {user &&
            user.type === "admin" ?
            <Wrapper>
              <EditMoviePage />
            </Wrapper>:
          <Redirect to="/"/>
          }

          {!user && <Redirect to="/login" />}
        </Route>

        
        <Route path="/ticket" exact>
          {user && 
          <Wrapper>
            <TicketsBookedPage />
          </Wrapper>
          }

          {!user && <Redirect to="/login" />}
        </Route>

        <Route path="/admin/viewmovies" exact>
          {user &&
            user.type === "admin" ?
            <Wrapper>
              <ViewMoviesPage />
          </Wrapper> :
          <Redirect to="/" />
          }

          {!user && <Redirect to="/login" />}
        </Route>

        <Route path="*">
            <PageNotFound />
        </Route>

      </Switch>
    
    </div>
  );
}

export default App;
