<script lang="ts" setup>
import EmojiField from "./EmojiField.vue";
import { defineComponent } from "vue";
import UseEmojis2 from "@/composables/UseEmojis2";
import { ref, computed } from "vue";
import type { Ref } from "vue";
import type Emoji from "@/types/Emoji";
const { findEmoji2 } = UseEmojis2();
const text = ref("");
const emoji: Ref<Emoji | null> = ref(null);
const charCount = computed<number>(() => text.value.length);
const maxChars = 280;
const handleTextInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;
  if (textarea.value.length <= maxChars) {
    text.value = textarea.value;
  } else {
    text.value = textarea.value = textarea.value.substring(0, maxChars);
  }
};
</script>

<script lang="ts">
export default defineComponent({
  components: { EmojiField },
});
</script>

<template>
  <form class="entry-form" @submit.prevent>
    <textarea
      :value="text"
      @keyup="handleTextInput"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>
        Remember
        <component
          width="20"
          :is="findEmoji2('arrow-circle-right')"
        ></component>
      </button>
    </div>
  </form>
</template>
