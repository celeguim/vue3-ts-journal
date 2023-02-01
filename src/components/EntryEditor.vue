<script lang="ts" setup>
import EmojiField from "./EmojiField.vue";
import { defineComponent } from "vue";
import UseEmojis2 from "@/composables/UseEmojis2";
import { ref, computed } from "vue";
import type { Ref } from "vue";
import type Emoji from "@/types/Emoji";
import type Entry from "@/types/Entry";

// Defining Emits
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-emits

// Runtime decoration
// defineEmits(["@create"]);

// Type decoration
const emit = defineEmits<{
  (e: "@create", entry: Entry): void;
}>();

const { findEmoji2 } = UseEmojis2();
const body = ref("");
const emoji: Ref<Emoji | null> = ref(null);
const charCount = computed<number>(() => body.value.length);
const maxChars = 280;

const handleTextInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;
  if (textarea.value.length <= maxChars) {
    body.value = textarea.value;
  } else {
    body.value = textarea.value = textarea.value.substring(0, maxChars);
  }
};

const handleSubmit = () => {
  emit("@create", {
    id: Math.random(),
    body: body.value,
    emoji: emoji.value,
    createdAt: new Date(),
    userId: 1,
  });
  body.value = "";
  emoji.value = null;
};
</script>

<script lang="ts">
export default defineComponent({
  components: { EmojiField },
});
</script>

<template>
  <form class="entry-form" @submit.prevent="handleSubmit">
    <textarea
      :value="body"
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
