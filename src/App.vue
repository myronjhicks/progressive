<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>
<script>
import PublicLayout from './layouts/PublicLayout.vue'
import AdminLayout from './layouts/AdminLayout.vue'
export default {
  computed: {
    layout() {
      return this.$store.getters.layout
    },
  },
  components: {
    'public-layout': PublicLayout,
    'admin-layout' : AdminLayout
  }
}
</script>
