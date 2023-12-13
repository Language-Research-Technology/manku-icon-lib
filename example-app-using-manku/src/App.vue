<script setup>
</script>

<template>
  <div>
    <h1>Manku Icons Example App</h1>
    <manku-icon name="public" size="40" fill=""/>
    <manku-icon name="login" size="40" fill=""/>
    <manku-icon name="loginPlus" size="40" fill="#123"/>
    <manku-icon name="writtenLanguage" size="40" fill="blue"/>
    <manku-icon name="conformsTo" size="100" fill=""/>
    <manku-icon name="binderLink" size="40" fill=""/>
  </div>
  <br/>
  <div style="text-align: left;white-space: break-spaces;">
    <h3>Example:</h3>
    <manku-icon name="spokenLanguage" size="40" fill="blue"/>
    <code innerText="`
    <manku-icon name='spokenLanguage' size='40' fill='blue'/>
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
