<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import Main from "@/components/Main/Main.vue";
import Services from "@/components/Services/Services.vue";
import Actions from "@/components/Actions/Actions.vue";
import Account from "@/components/Account/Account.vue";
</script>

<template>
  <div style="" class="bg-white min-h-screen"> <!-- width: 1600px; height: 900px; border: solid black 3px; overflow: hidden; -->
    <div class="screen-w-1600px:!max-w-1668px screen-min-w-1200px:max-w-90% screen-w-1600px:!max-w-90% screen-w-1724px:max-w-1512px max-w-1668px px-7 mx-auto box-content">
      <div class="-z-10 absolute max-w-618px left-300px">
        <img class="w-full" src="/src/assets/images/top_gradient.png" alt="Top Gradient">
      </div>
      <div class="-z-10 absolute right-0 top-24">
        <img class="w-full" src="/src/assets/images/side_gradient.png" alt="Side Gradient">
      </div>
      <div class="screen-w-1600px:!py-[8.6vh] screen-w-1200px:!py-4 screen-min-w-1200px:py-8 screen-w-1350px:py-13 screen-w-1724px:py-16 w-full mx-auto py-5_6rem">
        <Header class="screen-w-1600px:!mb-[7.8vh] screen-min-w-1200px:mb-14 screen-w-1200px:!mb-12 mb-5_9rem" />
        <Main />
        <div class="screen-w-1200px:flex-col-reverse flex justify-between">
          <div class="screen-w-1200px:flex screen-w-1200px:flex-col">
            <Actions />
            <Account />
          </div>
          <Services />
        </div>
      </div>
    </div>
  </div>
</template>
