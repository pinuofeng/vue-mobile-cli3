<template>
    <div class="page-container">
        404页面: {{$route.redirectedFrom}}
    </div>
</template>

<script>
    export default {
        name: 'NotFoundPage',
        props: {},
        data(){
            return {}
        },
        components: {},
        mounted() {

        },
        methods: {

        },
        computed: {}
    }
</script>

<style scoped lang="scss">

    .page-container {
        width: 100%;
        height: 100%;
        background-color: #FEC171;
    }

</style>
