function newEvt() {
  document.getElementById("evt").innerHTML += "<input class='evt' type='text' placeholder='Event'><br>";
}
function add() {
  var evt = "";
  for (var i=0; i<document.getElementsByClassName("evt").length; i++) {
    evt += document.getElementsByClassName("evt")[i].value+"<br>";
  }
  document.getElementById("out").innerHTML += "<h4>"+document.getElementById("date").value+"</h4>"+evt+"<br><br><br>";
  document.getElementById("evt").innerHTML = "<input class='evt' type='text' placeholder='Event'><br>";
  document.getElementById("date").value = "";
}
document.getElementById("name").addEventListener("input", upName);
document.getElementById("des").addEventListener("input", upDes);
function upName() {
  document.getElementById("name-txt").innerHTML = document.getElementById("name").value;
}
function upDes() {
  document.getElementById("des-txt").innerHTML = document.getElementById("des").value;
}
function exc() {
  var data = new Blob(["<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'></head><body style='margin:0'>"+document.getElementById("view").innerHTML+"</body>"], {type: "text/html"});
  textFile = window.URL.createObjectURL(data);
  var a = document.createElement("a");
  a.href = textFile;
  a.download = "profile.html";
  a.click();
}
document.getElementById("out").style = "max-width:720px;width:100%;margin:auto;padding-top:2.5rem;font-family: 'Times New Roman';";
