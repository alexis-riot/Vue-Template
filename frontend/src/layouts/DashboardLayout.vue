<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <side-bar :background-color="sidebarBackground" short-title="Argon" title="Argon">
            <template slot="links">
                <sidebar-item :link="{name: 'Dashboard', icon: 'ni ni-tv-2 text-primary', path: '/'}"/>
                <sidebar-item :link="{name: 'About', icon: 'ni ni-planet', path: '/about'}"/>
                <sidebar-divider :link="{name: 'Profil'}"></sidebar-divider>
                <sidebar-item :link="{name: 'Se connecter', icon: 'ni ni-lock-circle-open', path: '/login'}"/>
            </template>
        </side-bar>
        <div class="main-content" :data="sidebarBackground">
            <dashboard-navbar></dashboard-navbar>
            <div @click="toggleSidebar">
                <fade-transition :duration="200" origin="center top" mode="out-in">
                    <!-- your content here -->
                    <router-view></router-view>
                </fade-transition>
                <content-footer v-if="!$route.meta.hideFooter"></content-footer>
            </div>
        </div>
    </div>
</template>
<script>
    import DashboardNavbar from './dashboard/DashboardNavbar.vue';
    import ContentFooter from './dashboard/ContentFooter.vue';
    import { FadeTransition } from 'vue2-transitions';

    export default {
        components: {
            DashboardNavbar,
            ContentFooter,
            FadeTransition
        },
        data() {
            return {
                sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
            };
        },
        methods: {
            toggleSidebar() {
                if (this.$sidebar.showSidebar) {
                    this.$sidebar.displaySidebar(false);
                }
            }
        }
    };
</script>
<style lang="scss">
</style>
