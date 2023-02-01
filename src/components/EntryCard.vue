<script lang="ts" setup>
import DateDisplay from "@/components/DateDisplay.vue";
import { defineComponent, inject } from "vue";
import UseEmojis from "@/composables/UseEmojis";
import type Entry from "@/types/Entry";
import { userInjectionKey } from "@/injectionKeys";
const { findEmoji } = UseEmojis();

// in child component
const user = inject(userInjectionKey);

// Runtime decoration
// const props1 = defineProps({
//   prop1: { type: String },
// });

// Type-base decoration
defineProps<{
  entry: Entry;
}>();
</script>

<script lang="ts">
export default defineComponent({
  components: {
    DateDisplay,
  },
});
</script>

<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component width="75" :is="findEmoji(entry.emoji)"></component>
      <div class="entry-text">{{ entry.body }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createdAt" class="mr-2" />
      |
      <span class="ml-2">{{ user?.username || "anonymous" }}</span>
    </div>
  </div>
</template>
