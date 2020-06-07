<template>
  <div class="testimonial--bg-grey">
    <div class="testimonial container container--p-y">
      <div class="summit__header text--center">
        <div class="summit__headline">
          Testimonials from our attendants
        </div>
        <div class="summit__desc">
          Don't just take our words for reference, see what our attendants are
          saying!
        </div>
        <div class="testimonial__icon-quote">
          <img src="images/icons/icon-quote.svg" />
        </div>
      </div>
      <div class="testimonial__main row">
        <carousel
          class="testimonial__carousel"
          :per-page="1"
          :autoplay="true"
          :loop="true"
          :autoplay-timeout="5000"
          :mouse-drag="false"
          :pagination-active-color="'#FF6B00'"
          :pagination-color="'transparent'"
          :pagination-size="12"
        >
          <slide
            class="testimonial__slide"
            v-for="(slide, id) in slidesData"
            :key="`slide_${id}`"
          >
            <div class="testimonial__slide-content">
              {{ slide.content }}
            </div>
            <div class="testimonial__slide-credit">
              <span>{{ slide.author }}</span> - {{ slide.from }}
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import slidesData from "@/data/slide";
export default {
  data: () => ({
    slidesData: slidesData
  })
};
</script>
