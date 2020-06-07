<template>
  <div class="summit-points container container--p-y">
    <div class="summit__header">
      <div class="summit__headline">
        The One-Of-A-Kind Summit
      </div>
      <div class="summit__desc">
        Make meaningful connections while immersing yourself in the exotic
        Vietnamese scenery.
      </div>
    </div>
    <div class="summit-points__main">
      <div
        v-for="item in points"
        :key="`points_${item.id}`"
        class="summit-points__item item"
      >
        <div class="item__header">
          <span class="item__id">{{ item.id }}</span>
          <span class="item__title">{{ item.title }}</span>
        </div>
        <div class="item__desc">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    points: [
      {
        id: "01",
        title: "MAKE MEANINGFUL CONNECTIONS",
        value: "surround yourself with the most influential people."
      },
      {
        id: "02",
        title: "GAIN VALUABLE KNOWLEDGE",
        value: "expand your mind, not just your network."
      },
      {
        id: "03",
        title: "EXPLORE A NEW CULTURE",
        value: "go on an adventure, get even more inspired."
      }
    ]
  })
};
</script>
