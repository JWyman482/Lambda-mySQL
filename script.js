const url = 'https://5261puzqsb.execute-api.us-west-2.amazonaws.com/default';
//const key = 'szqaVuropf37NRM8CgdhH3ekEynhYaEewYYz36Qb';
const reqdata = {
    "action": "get"
};

const params = {
    method: "POST",
    body: JSON.stringify(reqdata)
};
const serverResponse = document.getElementById("serverResponse");


fetch(url, params)
    .then(data => {
        return data.json();
    })
    .then(res => {
        console.log(res)
        serverResponse.innerHTML = res;
    })

    .catch(error => console.log(error))


//const xhr = new XMLHttpRequest();
//var reqdata = {
//    "action": "get",
//}

//xhr.onload = function () {
//    const serverResponse = document.getElementById("serverResponse");
//    serverResponse.innerHTML = this.responseText;
//};

//xhr.open("POST", "https://5261puzqsb.execute-api.us-west-2.amazonaws.com/default");

//xhr.setRequestHeader("Content-type", "application/json");
////xhr.setRequestHeader("X-Api-Key", "szqaVuropf37NRM8CgdhH3ekEynhYaEewYYz36Qb");
//xhr.send(JSON.stringify(reqdata));


