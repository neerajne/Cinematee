import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title = "home" />} />
            <Route path="movies/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title = "popular" />} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title = "top"/>} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title ="upcoming"/>} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound title = "pageNotfound" />} />
        </Routes>
    </div>
  )
}