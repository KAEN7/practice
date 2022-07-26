const statusList = ["SUCCESS", "ERROR"];

function webhook(log, status, label) {
	const fetch = require("node-fetch");
	const webhookURL = "space webhook url";

	const data = JSON.stringify({
		text: `[${label} / ${statusList[status]}] \n ${log}`,
	});
	let resp;
	fetch(webhookURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
		body: data,
	}).then((response) => {
		resp = response;
		console.log(response);
	});
	return resp;
}

module.exports = webhook;
