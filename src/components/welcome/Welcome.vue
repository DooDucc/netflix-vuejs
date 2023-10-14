<template>
  <Wrapper :type="'vue'" :className="'welcome'">
    <Wrapper :type="'vue'" :className="'section-1'">
      <Wrapper :type="'vue'" :className="'content'">
        <Heading :type="'vue'" :tag="'h1'" :color="'white'" :font="'semibold'">
          Enjoy big movies, hit series and more from 70,000 ₫.
        </Heading>
        <Heading :type="'vue'" :tag="'h3'" :color="'white'" :font="'medium'"> Join today. Cancel anytime. </Heading>
        <Form />
      </Wrapper>
    </Wrapper>
    <Wrapper :type="'vue'" :className="'section-2'">
      <Feature v-for="feature in FEATURES" :feature="feature" />
    </Wrapper>
    <Wrapper :type="'vue'" :className="'section-3'">
      <Heading :type="'vue'" :tag="'h1'" :font="'semibold'"> Frequently Asked Questions </Heading>
      <Table />
    </Wrapper>
    <Footer />
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Heading } from "js-ui-clevai";
import { FEATURES } from "../../utils";
import Form from "./form/Form.vue";
import Feature from "./feature/Feature.vue";
import Table from "./table/Table.vue";
import { Footer } from "../../common";
</script>
<style scoped lang="scss">
@import "./welcome.scss";
</style>
