import React from 'react'
import Movie from '../../../compenent/movie/Movie'
import './ViewMoviesPage.css'
import { Link } from 'react-router-dom'

const initialMovie = [
    {
        id: 1,
        name: "Avengers",
        image: "https://i.pinimg.com/originals/85/00/ba/8500ba1dd8868063379c9a1221fe351f.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status: "nowshowing"
    },
    {
        id:2,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status: "nowshowing"
    },
    {
        id: 3,
        name: "Avengers",
        image: "https://lumiere-a.akamaihd.net/v1/images/image_a094a4bd.jpeg?region=0%2C0%2C800%2C1200",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status: "nowshowing"
    },
    {
        id: 4,
        name: "Avengers",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status: "upcoming"
    },
    {
        id: 5,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status: "upcoming"
    },
    {
        id: 6,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status: "upcoming"
    },
    {
        id: 7,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status: "nowshowing"
    },
    {
        id: 8,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status:"nowshowing"
    },
    {
        id: 9,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status: "nowshowing"
    },
    {
        id: 10,
        name: "Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
        actors: ["actor 1","actor 2","actor 3"],
        category: ["Action","Comedy","Sci-fi"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
        releaseDate: "12-04-2019",
        status: "upcoming"
    }
]

function ViewMoviesPage() {
    return (
        <div className="viewmovies__container">
            <div className="viewmovies__title">
                Movies
            </div>
            <div className="viewmovies">
                {
                    initialMovie.map(movie => 
                       <div className='viewmovie' key={movie.id}>
                           <Movie propsMovie={movie} />
                           
                            <Link to={`/admin/editmovie/${movie.id}`} className='btn'>
                                Edit
                            </Link>
                       </div>)
                }
            </div>
        </div>
    )
}

export default ViewMoviesPage
