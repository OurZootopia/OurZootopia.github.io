<template>
    <div class="bucket-list">
        <h2 class="title">Bucket List</h2>
        <slot />
    </div>
</template>

<style scoped>
.bucket-list {
    width: 55vw;
    margin: 20px auto;
    background: #fff5f5;
    padding: 20px 50px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(255, 107, 107, 0.15);
}

.title {
    font-size: 1.5rem;
    font-family: Dancing Script;
    color: #ff6b6b;
    margin-bottom: 15px;
    text-align: center;
}
</style>