<script setup>
import { onLaunch } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('CPTI Campus App launched')
})
</script>
<style>
/* 全局样式 */
page { background: #f0f2f5; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif; }
view { box-sizing: border-box; }

/* uni-app 覆盖 */
uni-page-body { min-height: 100vh; }
</style>
