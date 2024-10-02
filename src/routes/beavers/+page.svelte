<script>
    import Taskbar from "../Taskbar.svelte"
    import Topbar from "../Topbar.svelte"
    import Carousel from '../BVRcarousel.svelte' 
    import {goto} from "$app/navigation";

</script>


<div id="main-div">
    <Topbar/>
    <div id="desktop">
        <div>
            <h1>Beavers</h1>
            <p>Beavers are my favorite animal, here are some cute pictures of them:</p>
            <Carousel/>
        </div>
    </div>

    <Taskbar/>
</div>

<style type="text/css">
* {
    font-family: Tahoma, "Trebuchet MS", sans-serif;
}
#main-div {
    height: 100vh;
}
#desktop {
    width: 67vw;
    height: 90vh;
    background-image: url(../../lib/images/appbackground.png);
    background-size: contain;
}
h1 {
    margin-top: 0;
    margin-left: 10px;
}
h2 {
    margin-left: 10px;
    margin-bottom: 0px;
}
p {
    margin-top: 0;
    margin-left: 20px;
    margin-bottom: 5px;
}
</style>
