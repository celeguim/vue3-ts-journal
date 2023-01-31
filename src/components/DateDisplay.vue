<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import formatRelative from "date-fns/formatRelative";

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
});
const formatted = computed({
  get() {
    return formatRelative(props.date, Date.now());
  },
  set(value) {
    emit("setDate", value);
  },
});
const emit = defineEmits(["setDate"]);
function setDate() {
  emit("setDate");
}
</script>

<template>
  <div>{{ formatted }}</div>
</template>
