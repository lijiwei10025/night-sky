<template>
  <div id="app">
    <!--  -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!--  -->
    <Footer />
  </div>
</template>

<script>
import Footer from './components/footer/Footer'
export default {
  components: {
    Footer,
  }
}
</script>

<style>

</style>
