<template>
    <div class="row">
        <h2 class="row-genre">{{ props.genre }}</h2>
        <div class="row-movies">
            <div v-for="movie in movies" v-on:click="fetchTrailer(movie.original_title)">
                <!-- Horizontal Scroll with Images -->
                <img :src="baseImageURL + movie.backdrop_path" :alt="movie.name" class="movie" />
            </div>
        </div>
    </div>
    <div class="youtube-container" v-if="trailerUrl">
        <!-- <YoutubePlayer :src="trailerUrl"/> -->
        <YouTube :src="trailerUrl" @ready="onReady" ref="youtube" class="player" height="300px" width="100%" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '../utils/axios'
import movieTrailer from 'movie-trailer';
import YouTube from 'vue3-youtube';

const props = defineProps({
    genre: String,
    fetchUrl: String
})

const baseImageURL = 'https://image.tmdb.org/t/p/original/'
const movies = ref(null)
const trailerUrl = ref(null)

const fetchTrailer = (movieTitle) => {
    if (trailerUrl.value) { trailerUrl.value = "" }
    else {
        movieTrailer(movieTitle).then(url => trailerUrl.value = url)
    }
}

onMounted(async () => {
    try {
        const response = await axios.get(props.fetchUrl)
        movies.value = response.data.results
    } catch (err) {
        console.log(err)
    }
})

</script>

<style scoped>
.row {
    padding: 1rem;
}

.row-genre {
    margin: 1rem;
}

.row-movies {
    display: flex;
    align-items: center;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 300px;
}

/* Hide scrollbar in WebKit browsers */
.row-movies::-webkit-scrollbar {
    display: none;
    /* Hides the scrollbar */
}

.movie {
    height: 250px;
    width: 200px;
    object-fit: cover;
    transition: 200ms ease-in-out;
    margin-right: 1.7rem;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
}
</style>