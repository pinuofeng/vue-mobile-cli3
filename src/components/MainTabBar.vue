<template>
    <van-tabbar v-model="active" active-color="#E60026" class="tabbar" @change="tabChange">
        <van-tabbar-item replace to="/Discover">
            <span>发现</span>
            <img
                    class="icon"
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? main.active : main.normal"
            >
        </van-tabbar-item>
        <van-tabbar-item  replace to="/Mine">
            <span>我的</span>
            <img
                    class="icon"
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? music.active : music.normal"
            >
        </van-tabbar-item>
        <van-tabbar-item  replace to="/Account">
            <span>账号</span>
            <img
                    class="icon"
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? mine.active : mine.normal"
            >
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        name: "MainTabBar",
        data(){
            return {
                active: 0,
                main: {
                    normal: require('assets/img/main_normal.png'),
                    active: require('assets/img/main_active.png')
                },
                music: {
                    normal: require('assets/img/music_normal.png'),
                    active: require('assets/img/music_active.png')
                },
                mine: {
                    normal: require('assets/img/mine_normal.png'),
                    active: require('assets/img/mine_active.png')
                }
            }
        },
        methods: {
            tabChange(active){

            }
        }
    }
</script>

<style scoped>

    .tabbar {
        border-top: 1PX solid #ccc;
    }

    .icon {
        width: 20px;
        height: 20px;
    }

</style>