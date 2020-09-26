<template>
  <v-card hover class="mx-auto mb-3">
    <v-alert outlined :color="active ? 'primary' : 'light'" class="pa-1 pt-0">
      <slot name="header">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>
              <span class="text-primary">{{ title }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </slot>
      <v-divider></v-divider>

      <div class="px-3 pt-3 pb-1">
        <slot name="body">
          <span>{{ description }}</span>
        </slot>
      </div>

      <div v-if="includeCountdown" align="center">
        <v-divider></v-divider>
        
        <v-divider></v-divider>
      </div>

      <slot name="footer">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle class="text-center">
              <span
                class="text-card-title text-bold text-primary text-center"
                >{{ footer }}</span
              >
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </slot>
    </v-alert>
  </v-card>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default: "Description"
    },
    footer: {
      type: String,
      default: "footer"
    },
    includeCountdown: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 0
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
</style>
