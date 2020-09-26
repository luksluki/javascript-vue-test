<template>
  <div class="scroll-wrapper" :style="{ width, height, ...customStyle }">
    <slot v-if="loading" name="loading">
      <v-card class="px-2">
        <v-list key="loading">
          <v-list-item>
            <v-text-field color="primary" loading disabled></v-text-field>
          </v-list-item>
        </v-list>
      </v-card>
    </slot>
    <slot name="item"></slot>
  </div>
</template>

<script>
export default {
  name: "Scroller",
  props: ["width", "height", "loading", "customStyle"]
};
</script>

<style lang="scss">
.scroll-wrapper {
  display: block;
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px #d1d1d1;
  border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.6);
}
</style>
