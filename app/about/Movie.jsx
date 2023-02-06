import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Movie = ({id ,title, poster_path, release_date}) => {
    const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
    <div className='border-solid border-2 border-sky-500 p-5 rounded-md'>
        <div className='border-solid border-2 border-sky-500 px-2 text-center flex flex-col justify-center items-center rounded-md pt-3'>
          <h1>{title}</h1>
          <h2 className=' mb-4'>{release_date}</h2>
        </div>
        <Link href={`movies/${id}`} className=''>
        <Image
        className='border-solid border-2 border-sky-500 px-2 text-center flex flex-col justify-center items-center rounded-md mt-8'
        src={imagePath + poster_path}
        width={400}
        height={400}
        alt={title}
        >

        </Image>
        </Link>
    </div>
  )
}

export default Movie