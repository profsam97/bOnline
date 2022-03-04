<template>
   <Main>
     sdsd
   </Main>
</template>

<script>
export default {
  layout: "default",
  name: 'IndexPage',
  middleware({ route, redirect, from }) {
    if(route.path == "/"){
     return redirect("/about")
    }

  }
}
</script>
