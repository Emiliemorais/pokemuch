<template>
  <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3" :open="false">
    <div
      slot="trigger" 
      slot-scope="props"
      class="card-header"
      role="button"
      aria-controls="contentIdForA11y3">
      <p class="card-header-title">
        {{ title }}
        <span class="total">{{ total }} </span>
      </p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'caret-down' : 'caret-up'" />
      </a>
    </div>
    <div class="card-content">
      <div class="content">
        <p v-for="(item, index) in items" :key="index">{{ item.name }}</p>
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: false,
    },
    total: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
