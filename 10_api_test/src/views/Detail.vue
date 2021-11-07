<template>
  
    <div class="row">
        <div class="col-12 col-lg-6">


        
    <div class="">
        <div class="py-3">

            <div class="btn btn-sm btn-secondary text-start rounded-pill mb-3">
                      <div class="small text-start" v-for="c in categories" :key="c.id">
                        <router-link :to="{ name : 'Category', params: {id : c.id} }" class="text-decoration-none">
                          {{ value.category_id == c.id ? c.title : '' }}
                        </router-link>   
                    </div>
                    </div>

            <h2 class="fw-bolder">{{ value.title }}</h2>
            <div class="my-3 feature-image-box">
                <div class="d-block d-md-flex justify-content-between align-items-center my-3">

                    <div class="d-flex align-items-center ">
                      <img alt="" src="http://127.0.0.1:8000/storage/profile/6156772b3a162_photo.jpg" class="avatar avatar-50 photo rounded-circle" height="50" width="50" loading="lazy">
                      <router-link v-for="v in articles" :key="v.id" to="/" title="Visit admin’s website" rel="author external" class=" d-none">
                        {{ v.user.id == value.user_id ? name.push(v.user.name) : '' }}
                      </router-link>
                      <p class="ms-2 mb-0">{{ name[0] }}</p>
                    </div>

                    <div class="text-primary">
                        <i class="feather-calendar"></i>
                        <a href="http://127.0.0.1:8000/date/2021-10-01">01 October 2021</a>
                        11:00 am
                    </div>
                </div>

                <p>
                  {{ value.description }}
                </p>

                




                <div class="nav d-flex justify-content-between p-3">
                                            <a href="http://127.0.0.1:8000/detail/103" class="btn btn-outline-primary page-mover rounded-circle">
                            <i class=" fas fa-chevron-left"></i>
                        </a>
                    

                    <router-link to="/" class="btn btn-outline-primary px-3 rounded-pill">
                        Read All
                    </router-link>

                                            <a href="http://127.0.0.1:8000/detail/105" class="btn btn-outline-primary page-mover rounded-circle">
                            <i class="fas fa-chevron-right"></i>
                        </a>
                                    </div>
            </div>


        </div>

        <div class="d-block d-lg-none d-flex justify-content-center">
        </div>

    </div>






        </div>
         <div class="col-12 col-lg-4 border-start" id="sidebarColumn">
            <div class="position-sticky" style="top: 100px">
                <div class="mb-5 sidebar">


                    <div id="search" class="mb-5">
                        <form action="" method="get">
                            <div class="d-flex search-box">
                                <input type="text" class="form-control flex-shrink-1 me-2 search-input" name="search" value="" placeholder="Search Anything">
                                <button class="btn btn-primary search-btn">
                                    <i class="feather-search d-block d-xl-none"></i>
                                    <span class="d-none d-xl-block">Search</span>
                                </button>
                            </div>

                        </form>

                    </div>

                    <div id="category">
                        <h4 class="fw-bolder">Category Lists</h4>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="c in categories" :key="c.id">
                                  <router-link :to="{ name : 'Category', params: {id : c.id} }" class="btn btn-outline-primary text-start rounded-pill px-3">
                                    {{ c.title }}
                                  </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="d-none d-lg-block">
                    <!-- @yield("pagination-place") -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Detail",
  components: {
    HelloWorld,
  },
  data() {
    return {
      name:[],
      value: [],
      articles:[],
      categories: [],
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/article/"+this.$route.params.id).then((response) => {
      console.log(response.data);
      this.value = response.data;
    });
    axios.get("http://127.0.0.1:8000/api/articles/").then((response) => {
      console.log(response.data);
      this.articles = response.data.data;
    });
     axios.get("http://127.0.0.1:8000/api/category/").then((response) => {
      console.log(response.data);

      this.categories = response.data;
    });
  },
};
</script>
