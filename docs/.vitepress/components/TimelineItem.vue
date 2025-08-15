<template>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <div class="timeline-date">{{ date }}</div>
      <div class="timeline-title">{{ title }}</div>
      <div class="timeline-desc"><slot /></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  date: String,
  title: String
})
</script>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-dot {
  position: absolute;
  left: -11px;
  top: 6px;
  width: 14px;
  height: 14px;
  background: #ff6b6b;
  border-radius: 50%;
}

.timeline-content {
  background: #fff5f5;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(255, 107, 107, 0.2);
  width: 48vw;
}

.timeline-date {
  font-size: 0.85rem;
  color: #999;
}

.timeline-title {
  font-weight: bold;
  margin: 4px 0;
}

.timeline-desc {
  font-size: 0.9rem;
}
</style>
