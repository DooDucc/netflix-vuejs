<template>
  <Wrapper :type="'vue'" :className="'welcome-form'">
    <Heading :type="'vue'" :tag="'h4'" :color="'white'" :font="'medium'">
      Ready to watch? Enter your email to create or restart your membership.
    </Heading>
    <form class="form">
      <input type="text" placeholder="Email address" />
      <button class="btn-xl">
        Get Started
        <Icon :type="'vue'" :size="'lg'" :icon="'chevron'" :direction="'right'" :fill="'white'" />
      </button>
    </form>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Heading, Icon } from "js-ui-clevai";
</script>
<style scoped lang="scss">
@import "./form.scss";
</style>
