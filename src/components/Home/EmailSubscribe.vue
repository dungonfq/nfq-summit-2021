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
                    <img v-if="isLoading" class="email-subscribe__icon-loading" src="/images/icons/icon-loading.svg" />
                    <input type="email" class="email-subscribe__input" placeholder="Enter Your Email Address..."
                        v-model="email" name="email"/>
                    <span v-if="isEmpty" class="text--error">Your email cannot be empty</span>
                    <span v-if="isError" class="text--error">Your email is invalid</span>
                    <span v-if="isSuccess" class="text--success">Subscribed email successfully!</span>
                </div>
                <button :class="['email-subscribe__btn', isShowNoti && 'showing-noti']" :disabled="isLoading" @click="submit">Subscribe</button>
            </div>
        </div>

        <img class="email-subscribe__illustration" src="/images/illustration/bridge.svg" />
    </div>
</template>

<script>
export default {
    data: () => ({
        email: '',
        emailPattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, //[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$
        isError: false,
        isEmpty: false,
        isSuccess: false,
        isLoading: false,
    }),
    computed: {
        isShowNoti() {
            return window.innerWidth <= 768 && (this.isError || this.isEmpty || this.isSuccess);
        }
    },
    methods: {
        submit() {
            this.reset();
            const windowWidth = window.innerWidth;
            this.isLoading = true;

            if(!this.email) {
                this.isEmpty = true;
                this.isLoading = false;
            } else if(!this.emailPattern.test(this.email)) {
                this.isError = true;
                this.isLoading = false;
            } else {
                this.isSuccess = true;
                this.isLoading = false;
                setTimeout(() => {
                    this.reset();
                }, 5000)
            }
        },
        reset() {
            this.isLoading = false;
            this.isError = false;
            this.isEmpty = false;
            this.isSuccess = false;
        }
    }
}
</script>