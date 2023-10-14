<template>
  <Wrapper :type="'vue'" :className="`feature feature-${feature.id}`">
    <Wrapper :type="'vue'" :className="`feature-wrap ${feature.direction?.toLowerCase()}`">
      <Wrapper :type="'vue'" :className="'text'">
        <Heading :type="'vue'" :tag="'h1'">{{ feature.heading }}</Heading>
        <Heading :type="'vue'" :tag="'h2'">{{ feature.content }}</Heading>
      </Wrapper>
      <Wrapper :type="'vue'" :className="'media'">
        <img :src="feature.image" alt="video-image" />
        <Wrapper v-if="feature.id === 2" :type="'vue'" :className="'download-block'">
          <img :src="feature.subImage" alt="sub-image" />
          <Wrapper :type="'vue'" :className="'download-text'">
            <Heading :type="'vue'" :tag="'body'" :className="'movie-title'"> Stranger <br />Things </Heading>
            <Heading :type="'vue'" :tag="'body'" :className="'download-status'"> Downloading... </Heading>
          </Wrapper>
          <Wrapper :type="'vue'" :className="'video'"></Wrapper>
        </Wrapper>
        <Wrapper v-if="feature.video" :type="'vue'" :className="'feature-video'">
          <video :src="feature.video" autoplay playsinline muted loop></video>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  </Wrapper>
</template>

<script setup lang="ts">
import { Wrapper, Heading } from "js-ui-clevai";
import { FeatureType } from "../../../utils";

interface Props {
  feature: FeatureType;
}

const { feature } = defineProps<Props>();
</script>

<style scoped lang="scss">
@import "./feature.scss";
</style>
