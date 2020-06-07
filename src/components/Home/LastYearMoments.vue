<template>
  <div class="last-year-moments--bg-orange">
    <div class="last-year-moments container container--p-y">
      <div class="summit__header">
        <div class="summit__headline">
          Last Year's Unforgettable Moments
        </div>
        <div class="summit__desc">
          A picture is worth a thousand words. What is a video worth?
        </div>
      </div>
      <div class="last-year-moments__main row">
        <div class="photos-item photos--left col">
          <img src="images/gallery/photo_00.png" />
        </div>

        <div class="photos--right col">
          <div class="row">
            <div
              v-for="photoId in 4"
              :key="`photos_${photoId}`"
              class="photos-item col"
            >
              <img :src="`images/gallery/photo_0${photoId}.png`" />
            </div>
          </div>
        </div>

        <div class="video-item col">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/dcQeOR9Aw_0?autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>