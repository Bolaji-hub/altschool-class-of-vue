<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
import useGamePicker from "../composables/useGamePicker";

export default {
  setup() {
    const colors = ["green", "red", "blue", "purple"];
    let message = ref("Pick a color...");
    const matchColor = useGamePicker(colors, message)

    return { colors, message, matchColor };
  },
};
</script>

<style></style>
