<template>
    <mdb-navbar class="navbar-light lighten-5 flexible-navbar"
                color="orange"
                expand="large"
                position="top"
                :toggler="false"
                scrolling

    >
        <mdb-navbar-brand href="https://sourcelink.co.uk" style="padding-left: 150px" target="_blank">

        </mdb-navbar-brand>

        <mdb-navbar-nav class="nav-flex-icons" right>
            <mdb-nav-item :to="{ name: 'login' }" v-if="!user" waves-fixed>Login</mdb-nav-item>
            <mdb-dropdown v-else tag="li" class="nav-item">
                <mdb-dropdown-toggle tag="a"
                                     navLink slot="toggle"
                                     waves-fixed><mdb-icon icon="user-circle" /></mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                    <mdb-dropdown-item :to="{ name: 'account'}">
                        <mdb-icon icon="user-cog" class="icon-padding" />
                        Account Settings
                    </mdb-dropdown-item>
                    <mdb-dropdown-item @click="logout">
                        <mdb-icon icon="sign-out-alt"  class="icon-padding"  />
                        Logout
                    </mdb-dropdown-item>
                </mdb-dropdown-menu>
            </mdb-dropdown>
        </mdb-navbar-nav>
    </mdb-navbar>
</template>

<script>
    import {
        mdbNavbar,
        mdbNavbarBrand,
        mdbNavbarNav,
        mdbNavItem,
        mdbDropdown,
        mdbDropdownItem,
        mdbDropdownToggle,
        mdbDropdownMenu,
        mdbIcon,
    } from 'mdbvue';

    export default {
        name: "Header",
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarNav,
            mdbNavItem,
            mdbDropdown,
            mdbDropdownItem,
            mdbDropdownToggle,
            mdbDropdownMenu,
            mdbIcon,
        },
    }
</script>

<style scoped>

</style>
