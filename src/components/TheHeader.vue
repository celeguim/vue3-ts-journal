<script lang="ts" setup>
import UseEmojis2 from "@/composables/UseEmojis2";
import { defineComponent } from "vue";
const { findEmoji2 } = UseEmojis2();
</script>

<script lang="ts">
export default defineComponent({
  components: {},
});
</script>

<template>
  <h1 class="text-6xl flex items-center">
    <component width="60" :is="findEmoji2('file-notes')"></component>
    <strong>&nbsp; My Journal</strong>
  </h1>
</template>
