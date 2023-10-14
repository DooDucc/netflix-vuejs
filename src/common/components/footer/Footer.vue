<template>
  <footer>
    <Wrapper :type="'vue'" :className="'footer-wrap'">
      <Wrapper :type="'vue'" :className="'section-1'">
        <a href="#">Questions? Contact us.</a>
      </Wrapper>
      <Wrapper :type="'vue'" :className="'section-2'">
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#"> Help Center</a></li>
          <li><a href="#"> Account</a></li>
          <li><a href="#"> Media Center</a></li>
          <li><a href="#"> Investor Relations</a></li>
          <li><a href="#"> Jobs</a></li>
          <li><a href="#"> Ways to Watch</a></li>
          <li><a href="#"> Terms of Use</a></li>
          <li><a href="#"> Privacy</a></li>
          <li><a href="#"> Cookie Preferences</a></li>
          <li><a href="#"> Corporate Information</a></li>
          <li><a href="#"> Contact Us</a></li>
          <li><a href="#"> Speed Test</a></li>
          <li><a href="#"> Legal Notices</a></li>
          <li><a href="#"> Only on Netflix</a></li>
        </ul>
      </Wrapper>
      <Wrapper :type="'vue'" :className="'section-3'">
        <select class="language">
          <option>English</option>
          <option>Vietnam</option>
        </select>
        <Heading :type="'vue'" :tag="'caption'" :font="'regular'"> Netflix Vietnam </Heading>
      </Wrapper>
    </Wrapper>
  </footer>
</template>
<script setup lang="ts">
import { Wrapper, Heading } from "js-ui-clevai";
</script>
<style scoped lang="scss">
@import "./footer.scss";
</style>
