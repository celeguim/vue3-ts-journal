<script lang="ts" setup>
import UseEmojis from "@/composables/UseEmojis";
const { emojis } = UseEmojis();
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<script lang="ts">
import { defineComponent, inject } from "@vue/runtime-core";
export default defineComponent({});
</script>

<template>
  <div class="emoji-container">
    <component
      v-for="emoji in emojis"
      :is="emoji.component"
      :key="emoji.name"
      :class="{ selected: modelValue === emoji.name }"
      @click="
        $emit(
          'update:modelValue',
          emoji.name === modelValue ? null : emoji.name
        )
      "
    ></component>
  </div>
</template>
