<script>
    import Taskbar from "../Taskbar.svelte"
    import Topbar from "../Topbar.svelte"
    import {goto} from "$app/navigation";

</script>


<div id="main-div">
    <Topbar/>
    <div id="desktop">
        <div>
            <h1>Hobbies</h1>
            <h2>Circus techniques</h2>
            <p>
                At only 5 years old I started learning circus techniques at circus atelier <a href="https://www.sarakasi.be/" target="_blank">Sarakasi</a>.
                First I learned a variaty of different techniques like juggling, diabolo, walking on a barrel, etc. But I quickly realised I enjoyed the disciplines related to balance most.
                This resulted in me specializing in unicycling.

            </p>
            <p>
                Today I now teach the unicycling discipline at Sarakasi.
            </p>
            <h2>Fencing</h2>
            <p>
                fence
            </p>
            <h2>Inline skating</h2>
            <p>
                I started
            </p>
            <h2>Variate</h2>
            <p>
                I started
            </p>
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
