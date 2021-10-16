<template>
  <div class="home">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
      <div class="" v-for="v in value" :key="v.id">
        <div class="border-bottom mb-4 pb-4 article-preview">
                <div class="p-0 p-md-3">
                    <a class="fw-bold h4 d-block text-decoration-none text-start" href="http://localhost:9090/2021/09/15/et-omnis-eum-ab-non/">
                       {{ v.title }}
                    </a>

                    <div class="btn btn-secondary text-start rounded-pill mb-3">
                     <router-link to="" class="text-decoration-none">
                          {{ v.category.title }}
                    </router-link>   
                    </div>


                    <div class="text-black-50 text-start">
                        <p>
                            {{ v.description }}
                        </p>
                    </div>

                    <div class="d-flex justify-content-between align-items-center see-more-group">
                        <div class="d-flex align-items-center">
                                                            <img alt="" src="http://127.0.0.1:8000/storage/profile/6156772b3a162_photo.jpg" class="avatar avatar-50 photo rounded-circle" height="50" width="50" loading="lazy">
                                                        <div class="ms-2">
                                    <a href="http://127.0.0.1:8000/user/2" class="small text-decoration-none">
                                        <i class="feather-user"></i>
                                        {{ v.user.name }}
                                    </a>
                                <br>
                                <a class="small text-decoration-none" href="http://127.0.0.1:8000/date/2021-10-01">01 October 2021</a>
                            </div>
                        </div>

                        <router-link :to="{ name : 'Detail', params: {id : v.id} }" class="btn btn-outline-primary rounded-pill px-3">Read More</router-link>
                    </div>
                </div>
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
                                <router-link :to="{ name : 'Category', params: {id : c.id} }" :class="[text-decoration-none, $route.params.id == c.id ? 'active' : '']">
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Category",
  components: {
    HelloWorld,
  },
  data() {
    return {
      value: [],
      categories: []
      
    };
  },
    mounted() {

     axios.get("http://127.0.0.1:8000/api/category").then((response) => {
      console.log(response.data);

      this.categories = response.data;
    });

    axios.get("http://127.0.0.1:8000/api/category/"+this.$route.params.id).then((response) => {
      console.log(response.data);
      this.value = response.data.data;
    });

  },
    created() {

     this.data();

  },


};
</script>
