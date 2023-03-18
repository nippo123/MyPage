const unpInput = document.getElementById('unp');
const nameInput = document.getElementById('name');
const fullNameInput = document.getElementById('full_name');
const url = 'https://www.portal.nalog.gov.by/grp/getData';



unpInput.addEventListener('input', function(event) {

    const unp = event.target.value;
    if (unp.length < 9) return ; 
    const params = `?unp=${unp}&charset=UTF-8&type=json`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url + params);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error('Error:', xhr.status);
      }
    };
    xhr.send();
    console.log(xhr);


  
  
  /*fetch(url)
    .then(response => response.json())
    .then(data => {
      nameInput.value = data.name;
      fullNameInput.value = data.full_name;
    })
    .catch(error => console.error(error));*/
});


