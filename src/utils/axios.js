import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api:themoviedb.org/3',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGEyYWJmMTc5NjIxOTBlYjc1ZDA5MTE0MzMwMzljMiIsIm5iZiI6MTcyOTk3NzQ3OC43MTg0MjMsInN1YiI6IjYwMDY0NmYyODY5ZTc1MDAzZTg0NWE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LNh4STAEZ8ezzcKTn80bCDFEGgBd2zUIyvKYG4BdsL8'
    }
})

export default instance