<script setup>
</script>

<template>
  <div>
    <h1>Manku Icons Example App</h1>
      <manku-icon name="public" size="100" color=""/>
    <manku-icon name="login" size="100" color=""/>
    <manku-icon name="loginPlus" size="100" color=""/>
    <manku-icon name="writtenlanguage" size="100" color=""/>
    <manku-icon name="signedlanguage" size="100" color=""/>
    <manku-icon name="spokenlanguage" size="100" color=""/>
    <manku-icon name="conformsto" height="80" color=""/>
    <manku-icon name="binderlink" height="80" color=""/>
    <manku-icon name="binderlinkblue" height="80" color=""/>
  </div>
  
  <br/>
  <div style="text-align: left;white-space: break-spaces;">
    <h3>Example:</h3>
    <manku-icon name="spokenLanguage" size="40" color="blue"/>
    <code innerText="`
    <manku-icon name='spokenLanguage' size='40' color='blue'/>
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