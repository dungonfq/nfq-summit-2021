<template>
    <div class="email-subscribe--bg-orange">
        <div class="email-subscribe container container--p-y">
            <div class="summit__header text--center">
                <div class="summit__headline">
                    Stay tune, more details coming soon...
                </div>
                <div class="summit__desc">
                    There will be only 125 available tickets. Leave us your email below and we’ll notify you the moment we open for registration.
                </div>
                <div v-if="false" class="summit__desc">
                    Currently <b>0</b> are remaining.
                </div>
            </div>
            <div class="email-subscribe__main">
                <div class="email-subscribe__form">
                    <img class="email-subscribe__icon-email" src="/images/icons/icon-email.svg" />
                    <input type="email" class="email-subscribe__input" placeholder="Enter Your Email Address..."
                        v-model="email" name="email"/>
                </div>
                <button class="email-subscribe__btn">Subscribe</button>
            </div>
        </div>

        <img class="email-subscribe__illustration" src="/images/illustration/bridge.svg" />
    </div>
</template>

<script>
export default {
    data: () => ({
        email: '',
        emailPattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$
    })
}
</script>