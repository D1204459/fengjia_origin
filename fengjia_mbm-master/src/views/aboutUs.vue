<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/NavMenu.vue'
import { aboutusContent } from "@/data/aboutusContent.js";
import {ref} from "vue";
const aboutus = ref(aboutusContent);
</script>

<template>
  <pagehead/>
  <carouselComponent/>
  <div class="d-flex mt-5">
    <menuComponent/>
    <div v-for="item in aboutus" :key="item.id" class="text-start w-100 p-5">
      <div class="text-center title">
        <h1>{{item.title}}</h1>
      </div>
      <div class="content" v-for="item in aboutus" :key="item.id">
        <div class="content_text p-4 " >
          <p>{{item.content1}}</p>
          <img src="@/assets/photo/about/about1.webp" class="w-50 h-50">
          <p>{{item.content2}}</p>
          <img src="@/assets/photo/about/open.webp" class="w-50 h-50">
          <p>{{item.content3}}</p>
          <img src="@/assets/photo/about/about2.jpg" class="w-50 h-50">
        </div>
      </div>
    </div>
  </div>
  <pagefooter/>
</template>

<style scoped>
/* 整體容器 */
.d-flex {
  display: flex;
  margin-top: 3rem;
  margin-bottom: 3rem;
  justify-content: center;
}

/* 標題區塊 */
.title {
  margin-bottom: 2rem;
  text-align: center;
}
.title h1 {
  font-size: 4rem;
  font-weight: 700;
  color: #1a4c7c;
  position: relative;
  display: inline-block;
}
.title h1:before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 4px;
  background-color: #1a4c7c;
  border-radius: 2px;
}

/* 內容區塊 */
.content {
  background-color: #f0f8ff;
  border-radius: 4rem;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(31, 38, 135, 0.15);
  width: 95%;
}

.content_text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content_text p {
  color: #1a4959;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.content_text img {
  max-width: 50%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 1.5rem 0;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}



</style>