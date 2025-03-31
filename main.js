

// Mohammed Kamal Eldien
// This async function fetches data from an API endpoint
// async function fetchData() {
//     try {
//         const response = await fetch("API_URL");

//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.status}`);
//         }

//         const data = await response.json();
//         displayPosts(data);
        
//     } catch (error) {
//         console.error("Error fetching data:", error.message);
//         displayError(error.message);
//     }
// }

// Execute the fetchData function
// fetchData()



let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=1");
request.responseType = "json";
request.send()
request.onload = function () {
    let posts = request.response;

    for (post of posts) {
        // console.log(post.title);
        // console.log(post.body);
    }
}

for (let i = 0; i < title.length; i++) {
    const element = title[i];
    element.addEventListener('click', function () {
        console.log(element.id);

        request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${element.id}`);
        request.responseType = "json";
        request.send();

        request.onload = function () {
            let posts = request.response;
            // Clear previous content
            left.innerHTML = '';

            for (let post of posts) {
                const head = document.createElement('h3');
                const body = document.createElement('p');
                const split = document.createElement('br');
                head.textContent = post.title;
                body.textContent = post.body;
                left.appendChild(head);
                left.appendChild(body);
                left.appendChild(split);
            }
        }
    })

}

async function fetchData(params) {
    
}