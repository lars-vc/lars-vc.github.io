<script>
    import taskbar_left from "$lib/images/taskbar_left.jpg"
    import taskbar_right from "$lib/images/taskbar_right.jpg"
    import {goto} from "$app/navigation";

    function clickStart() {
        goto('/')
    }
</script>

<div id="taskbar">
<img src={taskbar_left} on:click={clickStart}/>
<div id="taskbar-mid"></div>
<img src={taskbar_right}/>
</div>

<style type="text/css">
#taskbar {
    display:flex;
    align-items:center;
    width: 67vw;
    height: 35px;
}
#taskbar-mid {
    height:100%;
    flex-grow: 1;
    background-image: url(../lib/images/taskbar_mid.jpg);
    background-size: cover;
}
</style>
