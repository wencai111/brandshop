<template>
    <div>
        <audio ref="audio" :src="currentSong.url" @canplay="ready" @error="error" @timeupdate="updateTime"></audio>
    </div>
</template>
<script>
export default {
    name:"liezi",
    data(){
        return{

        }
    }
}
</script>

