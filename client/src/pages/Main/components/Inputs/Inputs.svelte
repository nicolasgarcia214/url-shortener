<script>
    export let url_input;
    export let slug;
</script>

<label for="url">URL to shorten:</label>
<input autocomplete="off" bind:value={url_input} type="url" name="url" id="url" required>
<label for="slug">Custom path for tiny URL:</label>
<input autocomplete="off" bind:value={slug} type="text" name="slug" id="slug">


<style>
    input{ 
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;        
        -ms-appearance: none;
        -o-appearance: none;       
        appearance: none;
        outline: none;    
        border-radius: 10px;
        padding: 15px;
        border: none;
    }

    input:active{ 
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;        
        -ms-appearance: none;
        -o-appearance: none;       
        appearance: none;
        outline: none;    
        border: none;
    }
    label{
        margin: 1.5rem 0 0.3rem;
    }
</style>
