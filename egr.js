const unpInput = document.getElementById('unp');
const nameInput = document.getElementById('name');
const fullNameInput = document.getElementById('full_name');

unpInput.addEventListener('input', function(event) {
  const unpValue = event.target.value;
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.responseText);
    } else {
      console.log("error")
    }
  };
  const url = `https://www.portal.nalog.gov.by/grp/getData?unp=${unpValue}&charset=UTF-8&type=json`;
  xhttp.open("GET", url, true);
  xhttp.send();
  console.log(xhttp);

  
  
  /*fetch(url)
    .then(response => response.json())
    .then(data => {
      nameInput.value = data.name;
      fullNameInput.value = data.full_name;
    })
    .catch(error => console.error(error));*/
});


