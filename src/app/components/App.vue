<template>
<div class="page-container">
    <md-app>
        <md-app-toolbar class="md-primary" md-elevation="0">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Title</span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
            <md-toolbar class="md-transparent" md-elevation="0">
                <span>Navigation</span>

                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button md-dense" @click="toggleMenu">
                        <md-icon>keyboard_arrow_left</md-icon>
                    </md-button>
                </div>
            </md-toolbar>
            <sidebar/>

        </md-app-drawer>

        <md-app-content>
            <router-view></router-view>
        </md-app-content>


    </md-app>
    <footer-vue>
    </footer-vue>


</div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import FooterVue from './FooterVue.vue';
export default {
    components: {
        Sidebar,
        FooterVue
    },
    name: 'PersistentMini',
    data: () => ({
        menuVisible: false
    }),
    methods: {
        toggleMenu() {
            this.menuVisible = !this.menuVisible
        }
    }
}
</script>

<style lang="scss" scoped>
.md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
}

// Demo purposes only
.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
}
.footer-public {
    margin-top: 80px;
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 13px;
    color: #5f6472;
    border-top: 1px solid #303542;
    background-color: transparent;
}
</style>
