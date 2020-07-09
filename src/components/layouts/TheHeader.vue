<template>
    <div class="navbar navbar-default topnav">
        <div class="container">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">
                    <span class="title">{{ logo.title }}</span>
                    <img :src="logo.src" :alt="logo.title">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheHeader',
        data() {
            return {
                logo: {
                    src: `${this.uploadsUrl}/src/assets/components/header/images/logo_02-8ef07cc6ad.png`,
                    title: '30秒懂车 Vue.js'
                }
            }
        },
        beforeCreate() {
            this.uploadsUrl = 'https://www.30sche.com'
        }
    }
</script>

<style scoped>
    .title { display: none;}
</style>