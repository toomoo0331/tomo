<template>
  <v-app>
    <div id="app" >
    <headerItem></headerItem>
    <router-view/>
    <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
  import headerItem from './components/top-item'
  import Footer from './components/footer'

  export default {
    name: 'app',
    components: {
      headerItem,
      Footer
    },
    created () {
      this.$apollo.watchQuery({
        /* options */
      }).then(data => {
        console.log(data)
      })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 0;
  width: 100%;
}
  headerItem{
    height:10%;
  }
</style>
