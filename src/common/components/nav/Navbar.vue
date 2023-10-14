<template>
  <Wrapper :type="'vue'" :className="'navbar'">
    <img class="logo" src="https://imageupload.io/ib/tupMefOhGhFO5fF_1696931570.png" alt="netflix-logo" />
    <Wrapper :type="'vue'" :className="'action-group'">
      <select class="language">
        <option>English</option>
        <option>Vietnam</option>
      </select>
      <button class="btn-sm">Sign in</button>
    </Wrapper>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from "js-ui-clevai";
</script>
<style scoped lang="scss">
@import "./nav.scss";
</style>
