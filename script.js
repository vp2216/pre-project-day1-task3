const loading = document.createElement("img");
loading.setAttribute("src", "./spin.gif");
loading.style.width = "15vw";

const titleInput = document.getElementById("input");
titleInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") search();
});

// async function search() {
//   const title = document.getElementById("input").value;
//   const show = document.getElementById("showMovie");
//   show.innerHTML = "";
//   show.appendChild(loading);
//   let data;
//   if (title) {
//     const res = await fetch(
//       `https://www.omdbapi.com/?apikey=5aa13d0c&t=${title}`
//     );
//     data = await res.json();
//   }
//   if (!title) {
//     show.innerHTML = "";
//     const err = document.createElement("div");
//     err.innerText = "Please enter a movie title";
//     show.appendChild(err);
//   } else if (data.Response == "False") {
//     show.innerHTML = "";
//     const err = document.createElement("div");
//     err.innerText = data.Error;
//     show.appendChild(err);
//   } else {
//     show.innerHTML = "";
//     const poster = document.createElement("img");
//     poster.setAttribute("src", data.Poster);
//     show.appendChild(poster);
//     const info = document.createElement("div");
//     info.className = "info";
//     const movieName = document.createElement("h2");
//     movieName.innerHTML = data.Title + ` (${data.Year})`;
//     info.appendChild(movieName);
//     const rating = document.createElement("h4");
//     rating.innerHTML = `IMDb RATING : ${data.imdbRating}`;
//     info.appendChild(rating);
//     const genre = document.createElement("h4");
//     genre.innerHTML = data.Genre;
//     info.appendChild(genre);
//     const cast = document.createElement("span");
//     cast.innerHTML = `Cast : ${data.Actors}`;
//     info.appendChild(cast);
//     const crew = document.createElement("span");
//     crew.className = "crew";
//     crew.innerHTML = "Crew :";
//     const director = document.createElement("span");
//     director.className = "crewChild";
//     director.innerHTML = `Director : ${data.Director}`;
//     crew.appendChild(director);
//     const writer = document.createElement("span");
//     writer.className = "crewChild";
//     writer.innerHTML = `Writer : ${data.Writer}`;
//     crew.appendChild(writer);
//     info.appendChild(crew);
//     show.appendChild(info);
//   }
//   document.getElementById("input").value = "";
// }

async function search() {
  const title = document.getElementById("input").value;
  const show = document.getElementById("showMovie");
  show.innerHTML = "";
  show.appendChild(loading);
  let data;
  if (title) {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=5aa13d0c&t=${title}`
    );
    data = await res.json();
  }
  if (!title) {
    show.innerHTML = "";
    const err = document.createElement("div");
    err.innerText = "Please enter a movie title";
    show.appendChild(err);
  } else if (data.Response == "False") {
    show.innerHTML = "";
    const err = document.createElement("div");
    err.innerText = data.Error;
    show.appendChild(err);
  } else {
    show.innerHTML = `
        <img src=${data.Poster}/>
        <div class="info">
            <h2>${data.Title}${" "}(${data.Year})</h2>
            <h4>IMDb RATING : ${data.imdbRating}</h4>
            <h4>${data.Genre}</h4>
            <span>Cast : ${data.Actors}</span>
            <span class="crew">
            Crew : 
                <span class="crewChild">Director : ${data.Director}</span>
                <span class="crewChild">Writer : ${data.Writer}</span>
            </span>
        </div>
        `;
  }
    document.getElementById("input").value = "";
}
