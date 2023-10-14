<template>
  <Wrapper :type="'vue'" :className="'welcome-questions'">
    <ul class="questions">
      <li v-for="question in FREQUENTLY_ASKED_QUESTIONS" @click="() => handleClickQuestion(question.id)">
        <Wrapper :type="'vue'" :className="'main-content'">
          <Heading :type="'vue'" :tag="'h3'">{{ question.title }}</Heading>
          <Icon
            :type="'vue'"
            :icon="'close'"
            :size="'xl'"
            :fill="'white'"
            :className="`question-icon ${questionActive === question.id ? `active` : ''}`"
          />
        </Wrapper>
        <Wrapper :type="'vue'" :className="`content ${questionActive === question.id ? `active` : ''}`">
          <Heading :type="'vue'" :tag="'h3'">
            {{ question.content1 }}
            <br />
            <br v-if="question.content2" />
            {{ question?.content2 }}
          </Heading>
        </Wrapper>
      </li>
    </ul>
    <Form />
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Icon, Heading } from "js-ui-clevai";
import { ref } from "vue";
import Form from "../form/Form.vue";
import { FREQUENTLY_ASKED_QUESTIONS } from "../../../utils";

const questionActive = ref<number | null>(null);

const handleClickQuestion = (id: number) => {
  if (id !== questionActive.value) {
    questionActive.value = id;
  } else {
    questionActive.value = null;
  }
};
</script>
<style scoped lang="scss">
@import "./table.scss";
</style>
