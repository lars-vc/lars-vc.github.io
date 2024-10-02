<script>
    export let name;
    export let imageurl;
    export let onIconClicked;

    function onClick() {
        onIconClicked();
    }
</script>
<div id="icon-div" on:click={onClick}>
<img id="icon-img" src={imageurl}/>
<b>{name}</b>
</div>

<style type="text/css">
#icon-div {
    float: left;
    height: 14vh;
    width: 9vh;
    margin: 10px;
    text-align: center
}
#icon-img {
    width: 100%;
}
</style>
