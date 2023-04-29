<template>
  <div id="app" :data-theme="theme">
    <router-view />
  </div>
</template>
<script>
import Utils from './utils';
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState('conf', ['theme']),
  },
  mounted() {
    let link = document.createElement("link");
    link.type = "text/css";
    link.id = "theme";
    link.rel = "stylesheet";
    let theme = Utils.getCache('theme', 'cookie') || 'default'
    link.href = `./theme/${theme}.css`;
    document.getElementsByTagName("head")[0].appendChild(link);
    this.settheme({ theme })
    this.certificate()
  },
  methods: {
    ...mapMutations('conf', ['settheme']),
    certificate() {
      const userInfo = Utils.getCache("userInfo", 'session')
      !userInfo && this.$router.push({ path: `/` });
    }
  }

};
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

* {
  scrollbar-color: #878a93 #5e636e;
  scrollbar-width: thin;
  -ms-overflow-style: none;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // @include filter("filterGrayscale");
}
</style>
