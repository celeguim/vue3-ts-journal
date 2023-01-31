<script lang="ts" setup>
import UseEmojis2 from "@/composables/UseEmojis2";
const { findEmoji2 } = UseEmojis2();
</script>

<template>
  <h1 class="text-6xl flex items-center">
    <component width="40" :is="findEmoji2('file-notes')"></component>
    <strong>&nbsp; My Journal</strong>
  </h1>
</template>
