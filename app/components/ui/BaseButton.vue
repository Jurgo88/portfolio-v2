<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    variant?: 'primary' | 'ghost' | 'accent-outline'
    ariaLabel?: string
  }>(),
  {
    to: '#',
    variant: 'primary'
  }
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const isExternal = computed(() => /^(https?:\/\/|mailto:|tel:|#)/.test(props.to))
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'NuxtLink'"
    :to="isExternal ? undefined : props.to"
    :href="isExternal ? props.to : undefined"
    :aria-label="props.ariaLabel"
    :class="['base-btn', `base-btn--${props.variant}`]"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.base-btn {
  align-items: center;
  border: 1px solid transparent;
  border-radius: 999px;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.95rem;
  font-weight: 600;
  gap: 8px;
  justify-content: center;
  padding: 12px 22px;
  transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.base-btn--primary {
  background: var(--accent);
  color: #061100;

  &:hover {
    background: #b6ff62;
  }
}

.base-btn--ghost {
  border-color: var(--border);
  color: var(--text);

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.25);
  }
}

.base-btn--accent-outline {
  border-color: rgba(154, 255, 45, 0.5);
  color: var(--accent);

  &:hover {
    background: rgba(154, 255, 45, 0.08);
    border-color: var(--accent);
  }
}
</style>
