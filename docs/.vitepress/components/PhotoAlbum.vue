<template>
    <div class="photo-album">
        <p v-if="albumSignature" class="album-signature">{{ albumSignature }}</p>

        <div v-if="photos.length" class="photo-frame-wrapper">
            <button class="nav-btn left" @click="prev" :disabled="currentIndex === 0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#grad-left)">
                    <defs>
                        <linearGradient id="grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#ff6b6b" />
                            <stop offset="100%" stop-color="#ff8787" />
                        </linearGradient>
                    </defs>
                    <path d="M15 18l-6-6 6-6" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>

            <div class="photo-frame">
                <img :src="photos[currentIndex].src" />
                <div class="photo-info">
                    <p>{{ photos[currentIndex].description }}</p>
                </div>
            </div>

            <button class="nav-btn right" @click="next" :disabled="currentIndex === photos.length - 1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#grad-right)">
                    <defs>
                        <linearGradient id="grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#ff6b6b" />
                            <stop offset="100%" stop-color="#ff8787" />
                        </linearGradient>
                    </defs>
                    <path d="M9 6l6 6-6 6" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>

        <div class="thumbnails" v-if="photos.length">
            <div v-for="(photo, index) in photos" :key="index" class="thumb" :class="{ active: index === currentIndex }"
                @click="currentIndex = index">
                <img :src="photo.src" />
            </div>
        </div>
        <slot />
    </div>
</template>

<script setup>
import { ref, provide } from 'vue'

const photos = ref([])
const currentIndex = ref(0)
const props = defineProps({
    albumSignature: String
})

function prev() {
    if (currentIndex.value > 0) currentIndex.value--
}

function next() {
    if (currentIndex.value < photos.value.length - 1) currentIndex.value++
}

provide('registerPhoto', (photo) => {
    photos.value.push(photo)
})
</script>

<style scoped>
.photo-album {
    width: 50vw;
    margin: 20px auto;
    text-align: center;
}

.album-signature {
    font-size: 0.9rem;
    color: #ff8787;
    margin-bottom: 15px;
    font-style: italic;
}

.photo-frame-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.photo-frame {
    background: #fdebeb;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 4px 10px rgba(255, 107, 107, 0.25);
    max-width: 100%;
}

.photo-frame img {
    width: 45vw;
    height: 50vh;
    border-radius: 8px;
}

.photo-info p {
    margin: 10px 0 0;
    color: #555;
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 107, 107, 0.3);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, background 0.2s;
}

.nav-btn:hover:not(:disabled) {
    transform: translateY(-50%) scale(1.1);
    background: rgba(255, 107, 107, 0.5);
}

.nav-btn:disabled {
    cursor: not-allowed;
    opacity: 0.4;
}

.nav-btn.left {
    left: -15px;
}

.nav-btn.right {
    right: -15px;
}

.thumbnails {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 12px;
}

.thumb {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 0.2s;
}

.thumb.active {
    border-color: #ff6b6b;
}

.thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 1000px) {
    .photo-album {
        width: 80vw;
        margin: 15px auto;
    }

    .photo-frame img {
        width: 90vw;
        height: auto;
    }

    .photo-frame {
        padding: 15px;
    }

    .nav-btn {
        width: 40px;
        height: 40px;
    }

    .thumbnails {
        gap: 8px;
    }

    .thumb {
        width: 60px;
        height: 60px;
    }
}
</style>