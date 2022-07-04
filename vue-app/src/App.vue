<template>
  <div>
    <RbCarousel
      :size="$options.CAROUSEL_SIZE"
      :slide-interval-time="$options.CAROUSEL_SLIDE_INTERVAL_TIME"
      class="carousel-v1"
    >
      <RbCarouselItem
        v-for="(carouselItem, index) in carouselItems"
        :key="`carousel-item-${index}`"
        :image-path="carouselItem.imagePath"
        :image-alt="carouselItem.imageAlt"
      />
    </RbCarousel>
    <RbCarouselV2
      :items="carouselItems"
      :size="$options.CAROUSEL_SIZE"
      :slide-interval-time="$options.CAROUSEL_SLIDE_INTERVAL_TIME"
    />
  </div>
</template>

<script>
import { RbCarousel, RbCarouselV2, RbCarouselItem } from 'rb-design-system-vue';

const CAROUSEL_SLIDE_INTERVAL_TIME = 3000;
const CAROUSEL_SIZE = 'small';

export default {
  CAROUSEL_SIZE,
  CAROUSEL_SLIDE_INTERVAL_TIME,
  name: 'App',
  components: {
    RbCarousel,
    RbCarouselV2,
    RbCarouselItem,
  },
  computed: {
    carouselItems() {
      return [
        {
          imagePath: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          imageAlt: 'Mountainy island in the middle of a sea',
        },
        {
          imagePath: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          imageAlt: 'Mountains with a parking below them',
        },
        {
          imagePath: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          imageAlt: 'Snowy mountains with a comet falling down in the night sky',
        },
        {
          imagePath: 'https://images.unsplash.com/photo-1576225410873-a28b2a79fd93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          imageAlt: 'Bridge with a big fog above it',
        },
      ];
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.carousel-v1 {
  margin-bottom: 64px;
}
</style>
