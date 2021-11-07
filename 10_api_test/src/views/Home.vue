<template>
  <div class="home">
    <div class="row d-flex justify-content-center">
      <div class="col-12 d-flex vh-100 justify-content-center align-middle align-items-center" v-if="loading">
          <div class="spinner-grow h1 text-center" role="status">
            <span class="sr-only"></span>
          </div>
      </div>
      <div class="col-6 animate__animated animate__fadeIn animate__delay-1s">
      <div class="" v-for="v in value" :key="v.id">
        <div class="border-bottom mb-4 pb-4 article-preview">
                <div class="p-0 p-md-3">
                    <a class="fw-bold h4 d-block text-decoration-none text-start" href="http://localhost:9090/2021/09/15/et-omnis-eum-ab-non/">
                       {{ v.title }}
                    </a>

                    <div class="btn btn-secondary text-start rounded-pill mb-3">
                      <div class="small text-start" v-for="c in categories" :key="c.id">
                        <router-link to="/" class="text-decoration-none">
                          {{ v.category_id == c.id ? c.title : '' }}
                        </router-link>   
                    </div>
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
    
      <div class="col-12 col-lg-4 border-start animate__animated animate__fadeIn animate__delay-1s" id="sidebarColumn">
            <div class="position-sticky" style="top: 100px">
                <div class="mb-5 sidebar">


                    <div id="search" class="mb-5">
                        <div class="d-flex search-box">
                                <input type="text" class="form-control flex-shrink-1 me-2 search-input" name="search" v-model="key" placeholder="Search Anything">
                                
                                  <button class="btn btn-primary search-btn" @click="searchPost()">
                                    <i class="feather-search d-block d-xl-none"></i>
                                    <span class="d-none d-xl-block">Search</span>
                                  </button>
                                
                            </div>
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      value: [],
      categories : [],
      key:"",
      loading:true
      
    };
  },
  methods: {
    searchPost() {
        this.$router.push({name : 'Search', params: {id : this.key}})
        let q = this.key;
        console.log(q);
    },
  },
  mounted() {

    axios.get("http://127.0.0.1:8000/api/articles").then((response) => {
      console.log(response.data);

      this.value = response.data.data;
      this.loading = false
    });

    

    http://127.0.0.1:8000/api/articles/web

    axios.get("http://127.0.0.1:8000/api/category").then((response) => {
      console.log(response.data);

      this.categories = response.data;
      this.loading = false
    });

  },
};
</script>
