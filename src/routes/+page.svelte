<script>
    import githubimg from "$lib/images/github.png"
    import background from "$lib/images/windowsxp.jpg"
    import hobbiesimg from "$lib/images/unicycle.png"
    import templateimg from "$lib/images/template.jpg"
    import beaverimg from "$lib/images/CuteBeaver.png"
    import Icon from "./Icon.svelte"
    import Taskbar from "./Taskbar.svelte"
    import {goto} from "$app/navigation";

    function githubClick() {
        window.open("https://github.com/lars-vc", '_blank');
    }
    function hobbiesClick() {
        goto('/hobbies')
    }
    function beaversClick() {
        goto('/beavers')
    }

</script>


<div id="main-div">
    <div id="desktop">
        <Icon name="GitHub" imageurl={githubimg} onIconClicked={githubClick}/>
        <Icon name="Projects" imageurl={templateimg}/>
        <Icon name="NeoVim" imageurl={templateimg}/>
        <Icon name="Hobbies" imageurl={hobbiesimg} onIconClicked={hobbiesClick}/>
        <Icon name="Beavers" imageurl={beaverimg} onIconClicked={beaversClick}/>
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
    background-image: url(../lib/images/windowsxp.jpg);
    background-size: cover;
    overflow: hidden;
}
</style>
