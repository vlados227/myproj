<template>
   <div class="container">
    <section class="py-5">
      <h2 class="mb-4">{{article.name}}</h2>

      <img class="mb-4 w-100" src="@/assets/images/placeholder-blue.png" alt="placeholder">

      <p>
        {{article.description}}
      </p>
    </section>
  </div>
</template>

<script>
import articles from '@/assets/js/data.js';
  export default {
    data() {
      return {
        list: articles,
        id: this.$route.params.id,
        article: {},
      }
    },
    methods: {
      findObj(arr){
         this.article = arr.find(item => item.id == this.id)
      }
    },
    beforeMount() {
      this.findObj(this.list.articles)
    }
  }
</script>

<style lang="scss" scoped>

</style>