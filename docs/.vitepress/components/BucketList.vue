<template>
    <div class="bucket-list">
        <h2 class="title">Bucket List</h2>
        <slot />
    </div>
</template>

<style scoped>
.bucket-list {
    width: clamp(300px, 50rem, 800px);
    margin: 1.25rem auto;
    background: #fff5f5;
    padding: clamp(1rem, 2rem, 3rem) clamp(1rem, 3rem, 3.125rem);
    border-radius: 0.75rem;
    box-shadow: 0 4px 10px rgba(255, 107, 107, 0.15);
}

.title {
    font-size: clamp(1.25rem, 1.5rem, 2rem);
    font-family: 'Dancing Script', cursive;
    color: #ff6b6b;
    margin-bottom: 0.9rem;
    text-align: center;
}

@media (max-width: 600px) {
    .bucket-list {
        width: 95%;
        padding: 1rem;
    }
}

</style>