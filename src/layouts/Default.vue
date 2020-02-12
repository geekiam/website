<template>
  <div>
   <Header></Header>
      <div

              class="layout"
      >
          <br/>
          <br/>
    <slot class="mt-5 p-5"/>
      </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

</style>
<script>
  import Header from "../components/Header.vue";
  export default {
    components: {Header}
  }
</script>
