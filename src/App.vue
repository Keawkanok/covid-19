<template>
  <div>
    <nav class="navbar navbar-expand-lg justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">
          <h2>Covid-19</h2>
        </router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/" class="nav-link ">Graph</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hello" class="nav-link ">Hello</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/table" class="nav-link ">Table</router-link>
          </li>
        </ul>
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

  }
}
</script>

