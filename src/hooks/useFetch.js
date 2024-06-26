
import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies(){
            try {
                const response = await fetch(url, { timeout: 50000 }); // Adjust timeout value as needed

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const json = await response.json();
                setData(json.results);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error, e.g., set an error state
            }
        }
        fetchMovies();
    }, [url]);

    return { data };
};
