<template>
  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Актуальное</h2>
        <router-link to="/all"><button class="btn btn-sm btn-primary">Все статьи</button> </router-link>
      </div>

      <div class="row">
        <div class="col-3" v-for="(article, index) in list.articles">
          <div>
            <div class="card">
              <img class="card-img-top" src="@/assets/images/placeholder-blue.png" alt="placeholder">
              <div class="card-body">
                <p class="card-text">
                  <small class="text-muted">{{ article.date }}</small>
                </p>

                <h5 class="card-title">{{ article.name }}</h5>
                <p class="card-text">{{article.description}}</p>

                <router-link to=""><a href="#" class="btn btn-primary">{{ article.id }}</a></router-link>
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


      <a href="#" class="card bg-dark text-white">
        <img class="card-img" src="@/assets/images/placeholder-blue.png" alt="placeholder">
        <div class="card-img-overlay">
          <h5 class="card-title">Название статьи</h5>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
import articles from '@/assets/js/data.js';
export default {
  data() {
    return {
      list: articles,
    }
  },
  methods: {
    spliceArray(arr){
      arr.splice(4);
    },
  },
  beforeMount(){
    this.spliceArray(this.list.articles)
  }
}
</script>

<style lang="scss" scoped></style>