import { app } from "./app.js";

console.log(app);

import {
  getFirestore,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

console.log(getFirestore);

console.log(getDocs);
console.log(collection);
console.log(updateDoc);
console.log(deleteDoc);
console.log(doc);

const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

const dreamsRef = document.querySelector("#dreams");

async function getDreams() {
  const dreamsDocs = getDocs(dreamsCollection);
  dreamsRef.innerHTML = "";

  for (let i = 0; i < dreamsDocs.docs.length; i++) {
    const currentDream = dreamsDocs.docs[i];

    const data = currentDream.data();

    dreamsRef.innerHTML += ` <div class="dream">
        <h4>${data.text}</h4>
        <p>Likes: ${data.hearts || 0}</p>
        <p>
          <button class="edit">Edit</button>
          <button class="heart">&hearts;</button>
        </p>
      </div>`;
  }
}

function addHearts(e) {
  console.log("Add heart", e);
}

getDreams();
