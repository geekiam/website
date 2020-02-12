<template>
    <mdb-navbar class="navbar-light lighten-5 flexible-navbar"
                color="black"
                expand="large"
                position="top"
                :toggler="false"
                scrolling

    >
        <mdb-navbar-brand href="https://geekiam.co.uk" style="padding-left: 150px" target="_blank">

        </mdb-navbar-brand>


    </mdb-navbar>
</template>

<script>
    import {
        mdbNavbar,
        mdbNavbarBrand,
        mdbNavbarNav
    } from 'mdbvue';

    export default {
        name: "Header",
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarNav
        },
    }
</script>

<style scoped>

</style>
