<template>
  <header id="header" >
  <v-toolbar fixed="true" scrollOffScreen="true" class="header" >
    <v-btn class="btn-cl" flat router-link v-bind:to="{ name : 'index'}">
      <img src='../assets/logo.svg' class='logo'>
      恵比寿ガーデングランピング
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="btn-cl" flat router-link v-bind:to="{ name : 'index-about'}">About</v-btn>
      <v-btn class="btn-cl" flat router-link v-bind:to="{ name : 'index-price'}">Price</v-btn>
      <v-btn class="btn-cl" flat router-link v-bind:to="{ name : 'index-access'}">Access</v-btn>
      <v-btn class="btn-cl" flat router-link v-bind:to="{ name : 'index-photo'}">Photo</v-btn>
      <v-btn class="btn-cl" flat router-link v-bind:to="{ name : 'howtouse'}">How to Use</v-btn>
      <v-btn class="btn-cl" color="orange darken-3" router-link v-bind:to="{ name : 'reservation'}">Reservation</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </header>
</template>


<style scoped>
  .logo{
    height: 70px;
    width: 70px;
  }
  .header{
    height: 70px;
    background-color: rgba(0, 0, 0, 0.53)
  }
  .btn-cl{
    color: white;
    font-weight: bold;
  }
</style>
