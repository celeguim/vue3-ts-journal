<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "./components/EntryCard.vue";
import { reactive, provide, inject } from "vue";
import type User from "./types/User";
import type Entry from "./types/Entry";
import { userInjectionKey } from "./injectionKeys";

const entries: Entry[] = reactive([]);
const user: User = reactive({
  id: 1,
  username: "celeghin",
  settings: ["x", "y"],
});
provide(userInjectionKey, user);

console.log(user);

const handleCreateEvent = (entry: Entry) => {
  entries.unshift(entry);
};
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@create="handleCreateEvent" />
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>
