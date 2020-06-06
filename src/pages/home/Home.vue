/* eslint-disable */
<template>
    <div class="home">
        <TopBg />
        <SummitPoints />
        <LastYearMoments />
    </div>
</template>

<script>
import TopBg from "@/components/Home/TopBg";
import SummitPoints from "@/components/Home/SummitPoints";
import LastYearMoments from "@/components/Home/LastYearMoments";
export default {
    components: {
        TopBg,
        SummitPoints,
        LastYearMoments
    }
}
</script>