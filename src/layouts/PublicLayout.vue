<template>
  <div>
    <header-container></header-container>
    <router-view/>
    <footer-container></footer-container>
  </div>
</template>
<script>
import HeaderContainer from '../components/Header/HeaderContainer.vue'
import FooterContainer from '../components/Footer/FooterContainer.vue'
export default {
  name: 'public-layout',
  components: {
    HeaderContainer,
    FooterContainer
  }
}
</script>