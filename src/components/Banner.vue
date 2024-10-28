<template>
    <!-- Render background image only if movie is defined -->
    <div v-if="movie" class="banner-image"
        :style="{ backgroundImage: `url(${baseImageURL + (movie.backdrop_path || movie.poster_path)})` }">
        <div class="banner-content">
            <h1 class="banner-title">{{ movie.title }}</h1>
            <div class="banner-buttons">
                <button class="play">
                    <play-icon size='14'/>
                    Play
                </button>
                <button class="my-list">My List</button>
            </div>
            <h4 class="banner-overview">{{ truncate(movie.overview, 120) }}</h4>
        </div>
        <div class="fade-bottom"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '../utils/axios'
import PlayIcon from 'vue-material-design-icons/Play.vue';

const baseImageURL = 'https://image.tmdb.org/t/p/original/'
const movies = ref(null)
const movie = ref(null)

const props = defineProps({
    fetchUrl: String
})

const truncate = (str, maxLength) => {
    const ellipsis = '...';
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength - ellipsis.length) + ellipsis;
}

onMounted(async () => {
    try {
        const response = await axios.get(props.fetchUrl)
        if (response.status === 200) {
            movies.value = response.data.results
            const arrayLength = movies.value.length
            const selectedMovie = movies.value[arrayLength - Math.ceil(Math.random() * 10)]
            movie.value = selectedMovie
        }
    } catch (err) {
        console.log(err)
    }
})
</script>

<style scoped>
.banner-image {
    height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: flex-end;
    /* Positions content at the bottom */
    padding: 20px;
}

.banner-content {
    background-color: transparent;
    /* Semi-transparent overlay for text readability */
    padding: 10px;
    border-radius: 5px;
    max-width: 65%;
}

.banner-title {
    font-size: 2em;
    font-weight: bold;
    color: #ffffff;
    background-color: transparent;
}

.banner-buttons {
    background-color: transparent;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.banner-overview {
    background-color: transparent;

}

.play {
    background-color: #ffffff;
    color: #000;
    padding: 1rem;
    width: 100px;
    border-radius: 10px;
    margin-right: 1rem;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
}

.my-list {
    background-color: #514f50;
    color: #ffffff;
    padding: 1rem;
    width: 100px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
}

.fade-bottom {
    height: 8rem;
    background-image: linear-gradient(180deg,
            transparent,
            rgba(37, 37, 37, 0.61),
            #111);
}
</style>
