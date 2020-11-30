<template>
  <div class="columns">
    <div class="box column" v-for="(item, index) in items" :key="index">
      <article class="media">
        <div class="media-left">
        </div>
        <div class="media-content">
          <slot name="item" :item="item"/>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
