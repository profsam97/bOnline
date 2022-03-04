<template>
    <div>
<nav class="navbar navbar-expand navbar-light bg-white topbar  static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>
                    <!-- Topbar Navbar -->
                    <topbar/>

                </nav>
    </div>
</template>

<script>
import Topbar from './Topbar.vue'
    export default {
  components: { Topbar },
        
    }
</script>

<style lang="scss" scoped>

</style>