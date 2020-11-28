<script>
	console.log("Hello")
	// const createUrl = async (callback=null) => {
    // this.preventDefault;
    // let response = await fetch('/url/new', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify(
    //         {
    //         url:this.url.value, 
    //         slug:this.slug.value
    //     })
    //   });
    //   let result = await response.json();
    //   console.log(result);
    //   if(callback) {
    //     callback("response", result);
    //   }
	// }

	// const displayResponse = (elementKey, data) => {
	// 	const {message, body} = data;

	// 	const parentElement = document.getElementById(elementKey);
	// 	parentElement.innerHTML = "";

	// 	let divElement = document.createElement('div');

	// 	let pElement = document.createElement('p');
	// 	pElement.appendChild(document.createTextNode(message));

	// 	let aElement = document.createElement('a');
	// 	if(body.slug) {
	// 		aElement.appendChild(document.createTextNode(`${window.location.href}url/${body.slug}`));
	// 		aElement.href = `${window.location.href}url/${body.slug}`;
	// 	} else {
	// 		aElement.appendChild(document.createTextNode(""));
	// 	}

	// 	divElement.appendChild(pElement);
	// 	divElement.appendChild(aElement);
	// 	parentElement.appendChild(divElement);
	// }
</script>

<main>
	<!-- <form action="javascript:;" onsubmit="createUrl(displayResponse)">
        <label for="url">Url to shorten:</label>
        <input type="url" name="url" id="url" required>
        <label for="slug">Optional. Custom micro url:</label>
        <input type="text" name="slug" id="slug">
        <input type="submit" value="Create">
	</form> -->
	<p>Hi</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>