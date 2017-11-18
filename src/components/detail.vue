<template>
  <section>
    <section class="main">
      <h2>記事</h2>
      <article>
        <div class="hi-Logo">
          <div class="apollo">
            <div class="hi-ArticleTitle">
            <span>
               {{ Article.articleTitle }}
            </span>
            </div>
          </div>
          <div class="hi-ArticleTitleSub">
            <div class="hi-ArticleCategory">
              <span>ss</span>
            </div>
            <div class="hi-ArticleTime">
              <span>{{ Article.createdAt }}</span>
            </div>
          </div>
          <img class="hi-Logo_Svg" v-bind:src="Article.articleImage.url" >
          <diV class="content">
            <div v-html=Article.articleContent >
            </div>
          </diV>
        </diV>
      </article>
    </section>
  </section>
</template>

<script>
  import gql from 'graphql-tag'

  // Vue component definition
  export default {
    data: function () {
      return {
        Article: {},
        requestId: this.$route.params.id
      }
    },
    apollo: {
      // Query with parameters
      Article: {
        // gql query
        query: gql`
         query articleDetails($requestId: String ){
          Article(articleSlug: $requestId){
            createdAt
            articleImage{
              url
            }
            articleTitle
            articleContent
          }
         } `,
        // Static parameter
        variables () {
          return {
            requestId: this.$route.params.id
          }
        },
        prefetch: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    margin: 10%
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
  .hi-Logo {
    margin-left: 5%;
    margin-right: 5%;
    display: block;
    float: left;
    width: 80%;
  }
  .hi-Logo_Svg {
    width: 100%;
  }
  .hi-ArticleTitle {
    padding: 2%;
  }
  .hi-ArticleTitle span{
    font-size: 17px;
  }
  .hi-ArticleCategory {
    display: block;
    float: left;
    width: 50%;
  }
  .hi-ArticleTime {
    display: block;
    float: left;
    width: 50%;
  }
</style>
