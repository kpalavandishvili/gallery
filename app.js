const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

const numberOfColumns = 3;

/*
!!! HINT: REMEMBER THE STRUCTURE !!!
fetch('url')
.then(Resolve)
.then(Reject) OR .catch(Reject)
OR directly 
fetch('url').then(ResolveFuntion, RejectFuntion)
*/

fetch(URL)
  .then((response) => onSuccessFetch(response))
  .then((error) => console.log("this is an error: ", error));

const app = document.getElementById("app");

const divRow = document.createElement("div");
divRow.className = "row";

const columns = [];

const createColumns = () => {
  for (let i = 0; i <= numberOfColumns - 1; i++) {
    const divColumns = document.createElement("div");
    divColumns.className = "column";
    divRow.appendChild(divColumns);
    columns.push(divColumns);
  }
};
createColumns();

const onSuccessFetch = (resolve) => {
  resolve.json().then((photos) => {
    for (indexOfThePhoto in photos) {
      const { author, url, pubdate } = photos[indexOfThePhoto];
      console.log(author, url, pubdate);

      const p = document.createElement("p");
      p.innerText = `Author : ${author}`;

      //console.log(photos[indexOfThePhoto].url, (indexOfThePhoto % 4) + 1);
      const img = document.createElement("img");
      img.src = photos[indexOfThePhoto].url;

      columns[indexOfThePhoto % numberOfColumns].appendChild(img);
      columns[indexOfThePhoto % numberOfColumns].appendChild(p);
      //  OR
      // switch ((indexOfThePhoto % numberOfColumns) + 1) {
      //   case 1:
      //     columns[1 - 1].appendChild(img);
      //     break;
      //   case 2:
      //     columns[2 - 1].appendChild(img);
      //     break;
      //   case 3:
      //     columns[3 - 1].appendChild(img);
      //     break;
      //   case 4:
      //     columns[4 - 1].appendChild(img);
      //     break;
      //   default:
      //     break;
      // }
      app.appendChild(divRow);
    }
  });
};