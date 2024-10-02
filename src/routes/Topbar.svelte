<script>
    import topbar_left from "$lib/images/topbar_left.png"
    import topbar_right from "$lib/images/topbar_right.png"
    import {goto} from "$app/navigation";

    function clickX() {
        goto('/')
    }
</script>

<div id="topbar">
<img src={topbar_left}/>
<div id="topbar-mid"></div>
<img src={topbar_right} on:click={clickX}/>
</div>

<style type="text/css">
#topbar {
    display:flex;
    align-items:center;
    width: 67vw;
    height: 30px;
}
#topbar-mid {
    height:100%;
    flex-grow: 1;
    background-image: url(../lib/images/topbar_mid.png);
}
</style>
