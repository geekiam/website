<template>
  <nav class="flex-shrink-0 dark:bg-gray-900 bg-gray-100">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Logo section -->
        <div class="flex items-center px-2 lg:px-0 xl:w-64">
          <div class="flex-shrink-0">
            <Logo />
          </div>
        </div>

        <!-- Search section -->

        <searchbox />

        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <button
            class="bg-green-600 inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: menu-alt-1

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- Links section -->
        <div class="hidden lg:block lg:w-80">
          <div class="flex items-center justify-end">
            <!--            <div class="flex">-->
            <!--&lt;!&ndash;              <a&ndash;&gt;-->
            <!--&lt;!&ndash;                href="#"&ndash;&gt;-->
            <!--&lt;!&ndash;                class="px-3 py-2 rounded-md text-sm font-medium text-green-200 hover:text-white"&ndash;&gt;-->
            <!--&lt;!&ndash;                >Documentation</a&ndash;&gt;-->
            <!--&lt;!&ndash;              >&ndash;&gt;-->
            <!--&lt;!&ndash;              <a&ndash;&gt;-->
            <!--&lt;!&ndash;                href="#"&ndash;&gt;-->
            <!--&lt;!&ndash;                class="px-3 py-2 rounded-md text-sm font-medium text-green-200 hover:text-white"&ndash;&gt;-->
            <!--&lt;!&ndash;                >Support</a&ndash;&gt;-->
            <!--&lt;!&ndash;              >&ndash;&gt;-->
            <!--            </div>-->
            <!-- Profile dropdown -->
            <div class="ml-4 relative flex-shrink-0">
              <div>
                <button
                  id="user-menu"
                  class="bg-green-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <!--                  <img-->
                  <!--                    class="h-8 w-8 rounded-full"-->
                  <!--                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"-->
                  <!--                    alt=""-->
                  <!--                  />-->
                  <svg
                    class="w-8 h-8 rounded-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
              <div
                class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100"
                  role="menuitem"
                  >View Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100"
                  role="menuitem"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100"
                  role="menuitem"
                  >Logout</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
    <div class="hidden lg:hidden">
      <div class="px-2 pt-2 pb-3">
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-green-800"
          >Dashboard</a
        >
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-green-200 hover:text-green-100 hover:bg-green-600"
          >Support</a
        >
      </div>
      <div class="pt-4 pb-3 border-t border-green-800">
        <div class="px-2">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-green-200 hover:text-green-100 hover:bg-green-600"
            >Your Profile</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-green-200 hover:text-green-100 hover:bg-green-600"
            >Settings</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-green-200 hover:text-green-100 hover:bg-green-600"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '../Logo'
import Searchbox from '../Searchbox'
export default {
  name: 'Header',
  components: { Searchbox, Logo },
}
</script>
