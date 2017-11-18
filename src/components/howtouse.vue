<template>
  <div>
    <main>
      <section>
        <v-parallax src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg" class='img-responsive'>
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">How To Use</h1>
            <div class="subheading mb-3 text-xs-center">当日の使い方</div>
          </v-layout>
        </v-parallax>
      </section>

      <v-flex xs12>
       <v-container grid-list-xl>
          <v-layout row wrap justify-center>
            <v-flex xs12 md6>
              <v-card flat class="transparent">
                <img src='https://vuetifyjs.com/static/doc-images/parallax/material.jpg' class='img-responsive'>
              </v-card>
            </v-flex>
            <v-flex xs12 md6>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">①<br>受付</div>
                </v-card-title>
                <v-card-text>
                  利用時間10分前から～
                </v-card-text>
                利用開始10分前から受付が出来ます。<br>
                階段をのぼり2階の玄関前のチャイムを押してください。<br>
                スタッフがお伺いします。
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
      </v-flex>
      <section>

      </section>

      <section>
        <v-flex xs12>
        <v-container grid-list-xl>
            <v-layout row wrap justify-center>
              <v-flex xs12 md6>
                <v-card flat class="transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">②<br>利用</div>
                  </v-card-title>
                  <v-card-text>
                    利用時間中
                  </v-card-text>
                  利用開始10分前から受付が出来ます。<br>
                  階段をのぼり2階の玄関前のチャイムを押してください。<br>
                  スタッフがお伺いします。
                </v-card>
              </v-flex>
              <v-flex xs12 md6>
                <v-card flat class="transparent">
                  <img src='https://vuetifyjs.com/static/doc-images/parallax/material.jpg' class='img-responsive'>
                </v-card>
              </v-flex>
            </v-layout>
        </v-container>
        </v-flex>
      </section>

      <section>
        <v-flex xs12>
         <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">
              <v-flex xs12 md6>
                <v-card flat class="transparent">
                  <img src='https://vuetifyjs.com/static/doc-images/parallax/material.jpg' class='img-responsive'>
                </v-card>
              </v-flex>
              <v-flex xs12 md6>
                <v-card flat class="transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">③<br>片付け</div>
                  </v-card-title>
                  <v-card-text>
                    利用終了30分前から～利用終了
                  </v-card-text>
                  利用終了時刻30分前を目安にかたづけを始めてください。<br>
                  使った食器などは洗ったうえで元あった場所にもどしてください<br>
                  片付けが終了次第スタッフをおよびください<br>
                  スタッフが確認後、利用の終了となります。
                </v-card>
              </v-flex>
            </v-layout>
         </v-container>
        </v-flex>
      </section>
    </main>
  </div>
</template>
