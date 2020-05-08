<script>
import Logo from '../components/Logo'

export default {
  name: 'RouteLogin',
  components: {
    Logo
  },
  inject: ['theme'],
  data: () => ({
    form: {
      email: '',
      password: ''
    },
    error: false,
    show: false
  }),
  watch: {
    form: {
      deep: true,
      handler () {
        this.error = false
      }
    }
  },
  methods: {
    async login () {
      this.error = false
      if (!await this.$auth.login(this.form)) {
        this.error = true
        return
      }

      this.$router.push('/')
    }
  }
}
</script>

<template>
  <v-row
    align="center"
    justify="center"
    style="height: 100%"
  >
    <v-card
      class="v-card__login pa-7"
      width="450"
    >
      <form @submit.prevent="login">
        <v-row justify="center">
          <logo size="64" />
        </v-row>
        <v-card-title class="pt-6 justify-center">
          Welcome back!
        </v-card-title>
        <v-card-subtitle class="text-center">
          Sign in to your Bethel account
        </v-card-subtitle>
        <v-card-text class="pt-3 pb-0">
          <v-text-field
            v-model="form.email"
            :error="error"
            autocomplete="username"
            label="Email"
            outlined
          />
          <v-text-field
            v-model="form.password"
            :append-icon="show ? '$hide' : '$show'"
            :error-messages="error ? 'E-mail or password incorrect' : null"
            :type="show ? 'text' : 'password'"
            autocomplete="current-password"
            label="Password"
            outlined
            @click:append="show = !show"
          />
        </v-card-text>
        <v-card-actions class="pt-0 pl-2 pr-4">
          <v-btn color="primary" text>
            Create account
          </v-btn>
          <v-spacer />
          <v-btn
            :dark="!theme.isDark"
            :light="theme.isDark"
            type="submit"
            color="primary"
            depressed
          >
            Next
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-row>
</template>

<style lang="scss">
.v-card__login button.v-btn {
  text-transform: none;
  letter-spacing: 0.25px;
  font-weight: 600;

  &.theme--light {
    color: #1E1E1E;
  }
}
</style>
