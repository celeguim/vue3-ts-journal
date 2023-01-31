import type { Component } from "@vue/runtime-core";
import { reactive } from "vue";

const files2: { [key: string]: unknown } = import.meta.globEager(
  "../assets/icons/*.svg"
);

export default function UseEmojis() {
  const emojis2: { name: string; component: Component }[] = reactive([]);

  for (const path in files2) {
    const component = files2[path] as Component;
    const name = path.replace("../assets/icons/", "").replace(".svg", "");
    emojis2.push({ name, component });
  }

  const findEmoji2 = (name: string) =>
    emojis2.find((emoji) => emoji.name === name)?.component;

  return { emojis2, findEmoji2 };
}
