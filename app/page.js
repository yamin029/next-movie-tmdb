import Movie from "./about/Movie"

export default async function Home() {
  const api_key = `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  const data = await fetch(api_key)
  const res = await data.json()
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid pt-16">
        {res.results.map((movie) => (
          <Movie key={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} id={movie.id} ></Movie>
        ))}
      </div>
    </main>
  )
}
