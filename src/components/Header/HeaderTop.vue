<template>
    <div class="header_top">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-4">
                    <p class="address">3658 S. Wentworth Ave, Chicago, IL 60609</p>
                </div>
                 <div class="col-md-6 col-8">
                     <div class="follow_us">
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            <li><i @click="setLayout('admin-layout')" class="fas fa-sign-in-alt" style="color: #a5afbb"></i></li>
                        </ul>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        setLayout(layout) {
            this.$store.commit('TOGGLE_MODAL')
        }
    }
}
</script>

