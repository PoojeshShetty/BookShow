import {useEffect} from 'react'
import Movie from '../../compenent/movie/Movie'
import {Link} from 'react-router-dom'
import './HomePage.css'

const initialMovie = [
    {
        id: 1,
        name: "Avengers",
        image: "https://i.pinimg.com/originals/85/00/ba/8500ba1dd8868063379c9a1221fe351f.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    },
    {
        id:2,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    },
    {
        id: 3,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    },
    {
        id: 4,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    },
    {
        id: 5,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    },
    {
        id: 6,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    },
    {
        id: 7,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    },
    {
        id: 8,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    },
    {
        id: 9,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    },
    {
        id: 10,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019"
    }
]

function HomePage() {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <div className="home__container">
            <div className="home__nowshowing">
                <div className="nowshowing__title">
                    Now Showing
                </div>

                <div className="movies">
                    {
                    initialMovie.map(movie => (
                        <Link to={`/movie/${movie.id}`}  key={movie.id}>
                            <Movie propsMovie={movie}/>
                        </Link>
                    ))

                    }
                </div>
            </div>

            <div className="home__upcoming">
                <div className="upcoming__title">
                    Upcoming
                </div>

                <div className="movies">
                    {
                    initialMovie.map(movie => (
                        <Link to={`/movie/${movie.id}`}  key={movie.id}>
                            <Movie propsMovie={movie}/>
                        </Link>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage
