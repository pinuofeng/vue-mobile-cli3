<template>
    <div class="page-container">

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <!-- 底部菜单 -->
        <div class="bottom_tabbar">
            <main-tab-bar></main-tab-bar>
        </div>

    </div>
</template>

<script>
    import MainTabBar from 'components/MainTabBar.vue'
    export default {
        name: "MainPage",
        components: {MainTabBar}
    }
</script>

<style scoped>

    .page-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .bottom_tabbar {
        display: flex;
        height: 50px;
    }

</style>