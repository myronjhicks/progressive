<template>
    <nav id="navigation_bar" class="navbar navbar-default">
        <div class="container">
        <div class="navbar-header">
            <div class="logo"> 
                <router-link to="/"><img src="../../assets/images/logo-nav.svg" alt="image"></router-link> 
            </div> <!-- /Logo -->
            <button id="menu_slide" data-target="#navigation" aria-expanded="false" data-toggle="collapse" class="navbar-toggle collapsed" type="button"> 
                <span class="icon-bar"></span> 
                <span class="icon-bar"></span> 
                <span class="icon-bar"></span> 
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navigation">
            <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li class="dropdown"><a href="#">About <span class="nav_arrow"></span></a>
                <ul class="sub-menu">
                    <li><router-link to="/about">About Progressive</router-link></li>
                    <li><router-link to="/our-pastor">Our Pastor</router-link></li>
                    <li><router-link to="/100">100 Years</router-link></li>
                 </ul>
            </li>
            <li><router-link to="/events">Events</router-link></li>
            <li class="dropdown"><a href="#">Media <span class="nav_arrow"></span></a>
                <ul class="sub-menu">
                    <li><router-link to="/livestream">Watch Live</router-link></li>
                    <li><router-link to="/livestreams">Previous Sermons</router-link></li>
                </ul>
            </li>
            <li><router-link to="/ministries">Ministries</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link class="btn dark-btn" to="/give">Give</router-link></li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'header-nav'
}
</script>

<style>

</style>
