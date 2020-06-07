<template>
  <div class="email-subscribe--bg-orange">
    <div class="email-subscribe container container--p-y">
      <div class="summit__header text--center">
        <div class="summit__headline">
          Stay tune, more details coming soon...
        </div>
        <div class="summit__desc">
          There will be only 125 available tickets. Leave us your email below
          and we’ll notify you the moment we open for registration.
        </div>
        <div v-if="false" class="summit__desc">
          Currently <b>0</b> are remaining.
        </div>
      </div>
      <div class="email-subscribe__main">
        <div class="email-subscribe__form">
          <img
            class="email-subscribe__icon-email"
            :src="`${AWS_URL}icons/icon-email.svg`"
          />
          <img
            v-if="isLoading"
            class="email-subscribe__icon-loading"
            :src="`${AWS_URL}icons/icon-loading.svg`"
          />
          <input
            type="email"
            class="email-subscribe__input"
            placeholder="Enter Your Email Address..."
            v-model="email"
            name="email"
          />
          <span v-if="isEmpty" class="text--error"
            >Your email cannot be empty</span
          >
          <span v-if="isInvalid" class="text--error"
            >Your email is invalid</span
          >
          <span v-if="isError" class="text--error"
            >Something wrong! Please try again</span
          >
          <span v-if="isSuccess" class="text--success"
            >Subscribed email successfully!</span
          >
        </div>
        <button
          :class="['email-subscribe__btn', isShowNoti && 'showing-noti']"
          :disabled="isLoading"
          @click="submit"
          @keyup.enter="submit"
        >
          Subscribe
        </button>
      </div>
    </div>

    <img
      class="email-subscribe__illustration"
      :src="`${AWS_URL}illustration/bridge.svg`"
    />
  </div>
</template>

<script>
import { AWS_URL } from "@/data/s3";
import { GS_APP_URL } from "@/data/gs";
export default {
  data: () => ({
    email: "",
    emailPattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, //[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$
    isInvalid: false,
    isEmpty: false,
    isSuccess: false,
    isError: false,
    isLoading: false,
    AWS_URL: AWS_URL
  }),
  computed: {
    isShowNoti() {
      return (
        window.innerWidth <= 768 &&
        (this.isInvalid || this.isEmpty || this.isSuccess || this.isError)
      );
    }
  },
  methods: {
    submit() {
      this.reset();
      this.isLoading = true;

      if (!this.email) {
        this.isEmpty = true;
        this.isLoading = false;
      } else if (!this.emailPattern.test(this.email)) {
        this.isInvalid = true;
        this.isLoading = false;
      } else {
        let formData = new FormData();
        formData.append("email", this.email);

        fetch(GS_APP_URL, { method: "POST", body: formData })
          //eslint-disable-next-line
          .then(response => {
            this.isSuccess = true;
          })
          //eslint-disable-next-line
          .catch(error => {
            this.isError = true;
          })
          .finally(() => {
            this.isLoading = false;
            setTimeout(() => {
              this.reset();
            }, 5000);
          });
      }
    },
    reset() {
      this.isInvalid = false;
      this.isEmpty = false;
      this.isError = false;
      this.isSuccess = false;
    }
  }
};
</script>
