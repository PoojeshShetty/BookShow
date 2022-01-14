import {useEffect} from 'react'
import './MovieViewPage.css'

const movie = {
    id: 7,
    name: "Avengers",
    image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
    actors: ["actor 1","actor 2","actor 3"],
    category: ["Action","Comedy","Sci-fi"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
    releaseDate: "12-04-2019"
}

function MovieViewPage() {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <div className="moviepage__container">
            <div className="moviepage__main">
                <div className="moviepage__view">
                    <div className="moviepage__image">
                        <img src={movie.image} alt="movie" />
                        <button className='btn'>Book</button>
                    </div>

                    <div className='moviepage__summary'>
                        <div className="moviepage__info">
                            <div className="moviepage__name">
                                {movie.name}
                            </div>
                            <div className="moviepage__actors">
                                <span className="cast">Cast - </span>{movie.actors.map(actor => actor + " | ")}
                            </div>
                            <div className="moviepage__date">
                                <span className="date">Release Date - </span>{movie.releaseDate}
                            </div>
                        </div>
                        <div className="moviepage__description">
                           <div className="summary">Summary - </div> {movie.description}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieViewPage
