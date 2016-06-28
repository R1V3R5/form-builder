import $ from 'jquery';
var formContent = $('.form-content')

function logIt(data) {

};

function formIt(data) {

}

function typeText(data) {
  var template = `
  	<div class="text">
    	<i class="fa ${data.icon}" aria-hidden="true"></i>
    	<label for="${data.id}">${data.label}
		  <input type="${data.type}" id="${data.id}">
		</label>
	</div>
	`
    // console.log(data)
  formContent.append(template)
};

function typeSelect(data) {
  var template = `
  	<div class="select">
	    <select id="${data.id}"><option value="${data.options[0].value}">${data.options[0].label}</option>
	    </select>
	</div>
  `
  formContent.append(template)
};

function typeTextArea(data) {
  var template = `
  	<div class="textarea"
	  	<label for="${data.id}">${data.label}</label>
	  	<textarea id="${data.id}"></textarea>
	</div>
  `
  formContent.append(template)
};


$.ajax({
  url: 'http://json-data.herokuapp.com/forms',
  dataType: 'json'
  // success: formIt,
  // error: logIt
}).then(function(response) {
  // console.log(response)
  response.forEach(function(item) {
    // console.log(item)
    if (item.type === "text" || item.type === "tel" || item.type === "email") {
      typeText(item)
    } else if (item.type === "select") {
      typeSelect(item)
    } else if (item.type === "textarea") {
      typeTextArea(item)
    }
  })
});