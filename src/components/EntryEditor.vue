<script lang="ts" setup>
import EmojiField from "./EmojiField.vue";
import { defineComponent } from "vue";
import UseEmojis2 from "@/composables/UseEmojis2";
import { ref } from "vue";
import type { Ref } from "vue";
import type Emoji from "@/types/Emoji";
const { findEmoji2 } = UseEmojis2();
const text = ref("");
const emoji: Ref<Emoji | null> = ref(null);
</script>

<script lang="ts">
export default defineComponent({
  components: { EmojiField },
});
</script>

<template>
  <form class="entry-form" @submit.prevent>
    <textarea
      v-model="text"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>0 / 280</span>
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
