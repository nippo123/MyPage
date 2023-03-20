const unpInput = document.getElementById('unp');
const nameInput = document.getElementById('name');
const fullNameInput = document.getElementById('full_name');

// const express = require('express');
import express from '/node_modules/express';
const app = express();


unpInput.addEventListener('input', function(event) {
  const unpValue = event.target.value;
  if (unpValue > 9) return;
  const url = `https://www.portal.nalog.gov.by/grp/getData?unp=${unpValue}&charset=UTF-8&type=json`;
  const app = express();
  app.use(cors({
   origin:url,
  }))
  fetch(url)
    .then(response => response.json())
    
    .then(data => {
      nameInput.value = data.VNAIMP;
      fullNameInput.value = data.VNAIMK;
      console.log(response);
    })
    .catch(error => console.error(error));
});