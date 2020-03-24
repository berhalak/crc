import Vue from "vue";

let components = require.context(
	"../", // context folder
	true, // include subdirectories
	/.\.(vue)$/ // RegExp
);

let distinct = {};
let toRegister = [];

components.keys().forEach(function (key) {
	let regex = /(\w+)\.(vue)$/;
	let pkey = String(key);
	let match = pkey.match(regex);
	if (!match)
		return;
	let name = key.match(regex)[1];
	let type = key.match(regex)[2];

	let cname = name
		.split(/(?=[A-Z])/)
		.join("-")
		.toLowerCase();

	// don't auto register my components
	if (cname.indexOf("my-") == 0) {
		return;
	}

	let component = components(key);
	var proper = component.hasOwnProperty("default") ? component.default : component;
	toRegister.push({
		name,
		proper,
		key
	});
});

for (let r of toRegister) {
	Vue.component(
		r.name,
		r.proper
	);
}