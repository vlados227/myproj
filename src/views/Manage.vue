<template>
  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Управление статьями</h2>
        <button class="btn btn-sm btn-success">Добавить статью</button>
      </div>

      <table class="table">
        <tbody>
          <tr>
          <th>#</th>
          <th>Название</th>
          <th>Дата и время</th>
          <th>Действия</th>
        </tr>
        <tr v-for="(article, index) in list.articles">
          <td>{{ index+1 }}</td>
          <td>{{ article.name }}</td>
          <td>{{ article.date }}</td>
          <td>
            <button @click="$router.push({
              name: 'edit',
              params: {
                id: article.id
              }
            })" class="btn btn-primary btn-sm">Редактировать</button>
            <button @click="list.articles.splice(list.articles.findIndex(item => item.id == article.id) ,1)" class="btn btn-danger btn-sm">Удалить</button>
          </td>
        </tr>
        </tbody>
        
      </table>

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

<style lang="scss" scoped>

</style>