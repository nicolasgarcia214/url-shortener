<script>
    import { fly } from 'svelte/transition'
    import Form from "../Form/Form.svelte" 
    import Inputs from '../../components/Inputs/Inputs.svelte'
    import Buttons from '../../components/Buttons/Buttons.svelte'
    import { doRequest } from "../../../../Api/Api"

    let newUrl = { url: "", slug: ""}

    let results = "&nbsp"

    async function createTinyURL(){
        let data = await doRequest("new", newUrl, "POST")
        console.log(data.message)
        results = (data.message === "Creation successful!") 
            ? `${data.message} - <a style="color:white" href="http://localhost:4000/${newUrl.slug}">
                http://localhost:4000/${newUrl.slug}
                <a/>` 
            : `<span style="color:red">${data.message}</span>`
    }
    
</script>


<div transition:fly={{ y: 200, duration: 500 }}>
    <Form on:create={createTinyURL}>
        <Inputs bind:url_input={newUrl.url} bind:slug={newUrl.slug}/>
        <Buttons/>
    </Form>     
    <p>{@html results}</p>
</div>

<style>
    div{
        width: 60%;
        height: 50%;
        border-radius: 2rem;
        box-shadow: 0 20px 30px 5px #172833;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #457B9D;
    }

    p{
        font-family: "Banana Grotesk";
        font-size: 1.5rem;
        color: #F1FAEE;
    }
</style>