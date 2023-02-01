<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  mounted() {
    console.log("mounted()");
    this.$http("http://myendpoint.com");
  },
});
</script>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import formatRelative from "date-fns/formatRelative";
import { onMounted } from "vue";

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

onMounted(() => {
  console.log("setup onMounted()");
  // this.$http("http://myendpoint.com");
});
</script>

<template>
  <div>{{ formatted }}</div>
</template>
