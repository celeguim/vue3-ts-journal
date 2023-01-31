<script lang="ts" setup>
import EmojiField from "./EmojiField.vue";
import { defineComponent } from "vue";
import UseEmojis2 from "@/composables/UseEmojis2";
const { findEmoji2 } = UseEmojis2();
</script>

<script lang="ts">
export default defineComponent({
  components: { EmojiField },
});
</script>

<template>
  <form class="entry-form" @submit.prevent>
    <textarea placeholder="New Journal Entry for danielkelly_io"></textarea>
    <EmojiField />
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
