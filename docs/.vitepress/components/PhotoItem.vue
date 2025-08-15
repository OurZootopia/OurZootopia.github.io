<script setup>
import { inject, onMounted } from 'vue'

const registerPhoto = inject('registerPhoto')

const props = defineProps({
  src: { type: String, required: true },
  description: { type: String, default: '' }
})

onMounted(() => {
  registerPhoto({
    src: props.src,
    description: props.description
  })
})
</script>
