<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/NavMenu.vue'

import {ref} from "vue";
import { introContent } from '../data/venueTourContent/introContent.js'
import { deepSeaContent } from '../data/venueTourContent/deepContent.js'
import { shallowContent } from '../data/venueTourContent/shallowContent.js'
import { iceContent } from '../data/venueTourContent/iceContent.js'
import { whaleContent } from '../data/venueTourContent/whaleContent.js'

const forIntro = ref(introContent)
const forDeep = ref(deepSeaContent)
const forShallow = ref(shallowContent)
const forIce = ref(iceContent)
const forWhale = ref(whaleContent)

</script>

<template>

  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>
    <div class="news_container w-100 p-5">
      <div class="selectBar mb-3">
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-item">
            <a class="nav-link active" id="tour-tab" data-bs-toggle="tab" href="#tour" role="tab" aria-controls="tour" aria-selected="true">導覽簡介</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="deep-tab" data-bs-toggle="tab" href="#deep" role="tab" aria-controls="deep" aria-selected="false">深海區</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="shallow-tab" data-bs-toggle="tab" href="#shallow" role="tab" aria-controls="shallow" aria-selected="false">淺海區</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="ice-tab" data-bs-toggle="tab" href="#ice" role="tab" aria-controls="ice" aria-selected="false">極地世界</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="whale-tab" data-bs-toggle="tab" href="#whale" role="tab" aria-controls="whale" aria-selected="false">鯨魚世界</a>
          </li>
        </ul>
      </div>


      <!--導覽簡介-->
      <div class="tab-content p-3" id="myTabContent">
        <div v-for="intro in forIntro" class="tab-pane fade show active" id="tour" role="tabpanel"
             aria-labelledby="tour-tab">

          <div class="content">

            <div class="Introduction">
              <a>{{ intro.Preface }}</a>
            </div>

            <div class="Main Body mt-5">

              <div v-for="deepItem in intro.deep" class="deepInfo">
                <div class="infoName">
                  <h2>{{ deepItem.name }}</h2>
                </div>
                <div class="infoContent">
                  <div class="w-100 h-50 pb-3 ">
                    <img :src="deepItem.photo" alt="...">
                  </div>
                  <p>{{ deepItem.content }}</p>
                </div>
              </div>

              <div v-for="shallowItem in intro.shallow" class="shallowInfo mt-5">
                <div class="infoName">
                  <h2>{{ shallowItem.name }}</h2>
                </div>
                <div class="infoContent">
                  <div class="w-100 h-50 pb-3 ">
                    <img :src="shallowItem.photo" alt="...">
                  </div>
                  <p>{{ shallowItem.content }}</p>
                </div>
              </div>

              <div v-for="iceItem in intro.ice" class="iceInfo mt-5">
                <div class="infoName">
                  <h2>{{ iceItem.name }}</h2>
                </div>
                <div class="infoContent">
                  <div class="w-100 h-50 pb-3 ">
                    <img :src="iceItem.photo" alt="...">
                  </div>
                  <p>{{ iceItem.content }}</p>
                </div>
              </div>

              <div v-for="whaleItem in intro.whale" class="whaleInfo mt-5">
                <div class="infoName">
                  <h2>{{ whaleItem.name }}</h2>
                </div>
                <div class="infoContent">
                  <div class="w-100 h-50 pb-3 ">
                    <img :src="whaleItem.photo" alt="...">
                  </div>
                  <p>{{ whaleItem.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!--深海區-->
        <div  class="tab-pane fade" id="deep" role="tabpanel" aria-labelledby="deep-tab">
          <div class="content">
            <div class="row">
              <div v-for="deepItem in forDeep" :key="deepItem.id" class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img :src="deepItem.photo" alt="深海區" class="rounded me-3 w-50 h-50">
                  <div>
                    <h5>名稱：{{ deepItem.name }}</h5>
                    <p>學名：{{ deepItem.sciName }}</p>
                    <p>分類:{{ deepItem.class }}</p>
                    <p>介紹：{{ deepItem.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!--淺海區-->
        <div class="tab-pane fade" id="shallow" role="tabpanel" aria-labelledby="shallow-tab">
          <div class="content">
            <div class="row">
              <div v-for="shallowItem in forShallow" :key="shallowItem.id" class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img :src="shallowItem.photo" alt="淺海區" class="rounded me-3 w-50 h-50">
                  <div>
                    <h5>名稱：{{ shallowItem.name }}</h5>
                    <p>學名：{{ shallowItem.sciName }}</p>
                    <p>分類:{{ shallowItem.class }}</p>
                    <p>介紹：{{ shallowItem.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!--極地世界-->
        <div class="tab-pane fade" id="ice" role="tabpanel" aria-labelledby="ice-tab">
          <div class="content">
            <div class="row">
              <div v-for="iceItem in forIce" :key="iceItem.id" class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img :src="iceItem.photo" alt="極地世界" class="rounded me-3 w-50 h-50">
                  <div>
                    <h5>名稱：{{ iceItem.name }}</h5>
                    <p>學名：{{ iceItem.sciName }}</p>
                    <p>分類:{{ iceItem.class }}</p>
                    <p>介紹：{{ iceItem.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!--鯨魚世界-->
        <div class="tab-pane fade" id="whale" role="tabpanel" aria-labelledby="whale-tab">
          <div class="content">
            <div class="row">

              <div v-for="whaleItem in forWhale" :key="whaleItem.id" class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img :src="whaleItem.photo" alt="鯨魚世界" class="rounded me-3 w-50 h-50">
                  <div>
                    <h5>名稱：{{ whaleItem.name }}</h5>
                    <p>學名：{{ whaleItem.sciName }}</p>
                    <p>分類:{{ whaleItem.class }}</p>
                    <p>介紹：{{ whaleItem.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  </div>
</div>

  <pagefooter/>
</template>

<style scoped>
/* 主要容器樣式 */
.d-flex.mt-5 {
  max-width: 1600px;
  margin: 2rem auto;
  width: 100%;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  gap: 2rem;
  padding: 0 2rem;
}

/* 內容容器樣式 */
.news_container {
  background: linear-gradient(135deg, rgba(0, 119, 182, 0.95) 0%, rgba(58, 59, 189, 0.9) 100%);

  backdrop-filter: blur(10px);
  border-radius: 20px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}
/* 添加水波紋動畫效果 */
.news_container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
      radial-gradient(circle at 20% 50%, rgba(4, 159, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 30%, rgba(13, 110, 253, 0.1) 0%, transparent 50%);
  animation: waterEffect 15s infinite linear;
  pointer-events: none;
}
@keyframes waterEffect {
  0% {
    opacity: 0.3;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-10px);
  }
  100% {
    opacity: 0.3;
    transform: translateY(0);
  }
}

/* 導航標籤樣式 */
.nav-tabs {
  border: none;
  background: rgba(23, 24, 25, 0.65);
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 2rem;
  padding: 0.5rem;
  position: relative;
  backdrop-filter: blur(5px);
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: rgb(232, 229, 229) !important; /* 深藍色 */
  font-weight: 900;  /* 更粗的字體 */
  background: transparent;
  border: none !important;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.nav-link:hover::before {
  transform: translateY(0);
}
.nav-link:hover {
  background: rgba(0, 180, 216, 0.4) !important; /* 更明顯的藍色背景 */
  color: #001f3f !important; /* 深藍色文字 */}

.nav-link.active {
  background: linear-gradient(135deg,
  rgba(0, 180, 216, 0.9),
  rgba(0, 119, 182, 0.9)) !important;
  color: #003366 !important;
  font-weight: 800;
}

/* 內容區域樣式 */
.tab-content {
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem !important;
  margin-top: 1rem;
}

/* 導覽簡介樣式 */
.Introduction {
  background: rgba(28, 163, 236, 0.15);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.Introduction a {
  color: #e6f3ff; /* 淺藍白色 */
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 500;
}

/* 區域資訊卡片 */
.infoContent img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.infoContent {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}
.infoContent::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
  rgba(0, 180, 216, 0.1),
  rgba(0, 119, 182, 0.1));
  pointer-events: none;
}
.infoContent:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 180, 216, 0.3);
}
.infoName h2 {
  color: #003366; /* 深藍色 */
  font-size: 2rem;
  font-weight: 800;
  padding: 1.5rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background: linear-gradient(90deg,
  rgba(135, 206, 250, 0.6), /* 淺藍色 */
  rgba(173, 216, 230, 0.6)); /* 更淺的藍色 */
  position: relative;
  overflow: hidden;
}

.infoContent p {
  padding: 1.5rem;
  margin: 0;
  line-height: 1.8;
  color: #e6f3ff; /* 淺藍白色，比純白色柔和 */
  font-weight: 500;
}
.infoContent:hover img {
  transform: scale(1.05);
}

/* 生物展示卡片 */
.d-flex.border {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: none !important;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
}
  .d-flex.border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg,
    rgba(0, 180, 216, 0.1),
    rgba(0, 119, 182, 0.1));
    pointer-events: none;
  }


.d-flex.border:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 180, 216, 0.2);
}

  /* 添加水波紋動畫 */
  @keyframes waveAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }


.d-flex.border img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 0;
  border-radius: 15px 0 0 15px;
}

.d-flex.border > div {
  padding: 1.5rem;
  flex: 1;
}

.d-flex.border h5 {
  color: #003366; /* 深藍色 */
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.d-flex.border p {
  color: #e6f3ff; /* 淺藍白色 */
  margin-bottom: 0.8rem;
  line-height: 1.6;
  font-weight: 500;
}

/* 波浪動畫效果 */
.news_container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 150px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: 50% 100%;
  animation: waveSlide 20s linear infinite;
  opacity: 0.2;
}
  @keyframes waveSlide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
/* 響應式設計 */
@media (max-width: 992px) {
  .d-flex.border {
    flex-direction: column;
  }

  .d-flex.border img {
    width: 100%;
    border-radius: 15px 15px 0 0;
  }
}

@media (max-width: 768px) {
  .nav-link {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .infoName h2 {
    font-size: 1.5rem;
  }

  .infoContent img {
    height: 300px;
  }

  .d-flex.mt-5 {
    padding: 0 1rem;
  }
}
</style>