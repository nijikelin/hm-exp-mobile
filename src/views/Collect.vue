<template>
  <div>收藏页面
    <van-nav-bar title="我的收藏"/>

    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad(1)"
    >
      <ArticleItem
          v-for="item in list"
          :key="item.id"
          :item="item"
      >
      </ArticleItem>
    </van-list>

  </div>
</template>

<script>
import { getArticleLikeColl } from '@/api/article'
export default {
  data () {
    return {
      list: [],
      pageSize: 5,
      page: 1,
      loading: false,
      finished: false
    }
  },
  methods: {

    async onLoad (value) {
      const res = await getArticleLikeColl({
        optType: value,
        pageSize: this.pageSize,
        page: this.page
      })
      this.list.push(...res.data.rows)
      this.page++
      this.loading = false
      if (this.list.length >= res.data.total) {
        this.finished = true
      }
      console.log(this.list)
    }

  }

}
</script>

<style>

</style>
