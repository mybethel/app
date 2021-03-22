<script>
export default {
  name: 'UserMenu',
  inject: ['apiClient', 'authData', 'theme']
}
</script>

<template>
  <v-menu
    content-class="v-menu--user__content"
    open-on-hover
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <div
        class="v-menu--user pl-4 pr-2"
        v-bind="attrs"
        v-on="on"
      >
        <span class="subtitle-2">
          {{ authData.ministry.name }}
        </span>
        <v-avatar
          class="ml-3 mr-1"
          size="32"
        >
          <img :src="authData.user.avatar">
        </v-avatar>
        <v-icon small>
          $chevronDown
        </v-icon>
      </div>
    </template>
    <v-list
      class="py-0"
      dense
    >
      <v-list-item link>
        <v-list-item-title>My Settings</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-if="authData.ministries.length"
        link
      >
        <v-list-item-title>Switch Ministry</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list-item link>
        <v-list-item-title>Sign Out</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style lang="scss">
.v-menu--user {
  align-items: center;
  display: flex;
  height: 100%;

  &__content {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  &[aria-expanded="true"] {
    background-color: rgba(255, 255, 255, 0.08);
    .v-icon {
      transform: rotate(-180deg);
    }
  }
}
</style>
