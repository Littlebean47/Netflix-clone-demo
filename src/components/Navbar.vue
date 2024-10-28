<template>
    <div class="nav">
        <div class="nav-left">
            <img :src="logo" alt="Netflix" class="nav-logo" />
            <a>Tv Shows</a>
            <a>Movies</a>
            <a>Recently Added</a>
            <a>My List</a>
        </div>
        <div class="nav-right">
            <img :src="avatar" alt="" class="nav-avatar">
        </div>
    </div>
</template>

<script setup>
import logo from '../assets/netflix-logo.png'
import avatar from '../assets/avatar.jpg'
</script>

<style scoped>
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
}

.nav-left {
    display: flex;
    align-items: center;
}

.nav-left>a {
    margin-right: 1rem;
    cursor: pointer;
}

.nav-logo {
    height: 2.3rem;
    margin-right: 1.5rem;
}

.nav-avatar {
    height: 37px;
}
</style>