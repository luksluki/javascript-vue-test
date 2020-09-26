<template>
  <app-card>
    <template v-slot:header>
      <span></span>
    </template>
    <template v-slot:body>
      <v-skeleton-loader
        type="list-item-two-line"
        :tile="true"
        class="mx-auto"
      ></v-skeleton-loader>
    </template>
    <template v-slot:footer>
      <span></span>
    </template>
  </app-card>
</template>

<script>
import { AppCard } from "@/components";
export default {
  name: "CardLoading",
  components: {
    AppCard
  }
};
</script>
