// Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");


// focus on field
window.onload = function(){
    theInput.focus();
}



getButton.onclick = function () {
    getRepos();
    theInput.value === "";
}

// Get Repos Function

function getRepos() {

    if(theInput.value === ""){
        reposData.innerHTML = "<span>Please Write Github Username</span>";
       //reposData.textContent = "Please Write Github Username";

    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => {
            return response.json();
        })
        .then((repos) => {

            // empty the container
            reposData.innerHTML = "";


           // for(let i = 0; i<repos.length; i++){}

           // loop on repos
            repos.forEach(repo => {
               
               // create the main div element
               let mainDiv = document.createElement("div");

               // create repo name text
               let repoName = document.createTextNode(repo.name);

               // Append the text to main div 
               mainDiv.appendChild(repoName);

               // create repo url anchor
               let theUrl = document.createElement('a');
               
               // create repo url text 
               let theUrlText = document.createTextNode("Visit");

               // append the repo url text to url
               theUrl.appendChild(theUrlText);

               // add the href to url
               theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

               // set attribute blank 
               theUrl.setAttribute("target","_blank");

               // append the url to main div
                mainDiv.appendChild(theUrl);

                // create stars count span
                let starsSpan = document.createElement("span");

                // create the stars count text
                let starsText = document.createTextNode(`stars ${repo.stargazers_count}`);

                // add stars text to stars spa
                starsSpan.appendChild(starsText);

                // add stars span to main div
                mainDiv.appendChild(starsSpan);

                // add class on main div
                mainDiv.className = 'repo-box';

               // append the main div to repos data
               reposData.appendChild(mainDiv);

            });
        });
    }
}