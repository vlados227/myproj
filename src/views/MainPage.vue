<template>
  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Актуальное</h2>
        <router-link to="/all"><button class="btn btn-sm btn-primary">Все статьи</button> </router-link>
      </div>

      <div class="row">
        <div class="col-3" v-for="article in list2">
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

    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Случайная статья</h2>
      </div>

      
      <a @click="$router.push({name: 'id',
        params: {
          id: rArticle.id
        } })
      " class="card bg-dark text-white">
        <img class="card-img" src="@/assets/images/placeholder-blue.png" alt="placeholder">
        <div class="card-img-overlay">
          <h5 class="card-title">{{rArticle.name}}</h5>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
import articles from '@/assets/js/data.js';
//import Article from './Article.vue';
export default {
  data() {
    return {
      list: articles,
      list2: [],
      rArticle: {},
    }
  },
  methods: {
    spliceArr(){
      this.list.articles.sort((a, b) => a.date.localeCompare(b.date));
      this.list.articles.reverse();
      this.list2 = this.list.articles.slice();
      this.list2.splice(4);
      this.rArticle = this.list.articles[Math.floor(Math.random()*this.list.articles.length)]
    }
  },
  beforeMount(){
    this.spliceArr();
  }
}
</script>

<style lang="scss" scoped></style>