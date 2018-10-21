<template>
  <div>
    <header-container></header-container>
    <modal></modal>
    <router-view/>
    <footer-container></footer-container>
  </div>
</template>
<script>
import HeaderContainer from '../components/Header/HeaderContainer.vue'
import FooterContainer from '../components/Footer/FooterContainer.vue'
import Modal from '../components/modal/Modal.vue'
export default {
  name: 'public-layout',
  components: {
    HeaderContainer,
    FooterContainer,
    Modal
  }
}
</script>