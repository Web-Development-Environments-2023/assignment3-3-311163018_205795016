<template>


  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img v-if="image_load" :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <!-- <ul class="recipe-overview" >
        <li v-if="ready_time"> {{ recipe.readyInMinutes }} minutes </li>
        <li v-if="like_exist">{{ recipe.aggregateLikes }} likes </li>
      </ul> -->
    </div>
  </router-link>
</template>

<script>
export default {
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
 
  },
  data() {
    return {
      image_load: false,
      ready_time: false,
      like_exist: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: inline-block;
  width: 65%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  
  background-size: cover;
}
.recipe-image {
  transition: .5s ease;
  opacity: 1;
  position: absolute;


  text-align: center;
}
.recipe-image:hover {
    /* transition: .5s ease; */
	opacity: 1;

    -webkit-transform: scale(1.2);
	transform: scale(1.2);
}

.recipe-preview .recipe-footer {
  width: 97%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 0px 0px;
  width: 100%;
  color: black;
  font-size: 18px;
  font-style:italic;
  background: wheat;
  text-align: left;
  white-space: nowrap;
  overflow: visible;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style>
