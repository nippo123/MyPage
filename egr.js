const unpInput = document.getElementById('unp');
const nameInput = document.getElementById('name');
const fullNameInput = document.getElementById('full_name');

import express from "express";
const app = express();


unpInput.addEventListener('input', function(event) {
  const unpValue = event.target.value;
  
  const url = `https://www.portal.nalog.gov.by/grp/getData?unp=${unpValue}&charset=UTF-8&type=json`;
  const app = express();
  app.use(cors({
   origin:"https://www.portal.nalog.gov.by",
  }))
  fetch(url)
    .then(response => response.json())
    .then(data => {
      nameInput.value = data.VNAIMP;
      fullNameInput.value = data.VNAIMK;
    })
    .catch(error => console.error(error));
});