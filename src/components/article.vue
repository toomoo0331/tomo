<template>
    <section class="content">
      <section class="main">
        <h2>新着記事</h2>
        <article v-for="post in allArticles" class="ha-Logo">
          <router-link v-bind:to="{ name : 'article', params : { id: post.articleSlug}}" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYt24Oj5ZFR_EpkwAwdY_v1cH60nVEExEZzzPu1s-Jxq_eTcDq" class="he-Logo_Svg"/>
            <div class="ha-ArticleTitle">
              {{post.updatedAt}}
              {{post.articleTitle}}
            </div>
          </router-link>
          <div class="ha-ArticleTitleSub">
            <div class="ha-ArticleTime">
              <span>2017/10/28</span>
            </div>
          </div>
        </article>
      </section>
    </section>
    <!-- sidebar部分　後で直す -->
    <!-- 後で直す　-->
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'article',
    data () {
      return {
        allArticles: []
      }
    },
    apollo: {
      allArticles: {
        query: gql`
          {
            allArticles {
              id
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    display: block;
    float: left;
    width: 70%;
  }
  .main, .recommend {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    display: block;
    float: left;
    background-color: #ebebeb;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .ha-Logo {
    margin: 5%;
    display: block;
    float: left;
    width: 23%;
    background-color: #fffdfe;
  }
  .he-Logo_Svg {
    width: 100%;
  }
  .ha-ArticleTitle span{
    font-size: 17px;
  }
  .ha-ArticleTime {
    display: block;
    float: left;
    width: 50%;
  }
  .ha-ArticleCategory {
    display: block;
    float: left;
    width: 50%;
  }
  /* header のとこ後で直す */
  nav {
    display: block;
    float: left;
  }
  .moso-Logo {
    width: 10%;
    float: left
  }
  .moso-Logo_Svg {
    width: 100%;
  }
  .he-Logo_Svg {
    width: 100%;
  }
  .he-Nav_Item {
    display: block;
    float: right;
    width: 15%
  }
  /* sidebar のとこ後で直す*/
  aside {
    float: right;
    width: 22%;
    margin-left: 3%;
    margin-right: 5%;
    margin-top: 3%;
  }
  .ha-Relation {
    margin-bottom: 10%;
    display: block;
    float: left;
  }
  .he-Relation_Svg {
    display: block;
    float: left;
    width: 30%;
  }
  .ha-title span{
    font-size: 17px;
  }
  .hah-title {
    display: block;
    float: left;
    width: 66%;
    margin: 2%;
  }
  .hah-category {
    display: block;
    float: right;
    width: 40%;
  }
  .hah-date {
    display: block;
    float: left;
    width: 30%;
  }
</style>
