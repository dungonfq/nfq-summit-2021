<template>
  <div class="top-bg">
    <img class="top-bg__img" :src="`${AWS_URL}background/cover.png`" width="100%" />
    <div class="top-bg__opacity"></div>
    <div class="top-bg__main">
      <div class="top-bg__headline">.NFQ ASIA SUMMIT 2021</div>
      <div class="top-bg__desc">
        Coming back soon! invite only - once in a life time experiences!
      </div>
    </div>
  </div>
</template>

<script>
import { AWS_URL } from "@/data/s3";
export default {
  data: () => ({
    AWS_URL: AWS_URL
  })
}
</script>