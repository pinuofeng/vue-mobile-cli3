<template>
    <div class="login-page">
        <div class="center-container">
            <div class="logo"></div>
            <div class="form-container">
                <input class="form-input" type="text" placeholder="手机号" v-model="username">
                <input class="form-input" type="password" placeholder="密码" v-model="password">
                <van-button class="form-btn" text="登录" :loading="isLoading" loading-text="登录中" @click="login"></van-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                isLoading: false,
                username: 'pinuo',
                password: '123456'
            }
        },
        methods: {
            login(){
                this.isLoading = true;
                setTimeout(()=>{
                    this.$router.replace('/Discover');
                    this.isLoading = false;
                },1500);
            }
        }
    }
</script>

<style scoped>

    .login-page {
        display: flex;
        justify-content: center;
        height: 100%;
        font-size: 15px;
        color: #fafafa;
        background-color: #242424;
    }

    .center-container {
        width: 260px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 60px;
    }

    .logo {
        width: 170px;
        height: 45px;
        margin: 0 0 15px -10px;
        background: url("./../assets/img/logo.png") no-repeat 0 100% / 100% 100%;
    }

    .form-container {
        width: 250px;
    }

    .form-input {
        width: 100%;
        height: 37px;
        line-height: 37px;
        border: 1PX solid #fafafa;
        margin-bottom: 20px;
        border-radius: 37px;
        padding: 0 10px;
        outline: none;
        background: transparent;
    }

    .form-btn {
        width: 100%;
        height: 45px;
        line-height: 45px;
        border: 0;
        border-radius: 45px;
        color: #fafafa;
        background-color: #E60026;
    }


</style>
