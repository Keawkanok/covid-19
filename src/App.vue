<template>

  <!-- <div>
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
        </div>
      </div>
    </nav>

  </div> -->
  <!-- <div class="container mt-5"> -->
  <!-- <router-view></router-view> -->
  <!-- </div> -->
  <!-- 
  <body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      
      <router-link to="/" class="navbar-brand ps-3">Covid-19</router-link>
   
      <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
          class="navbar-toggler-icon"></i></button>
          <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
            </li>
        </ul>
    </nav>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
              <div class="sb-sidenav-menu-heading">Core</div>
              <a class="nav-link" href="index.html">
                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                Dashboard
              </a>
              <div class="sb-sidenav-menu-heading">Addons</div>
              <router-link to="/table" class="nav-link ">
                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                Table
                Country
              </router-link>

              <a class="nav-link" href="tables.html">
                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                Tables
              </a>
            </div>
          </div>
          <div class="sb-sidenav-footer">
            <div class="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <h1 class="mt-4">Graph Covid-19</h1>
            <div class="card mb-4">
              <div class="card-header">
                <i class="fas fa-chart-area me-1"></i>
                Graph Covid-19
              </div>
              <div class="card-body">

                <GraphCovid />

              </div>
            </div>
          </div>
        </main>
        <footer class="py-4 bg-light mt-auto">
          <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
              <div class="text-muted">Copyright &copy; Your Website 2022</div>
              <div>
                <a href="#">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </body> -->

  <body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <!-- Navbar Brand-->
      <router-link to="/" class="navbar-brand ps-3">Covid-19</router-link>
      <!-- Sidebar Toggle-->
      <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
          class="navbar-toggler-icon"></i></button>
      <!-- Navbar-->
      <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li class="nav-item dropdown">

        </li>
      </ul>
    </nav>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
              <!-- <div class="sb-sidenav-menu-heading">Addons</div> -->
              <a class="nav-link" href="#graphcovid-19">
                <div><i class="fas fa-chart-area"></i></div>
                Graph Covid-19
              </a>
              <a class="nav-link" href="#tablecountry">
                <div><i class="fas fa-table"></i></div>
                Table Country
              </a>
              <a class="nav-link" href="#tablecovid-19">
                <div><i class="fas fa-table"></i></div>
                Table Covid-19
              </a>
            </div>
          </div>

        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4" id="graphcovid-19">
            <h1 class="mt-4">Covid-19</h1>

            <div class="card mb-4">
              <div class="card-header">
                <i class="fas fa-chart-bar me-1"></i>
                Graph Covid-19
              </div>
              <GraphCovid />
            </div>

            <div class="card mb-4" id="tablecountry">
              <div class="card-header">
                <i class="fas fa-table me-1"></i>
                Table Country
              </div>
              <div class="card-body">
                <table id="datatablesSimple">

                  <CovidTable />

                </table>
              </div>
            </div>

            <div class="card mb-4" id="tablecovid-19">
              <div class="card-header">
                <i class="fas fa-table me-1"></i>
                Table Covid-19
              </div>
              <div class="card-body">
                <table id="datatablesSimple">

                  <TableWorldwide />

                </table>
              </div>
            </div>
          </div>
        </main>
        <footer class="py-4 bg-light mt-auto">
          <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
              <div class="text-muted">Copyright &copy; Your Website 2023</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </body>

</template>

<script>
import '../src/css/styles.css'
import '../src/js/scripts.js'
import GraphCovid from './components/GraphCovid.vue'
import CovidTable from './components/CovidTable.vue'
import TableWorldwide from './components/TableWorldwide.vue'


export default {
  components: {
    GraphCovid, CovidTable, TableWorldwide
  },
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

