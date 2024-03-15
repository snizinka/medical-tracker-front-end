<script setup lang="ts">
import {ref, onMounted, onUnmounted, reactive} from 'vue';

const a = ref(window.innerWidth);

const styleObject = reactive(() => ({
  fontSize: (100 / a.value) * 80 + 'rem'
}))

const updateWindowSize = () => {
  console.log((window.innerWidth / 100) * 80)
  a.value = (100 / window.innerWidth) * 80;
};

onMounted(() => {
  updateWindowSize()
  window.addEventListener('resize', updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize);
});
</script>

<template>
  <div class="screen-w-1600px:!mb-[5.55vh] screen-min-w-1400px:mb-[1.75rem] screen-w-1200px:flex-col screen-w-1600px:mb-1_7rem flex w-full justify-between mb-2_75rem">
    <div class="screen-w-1200px:w-full screen-min-w-1400px:max-w-[40%] w-1/2">
      <h1 class="screen-min-w-1400px:min-w-full screen-min-w-1200px:max-w-[82%] screen-min-w-1200px:text-[5.5vw] screen-w-1200px:mx-auto screen-w-1200px:text-center screen-w-1600px:mb-4 screen-w-1724px:text-6_2rem text-7rem font-gilda_display text-gray_2d2d2d max-w-44_688rem leading-1_15 mb-6 w-full">We take care of your health</h1>
      <h2 class="screen-min-w-1400px:text-[1.7rem] screen-min-w-1200px:text-[1.5rem] screen-w-1200px:text-center screen-w-1600px:mb-4 screen-w-1724px:text-2_2rem text-2_5rem text-gray_2d2d2d font-montserrat font-semibold mb-6">The best medical center</h2>
      <p class="screen-min-w-1400px:min-w-full screen-min-w-1200px:max-w-[82%] screen-min-w-1200px:text-[1.3rem] screen-min-w-1400px:text-[1.6rem] screen-w-1200px:mx-auto screen-w-1200px:text-center screen-w-1600px:text-1_85rem text-2_1rem text-gray_2d2d2d leading-2_60rem font-montserrat max-w-44_688rem w-full">Our experienced team is committed to providing personalized and compassionate care.</p>
    </div>
    <div class="screen-w-1600px:max-w-50% screen-w-1200px:hidden screen-min-w-1200px:max-w-52% max-w-50%">
      <img class="w-full aspect-video" src="/src/assets/images/doctor.png" alt="A doctor">
    </div>
  </div>
</template>
