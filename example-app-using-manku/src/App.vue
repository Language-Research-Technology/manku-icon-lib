<script setup>
</script>

<template>
  <div>
    <h1>Manku Icons Example App</h1>
    <manku-icon name="Public" size="40" fill=""/>
    <manku-icon name="Login" size="40" fill="red"/>
    <manku-icon name="Login+" size="40" fill="#123"/>
    <manku-icon name="WrittenLanguage" size="40" fill="blue"/>
  </div>
  <br/>
  <div style="text-align: left;white-space: break-spaces;">
    <h3>Example:</h3>
    <manku-icon name="SpokenLanguage" size="40" fill="blue"/>
    <code innerText="`
    <manku-icon name='SpokenLanguage' size='40' fill='blue'/>
  `"></code>
  </div>
  <br/>
  <h3>Example:</h3>
  <div>This next example shows an icon that does not exist</div>
  <manku-icon name="DoesntExist">
    <template #notFound>
      <span>ICON NOT FOUND!</span>
    </template>
  </manku-icon>
  <div style="text-align: left;white-space: break-spaces;">
    <code innerText="`
<manku-icon name='DoesntExist'>
  <template #notFound>
    <span>ICON NOT FOUND!</span>
  </template>
</manku-icon>
  `"></code>
  </div>
</template>

<style scoped>

</style>
