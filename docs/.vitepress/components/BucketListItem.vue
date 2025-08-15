<template>
    <div class="bucket-list-item" :class="{ done }" @click="toggle">
        <span class="checkbox">{{ done ? '❤️' : '🤍' }}</span>
        <span class="text">
            <slot />
        </span>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    checked: Boolean
})

const done = ref(props.checked)

watch(
    () => props.checked,
    (val) => {
        done.value = val
    }
)

function toggle() {
    done.value = !done.value
}
</script>

<style scoped>
.bucket-list-item {
    display: flex;
    align-items: center;
    padding: 16px 14px;
    margin-bottom: 18px;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    transition: background 0.2s;
}

.bucket-list-item:hover {
    background: #ffeaea;
}

.bucket-list-item.done .text {
    text-decoration: line-through;
    color: #aaa;
}

.checkbox {
    font-size: 1.2rem;
    margin-right: 10px;
}

.text {
    flex: 1;
    font-size: 1rem;
    font-family: Dancing Script;
}
</style>