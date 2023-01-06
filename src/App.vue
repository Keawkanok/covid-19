<template>
  
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container navbar-bran">
        <router-link to="/" class="navbar-brand float-left">
          <h2> <span class="badge rounded-pill text-bg-secondary">Covid-19</span></h2>
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li class="nav-item ">
              <router-link to="/" class="nav-link "> <span class="badge rounded-pill text-bg-secondary">Graph
                  Covid-19</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/table" class="nav-link "><span class="badge rounded-pill text-bg-secondary">Table
                  Country</span></router-link>
            </li>

            <li class="nav-item">
              <router-link to="/Worldwide" class="nav-link "><span class="badge rounded-pill text-bg-secondary">Graph
                  Worldwide</span></router-link>
            </li>
          </ul>
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    }
  },
  created() {
    this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}

.dark-mode {
  background-color: #333;
  color: #fff;
}
</style>

