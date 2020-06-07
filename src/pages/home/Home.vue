/* eslint-disable */
<template>
  <div class="home">
    <img class="logo" src="images/logo.png" />
    <TopBg />
    <SummitPoints />
    <LastYearMoments />
    <Testimonial />
    <EmailSubscribe />
  </div>
</template>

<script>
import TopBg from "@/components/Home/TopBg";
import SummitPoints from "@/components/Home/SummitPoints";
import LastYearMoments from "@/components/Home/LastYearMoments";
import Testimonial from "@/components/Home/Testimonial";
import EmailSubscribe from "@/components/Home/EmailSubscribe";
export default {
  components: {
    TopBg,
    SummitPoints,
    LastYearMoments,
    Testimonial,
    EmailSubscribe
  }
};
</script>
