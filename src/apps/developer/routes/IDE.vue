<script>
import SpringboardIcon from '../../../components/SpringboardIcon.vue'

export default {
  components: {
    SpringboardIcon
  },
  data: () => ({
    manifest: {},
    payloadAddress: 'http://127.0.0.1:8080/manifest.json'
  }),
  computed: {
    signature () {
      return btoa(this.manifest.id).replace(/=/g, '')
    }
  },
  methods: {
    // return new Promise((resolve, reject) => {
    //   const script = document.createElement('script');
    //   script.src = url;
    //   script.async = true;
    //   script.onload = () => resolve(window['external_global_component']); // base64 "id"
    //   script.onerror = reject;

    //   document.body.appendChild(script);
    // });
    async loadManifest () {
      const headers = new Headers()
      headers.append('pragma', 'no-cache')
      headers.append('cache-control', 'no-cache')

      const module = await fetch(this.payloadAddress, { method: 'GET', headers })
      this.manifest = await module.json()
      console.log(this.manifest)
    }
  }
}
</script>

<template>
  <v-container>
    <h1>Developer IDE</h1>
    <p>
      Build and develop your own extensions to run inside of the Bethel platform.
      Test your extension locally by entering the location of your extension manifest below.
      This can be a copy of your extension running locally or deployed on a web server.
      Once you're finished you can install for all users in your Ministry or make it available for others to use!
    </p>
    <v-text-field
      v-model="payloadAddress"
      label="Location of Manifest"
      outlined
    />
    <v-btn @click="loadManifest">Load</v-btn>
    <springboard-icon width="128" :icon="manifest.icon" />
    <b>{{ manifest.displayName }}</b>
    <small>{{ signature }}</small>
  </v-container>
</template>
