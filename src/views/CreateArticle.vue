<template>
<div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Добавление статьи</h2>
      </div>

      <form>

        <div class="mb-3">
          <label>Название</label>
          <input  v-model="newArticle.name" type="text" class="form-control" placeholder="Придумайте название статьи">
        </div>
        <div class="mb-3">
          <label>Описание</label>
          <textarea v-model="newArticle.description" class="form-control" placeholder="Напишите описание статьи" rows="5"></textarea>
        </div>
        <div class="mb-4">
          <label>Изображение</label>
          <input type="file" class="form-control">

          <img src="@/assets/images/placeholder-blue.png" class="w-100 mt-4" alt="preview">
        </div>

        <button @click.prevent="addArticle(newArticle); $router.push('/manage')" class="btn btn-success">Добавить статью</button>
      </form>
    </section>
  </div>
</template>

<script>
import articles from '@/assets/js/data.js';
  export default {
   data() {
    return {
      list: articles,
      newArticle: {
        name: '',
        description: '',
      }
    }
   },
   methods: {
    addArticle(item){
      item.date = new Date;
      item.date = item.date.toLocaleString('de', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
      item.id = this.list.articles.length + 1;
      this.list.articles.push(item);
    }
   }, 
  }
</script>

<style lang="scss" scoped>

</style>