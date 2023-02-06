import Image from "next/image"
import styled from "styled-components"
export async function generateStaticParams(){
const data  = await fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
const res = await data.json()
return res.results.map((movie)=> ({
  movie: toString(movie.id),
}))
}

const MovieDetail = async({params}) => {
  // console.log(params.movie)
  const imagePath = 'https://image.tmdb.org/t/p/original'
  const api_key = `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`
  const data = await fetch(api_key)
  const res = await data.json()
  // console.log(res.belongs_to_collection)
  return (
    <div className="h-screen">
      <div>
        <h1 className=" text-2xl">{res.title}</h1>
        <h2 className=" text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className=" bg-green-700 inline-block my-4 px-5 py-2 rounded-md text-sm ">{res.status}</h2>
        <Image 
        className=" my-12 w-auto"
        src={ imagePath + res.backdrop_path }
        width={800}
        height={800}
        >

        </Image>
        <p>{res.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetail