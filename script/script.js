const editor = grapesjs.init({
	container: "#gjs",
	fromElement: true,
	storageManager: false,
	height: "400px",
	width: "auto",
	panels: { defaults: [] },
	blockManager: {
		appendTo: "#blocks",
		blocks: [
			{
				id: "text",
				label: "ajout text",
				content: "<b>bonjour</b>",
			},
			{
				id: "section",
				label: "Section",
				attributes: { class: "gjs-blocks-section" },
				content:
					"<section><div><p>bonjour</p></div><div><p>bonsoir</p></div></section>",
			},
		],
	},
});

editor.Panels.addPanel({
	id: "top_panel",
	el: ".top_panel",
});

editor.Panels.addPanel({
	id: "btns_panels",
	el: ".btns_panel",
	buttons: [
		{
			id: "visibility",
			label: "<u>B</u>",
			command: "sw-visibility",
		},
		{
			id: "expo",
			label: "Expo",
			command: "export-template",
			context: "export-template",
		},
		{
			id: "json",
			label: "JSON",
			attributes: { class: "show-json" },
			context: "show-json",
			command(editor) {
				editor.Modal.setTitle("formatJSON")
					.setContent(JSON.stringify(editor.getComponents()))
					.open();
			},
		},
	],
});
