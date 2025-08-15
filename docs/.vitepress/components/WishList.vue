<template>
    <div class="wish-list">
        <h2 class="title">愿望清单</h2>
        <slot />
    </div>
</template>

<style scoped>
.wish-list {
    max-width: 500px;
    margin: 20px auto;
    background: #fff5f5;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(255, 107, 107, 0.15);
}

.title {
    font-size: 1.5rem;
    color: #ff6b6b;
    margin-bottom: 15px;
    text-align: center;
}
</style>