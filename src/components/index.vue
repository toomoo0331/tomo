<template>
  <div>
    <main>
      <v-content>
        <section id="top">
          <v-parallax src=https://imgcp.aacdn.jp/img-a/1200/900/aa/gm/article/4/6/3/6/7/8/201605020005/topimg_original.jpg height="1000" jumbotron >
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
                <h1 class="white--text mb-2 display-1 text-xs-center">恵比寿ガーデングランピング</h1>
                <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
              <v-btn
                class="mt-5"
                color="grey darken-4"
                dark
                large
                href="/pre-made-themes"
              >
                Reservation
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <section class="content">
          <section class="main">
            <h2>新着記事</h2>
            <article v-for="post in allArticles" class="ha-Logo">
              <div class="ha-ArticleTime">
                {{post.updatedAt}}
              </div>
              <router-link v-bind:to="{ name : 'detail', params : { id: post.articleSlug}}" >
                <div class="ha-ArticleTitle">
                  {{post.articleTitle}}
                </div>
              </router-link>
            </article>
          </section>
        </section>

        <section>
          <v-layout
            column
            wrap
            class="my-0"
            align-center
            background-color: grey lighten-3
          >
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md6>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">group</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">ホームパーティ</div>
                      </v-card-title>
                      <v-card-text>
                        恵比寿の真ん中で、空が綺麗なホームパーティを。
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">restaurant</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">バーベキュー</div>
                      </v-card-title>
                      <v-card-text>
                        恵比寿の真ん中で、グランピング体験を
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md12>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">star</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">星鑑賞</div>
                      </v-card-title>
                      <v-card-text>
                        恵比寿で見れる美しい星
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>


        <Section>
          <v-parallax src="http://ichirino.jp/enjoy/img/grampingpic_01.jpg" height="300">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
              <h1 class="white--text mb-2 display-1 text-xs-center">About</h1>
            </v-layout>
          </v-parallax>
        </Section>

        <article class="About">
          <section id="about" class="about">
            <header class="about-header">
              <h3 class="about-title">東京、恵比寿<br>
                誰もが知り、誰もが憧れるこの街で、誰もがうらやむグランピング体験を
              </h3>
            </header>

            <div class="about-content">
              <dt class="about-item">
                恵比寿の一軒家の屋上をフルリノベーションしたグランピング施設。<br>
                <br>
                利用の仕方はあなた次第。<br>
                BBQも、映画の上映会も、合コンだってよし。<br>
                <br>
                あなただけのあなたに合った方法で、恵比寿のラグジュアリーな時間をお過ごしください。<br>
                <br>
                <br>
              </dt>
            </div>
          </section>
        </article>


        <Section>
          <v-parallax src="http://ichirino.jp/enjoy/img/grampingpic_01.jpg" height="300">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
              <h1 class="white--text mb-2 display-1 text-xs-center">Price</h1>
            </v-layout>
          </v-parallax>
        </Section>

        <Section id="price" class = "price">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                  <v-flex xs12 md6>
                    <v-card flat class="transparent">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Price</div>
                      </v-card-title>
                      <v-card-text>
                        利用料金は表の通りです。<br><br><br>
                      例）土曜日に16：00∼20：00で利用する場合<br>
                      3000円×1h + 3500円×3h = 13500円<br>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-card flat class="transparent">
                      <img src='../assets/price.png' class='img-responsive'>
                      <br>
                    ※すべて1時間あたりの値段
                    </v-card>
                  </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </Section>



        <Section id="photo" class="photo">
          <v-carousel icon="stop">
            <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>

          </v-carousel>


        </Section>

        <Section id="access">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md6>
                  <v-card flat class="transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Access</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    <br><br><br>

                          <v-icon class="blue--text text--lighten-2">phone</v-icon>
                       777-867-5309<br><br>

                          <v-icon class="blue--text text--lighten-2">place</v-icon>
                       Chicago, US<br><br>
                          <v-icon class="blue--text text--lighten-2">email</v-icon>
                       <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1973767177596f6c7c6d707f60736a377a7674">[email&#160;protected]</a></v-list-tile-title>
                        <br>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E6%81%B5%E6%AF%94%E5%AF%BF3-38-1&key=AIzaSyCGqo_TQL6yDA7hYSaMHACb2LfhFaHjrMU" allowfullscreen>

                  </iframe>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </Section>


      </v-content>
    </main>

  </div>
</template>



<script>
  import gql from 'graphql-tag'
  export default {
    name: 'article',
    data () {
      return {
        allArticles: [],
        items: [
          {
            src: 'http://camphack.nap-camp.com/wp-content/uploads/2017/02/2a514cbdc5e35a1b1311d07d18c0eb2e.jpg'
          },
          {
            src: 'https://www.syufeel.com/wp-content/uploads/2017/02/elcolina_s096_13.jpg'
          },
          {
            src: 'http://www.hoshinoresort.com/sp/glamping/common/images/sp/ph_main_begin.jpg'
          },
          {
            src: 'http://image.news.livedoor.com/newsimage/2/2/229d5_1620_599a83da_3716291d.jpg'
          }
        ]
      }
    },
    apollo: {
      allArticles: {
        query: gql`
          {
            allArticles {
              articleSlug
              articleTitle
              updatedAt
            }
          }
        `,
        // note that we're using "prefetch" here
        // it will let apolloProvider know that
        // we also want to fetch this content server side
        prefetch: true
      }
    }
  }
</script>

<style scoped>
  .About{
    background-color: #fff;
    height: auto;
  }
  .about-header{
    padding: 70px 0 70px 0;
    text-alogin: center;
  }
  .about-title{
    position: relative;
    display: inline-block;
  }

  .heading[id]::before {
    content: "";
    display: block;
    height: 8rem;
    margin-top: -8rem;
    visibility: hidden;
  }

  .price{
    height: auto;
    padding:70px 0 70px 0;
    width: auto;
  }

  .photo{
    height:auto
  }

  .content{
    height: 400px;
  }
</style>
