<template>
  <div id="app">
    <div class="container-fluid position-fixed bg-primary" style="z-index: 999999;">
      <div class="row">
        <div class="col-12">
          <div class="container">
            <div class="row">
              <div class="col-12">
                 <div id="nav rounded">

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary position-sticky">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-5">
          <div class="container justify-content-center">
            <div class="">
              <router-view>

              </router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {


  color: #2c3e50;
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
$font-family-sans-serif: 'Montserrat', sans-serif;
#nav {

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}

.nav-link.active {
  font-weight: bold;
  color: #2c3e50 !important;
}

.navbar-brand img {
  filter: drop-shadow(0 3px rgba(0, 0, 0, 0.2));
}

.article-preview:last-child {
  border-bottom: none !important;
}

.article-preview {
  img {
    max-width: 100% !important;
    height: auto;
  }
}

.navbar {
  z-index: 1005;
}


// #pagination {
//   .page-item {
//     width: 35px;
//     height: 35px;
//     text-align: center;
//     padding: 0;
//     line-height: 35px;
//   }
//   .page-item.active .page-link {
//     border-radius: 50% !important;
//     border: 1px solid var(--bs-primary) !important;
//     background: transparent !important;
//     color: var(--bs-primary) !important;
//   }
//   .page-link {
//     padding: 0 !important;
//     border: none;
//     font-weight: bold;
//   }
// }

.sidebar {
  h4 {
    padding-left: 20px !important;
    margin-bottom: 10px;
  }

  .list-group-item {
    padding: 0 !important;
    margin-bottom: 0;
    border: none;

    a {
    
      background: var(--bs-light);
      padding: 10px 20px;
      border-radius: 3rem;
      margin-bottom: 10px;
      text-decoration: none !important;
      display: block;
    }

    a.active{
      color: white !important;
      background-color: #42b983 !important;
    }

  }

  #search {
    .search-box {
      border: 1px solid var(--bs-primary);
      border-radius: 2rem;
      padding: 3px;
    }
    .search-input {
      flex-grow: 1;
      border: none !important;
      box-sizing: border-box;
      outline: none !important;
      border-radius: 2rem;
      padding-left: 20px;
    }
    .search-input:focus {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }

    .search-btn {
      border-radius: 2rem;
      padding: 10px 25px;
      /* height: 40px; */
      /* line-height: 40px; */
      background: var(--bs-primary);
      color: #fff;
      border: none;
    }
  }
}

.post-category {
  a {
    text-decoration: none;
    background: var(--bs-secondary);
    padding: 5px 10px;
    border-radius: 1rem;
    margin-right: 5px;
    font-size: 0.6rem;
  }
}

.feature-image-box img {
  border-radius: 10px;
  max-width: 100%;
  height: auto;
}
.page-mover {
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
}

.page-mover.disabled {
  border-color: var(--bs-gray) !important;
  color: var(--bs-gray);
}

@media screen and (max-width: 780px) {
  #sidebarColumn {
    border: none !important;
  }
}

@media screen and (max-width: 480px) {
  .the-excerpt p {
    font-size: 0.8rem !important;
  }

  .see-more-group {
    .avatar {
      width: 35px;
      height: 35px;
    }

    .btn,
    .small {
      font-size: 0.7rem !important;
    }
  }
}





$primary : #42b983;
@import "~bootstrap/scss/bootstrap";


</style>
