<template>
    <div id="app">

  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Изменение статьи</h2>
      </div>

      <form>

        <div class="mb-3">
          <label>Название</label>
          <input v-model="article.name" type="text" class="form-control" placeholder="Придумайте название статьи">
        </div>
        <div class="mb-3">
          <label>Описание</label>
          <textarea v-model="article.description" class="form-control" placeholder="Напишите описание статьи" rows="5"></textarea>
        </div>
        <div class="mb-4">
          <label>Изображение</label>
          <input type="file" class="form-control">

          <img src="@/assets/images/placeholder-blue.png" class="w-100 mt-4" alt="preview">
        </div>

        <button @click.prevent="$router.push({
          name: 'id',
          params:{
            id: id
          }
        })" class="btn btn-success">Сохранить</button>
      </form>
    </section>
  </div>
</div>
</template>

<script>
import articles from '@/assets/js/data.js'
export default {
  data(){
    return{
      list: articles,
      id: this.$route.params.id,
      article: {}
    }
  },
  methods:{
    findArt(arr){
      this.article = arr.find(item => item.id == this.id)
    }
  },
  beforeMount(){
    this.findArt(this.list.articles)
  }
}
</script>

<style >
</style>