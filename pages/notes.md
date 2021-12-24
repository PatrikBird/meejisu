---
title: Notes - Patrik Bird
display: Notes
subtitle: Personal notes and quick tips
description: Personal notes and quick tips
---

<article>

## Note Title

_2021/10/24_

Some lorem ipsum here.

```javascript
<script setup lang="ts">
const readProgress = ref(0)

function currentScrollPosition(position: number) {
  return (
    (position
      / (document.body.clientHeight - document.documentElement.clientHeight))
    * 100
  )
}

function updateReadProgress() {
  readProgress.value = currentScrollPosition(window.scrollY)
}

onMounted(() => {
  window.addEventListener('scroll', updateReadProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateReadProgress)
})
</script>
```

</article>
