<template>
    <header id="header" class="nav-stacked">
        <header-top></header-top>
        <header-nav></header-nav>
    </header>
</template>
<script>
import HeaderTop from './HeaderTop.vue'
import HeaderNav from './HeaderNav.vue'
export default {
    name: 'header-container',
    components: {
        HeaderTop,
        HeaderNav
    }
}
</script>
