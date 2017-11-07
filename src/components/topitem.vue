<template>
  <header id="header">
    <v-container fluid>
      <v-layout row>
        <v-flex xs3>
          <v-card dark tile flat color="error">
            <v-card-text>#1</v-card-text>
          </v-card>
        </v-flex>


        <v-flex xs9>
          <v-card height="55px">
            <v-bottom-nav
              absolute
              shift
              :value="true"
              :active.sync="e2"
              :class="{
          'blue-grey': e2 === 1,
          'teal': e2 === 2,
          'brown': e2 === 3,
          'brown lighten-1': e2 === 4
        }"
            >
              <v-btn dark>
                <span>Video</span>
                <v-icon>ondemand_video</v-icon>
              </v-btn>
              <v-btn dark>
                <span>Music</span>
                <v-icon>music_note</v-icon>
              </v-btn>
              <v-btn dark>
                <span>Book</span>
                <v-icon>book</v-icon>
              </v-btn>
              <v-btn dark>
                <span>Image</span>
                <v-icon>image</v-icon>
              </v-btn>
            </v-bottom-nav>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>
