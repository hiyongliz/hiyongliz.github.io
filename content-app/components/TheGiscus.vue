<script>
import Giscus from '@giscus/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Giscus,
  },
})
</script>

<template>
  <Giscus
    repo="hiyongliz/hiyongliz.github.io"
    repo-id="R_kgDOM_LEXQ"
    category="General"
    category-id="DIC_kwDOM_LEXc4Cjb5-"
    mapping="url"
    strict="0"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="bottom"
    theme="light"
    lang="zh-CN"
    loading="lazy"
    async
    crossorigin="anonymous"
  />
</template>
