<template>
  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex  align-items-baseline">
        <h2>Все статьи</h2>
      </div>

      <div class="row">
        <div class="col-3 mb-3" v-for="article in list.articles">
          <div>
            <div class="card">
              <img class="card-img-top" src="@/assets/images/placeholder-blue.png" alt="placeholder">
              <div class="card-body">
                <p class="card-text">
                  <small class="text-muted">{{ article.date }}</small>
                </p>

                <h5 class="card-title">{{ article.name }}</h5>
                <p class="card-text">{{article.description}}</p>

                <a @click="$router.push({
                  name: 'id',
                  params: {
                    id: article.id
                  }
                })" class="btn btn-primary">Читать</a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  </div>
</template>

<script>
  import articles from '@/assets/js/data.js';
  export default {
    data() {
      return {
        list: articles
      }
    },
    methods: {
      spliceArr(){
        this.list.articles.sort((a, b) => a.date.localeCompare(b.date));
        this.list.articles.reverse();
      }
    },
    beforeMount(){
      this.spliceArr()
    }
  }
</script>

<style lang="scss" scoped>

</style>