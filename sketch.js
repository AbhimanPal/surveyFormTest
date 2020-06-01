var form;
var database;
function setup() {
  createCanvas(800,800);
  database = firebase.database();
  form = new Form();
  form.display();
  
}
