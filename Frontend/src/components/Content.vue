<template>
  <div class="p-6 ml-0 md:ml-64">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import User from './User.vue'
import Entities from './Entity.vue'
import UserEntities from './UserEntity.vue'

const props = defineProps({
  selected: String
})

const currentComponent = computed(() => {
  if (props.selected === 'users') return User
  if (props.selected === 'entities') return Entities
  if (props.selected === 'userentities') return UserEntities
  return User // default
})
</script>