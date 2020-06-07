/* eslint-disable */
<template>
    <div class="home">
        <TopBg />
        <SummitPoints />
        <LastYearMoments />
        <Testimonial />
    </div>
</template>

<script>
import TopBg from "@/components/Home/TopBg";
import SummitPoints from "@/components/Home/SummitPoints";
import LastYearMoments from "@/components/Home/LastYearMoments";
import Testimonial from "@/components/Home/Testimonial";
export default {
    components: {
        TopBg,
        SummitPoints,
        LastYearMoments,
        Testimonial
    }
}
</script>