const editor = grapesjs.init({
	container: "#gjs",
	fromElement: true,
	height: "100vh",
	width: "auto",
	storageManager: {
		id: "gjs-",
		type: "local",
		autosave: true,
		autoload: true,
		stepsBeforeSave: 1,
		storeComponents: true,
		storeStyles: true,
		storeHtml: true,
		storeCss: true,
	},
	layerManager: {
		appendTo: ".layers-container",
	},
	panels: {
		defaults: [
			{
				id: "layers",
				el: ".panel__right",
				resizable: {
					maxDim: 350,
					minDim: 200,
					tc: 0,
					cl: 1,
					cr: 0,
					bc: 0,
					keyWidth: "flex-basis",
				},
			},
			{
				id: "panel-switcher",
				el: ".panel__switcher",
				buttons: [
					{
						id: "show-layers",
						label:
							'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27M12 18.54l-7.38-5.73L3 14.07l9 7 9-7-1.63-1.27L12 18.54z"></path></svg>',
						active: true,
						command: "show-layers",
						togglable: false,
					},
					{
						id: "show-styles",
						active: true,
						label: '<span class="fa fa-paint-brush" ></span>',
						command: "show-styles",
						togglable: false,
					},
					{
						id: "show-traits",
						label: '<span class="fa fa-cog" ></span>',
						togglable: false,
						command: "show-traits",
					},
					{
						id: "show-tools",
						label: '<span class="fa fa-tool"></span>',
						togglable: false,
						command: "show-tools",
					},
				],
			},
			{
				id: "panel-devices",
				el: ".panel__devices",
				buttons: [
					{
						id: "device-desktop",
						active: true,
						label:
							'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4a2 2 0 0 0-2-2z"></path></svg>',
						command: "set-device-desktop",

						togglable: false,
					},
					{
						id: "device-mobile",
						active: true,
						label:
							'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 18H7V4h9m-4.5 18c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4-21h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1z"></path></svg>',
						command: "set-device-mobile",

						togglable: false,
					},
					{
						id: "device-tablet",
						active: true,
						label:
							'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 18H7V4h9m-4.5 18c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4-21h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1z"></path></svg>',
						command: "set-device-tablet2",

						togglable: false,
					},
				],
			},
		],
	},
	selectorManager: {
		appendTo: ".styles-container",
	},
	styleManager: {
		appendTo: ".styles-container",
		sectors: [
			{
				name: "dimension",
				open: false,
				buildProps: [
					"width",
					"min-height",
					"padding",
					"border-radius",
					"margin",
					"border",
				],
				properties: [
					{
						type: "integer",
						name: "width",
						property: "width",
						units: ["px", "%"],
						defaults: "auto",
						min: 0,
					},
				],
			},
			{
				name: "Extra",
				open: false,
				buildProps: [
					"background-color",
					"box-shadow",
					"custum-prop",
					"color",
					"text-align",
					"display",
					"vertical-align",
					"flex-direction",
					"justify-content",
					"align-items",
					"font-size",
				],
				properties: [
					{
						id: "views-props",
						name: "custom-label",
						property: "font-size",
						type: "integer",
						defaults: "32px",
					},
					{
						property: "text-align",
						name: "aligner le text",
					},
				],
			},
		],
	},
	traitManager: {
		appendTo: ".traits-container",
	},
	blockManager: {
		appendTo: "#blocks",
		blocks: [
			{
				id: "section",
				label: '<b class="iconS">1 colonne</b>',
				attributes: { class: "gjs-blocks-section" },
				content: `
                <section>
                    <h1>Ceci n'est qu'un simple titre de section</h1>
                    <div>Description: de la section</div>
                </section>
                `,
			},
			{
				id: "text",
				label:
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 4l1.16 4.35-.96.26c-.45-.87-.91-1.74-1.44-2.18C16.73 6 16.11 6 15.5 6H13v10.5c0 .5 0 1 .33 1.25.34.25 1 .25 1.67.25v1H9v-1c.67 0 1.33 0 1.67-.25.33-.25.33-.75.33-1.25V6H8.5c-.61 0-1.23 0-1.76.43-.53.44-.99 1.31-1.44 2.18l-.96-.26L5.5 4h13z"></path></svg>',
				content: "<strong>ceci n'est qu'un simple text</strong>",
			},
			{
				id: "image",
				label:
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2V7c0-1.11.89-2 2-2h16M5 16h14l-4.5-6-3.5 4.5-2.5-3L5 16z"></path></svg>',
				select: true,
				content: { type: "image" },
				activate: true,
			},
			{
				id: "video",
				label: '<span class="fa fa-youtube-play"></span>',
				select: true,
				content: { type: "video" },
				activate: true,
			},
			{
				id: "button",
				label: "B",
				content: "<button>button ici</button>",
			},
			{
				id: "2sections",
				label: '<b class="icon2S">2 colonnes</b>',
				content: `
					<div style="display:flex;justify-content:space-between">
						<div style="min-width:auto;width:100%"><h1>block 1</h1><p>Un peu de description pour la page</p></div>
						<div style="min-width:auto;width:100%"><h1>block 2</h1><p>Un peu de description pour la page</p></div>
					</div>
				`,
			},
			{
				id: "3sections",
				label: '<b class="icon3S">3 colonnes</b>',
				content: `
					<div style="display:flex;justify-content:space-between">
						<div style="min-width:auto;width:100%"><h1>block 1</h1><p>Un peu de description pour la page</p></div>
						<div style="min-width:auto;width:100%"><h1>block 2</h1><p>Un peu de description pour la page</p></div>
						<div style="min-width:auto;width:100%"><h1>block 3</h1><p>Un peu de description pour la page</p></div>
					</div>
				`,
			},
			{
				id: "TextInput",
				label: "<b>Input</b>",
				content: `<input type="text" name="tel" placeholder="Saisissez votre numero"/>`,
			},
		],
	},
	mediaCondition: "min-width",
	deviceManager: {
		devices: [
			{
				name: "Desktop",
				width: "",
				widthMedia: "1024",
			},
			{
				name: "Mobile",
				width: "320",
				widthMedia: "",
			},
		],
	},
	assetManager: {
		assets: [
			"http://placehold.it/350x250/78c5d6/fff/image1.jpg",
			// Pass an object with your properties
			{
				type: "image",
				src: "http://placehold.it/350x250/459ba8/fff/image2.jpg",
				height: 350,
				width: 250,
			},
			{
				// As the 'image' is the base type of assets, omitting it will
				// be set as `image` by default
				src: "http://placehold.it/350x250/79c267/fff/image3.jpg",
				height: 350,
				width: 250,
			},
		],
	},
});

// editor.BlockManager.add("#testBlocks", {
// 	label: "Simple text",
// 	category: "Styles",
// 	content: {
// 		tagName: "div",
// 		draggable: false,
// 		attributes: { class: "my-component" },
// 		components: [
// 			{
// 				tagName: "span",
// 				content: "<span>to be a small span</span>",
// 			},
// 			{
// 				tagName: "div",
// 				components: "<span>HTML at some point</span>",
// 			},
// 		],
// 	},
// });

editor.Panels.addPanel({
	id: "panel-top",
	el: ".panel__top",
});

editor.Panels.addPanel({
	id: "panel-basics-buttons",
	el: ".panel__basic-actions",
	buttons: [
		{
			id: "visibility",
			active: false,
			className: "btn-toggle-borders",
			label: "<u>B</u>",
			command: "sw-visibility",
		},
		{
			id: "expo",
			className: "btn-open-export",
			label: "Expo",
			command: "export-template",
			context: "export-template",
		},
		{
			id: "json",
			className: "btn-show-json",
			label:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 3c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2H3v2h1c1.1 0 2 .9 2 2v4c0 1.1.9 2 2 2h2v-2H8v-5c0-1.1-.9-2-2-2 1.1 0 2-.9 2-2V5h2V3m6 0c1.1 0 2 .9 2 2v4c0 1.1.9 2 2 2h1v2h-1c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2h-2v-2h2v-5c0-1.1.9-2 2-2-1.1 0-2-.9-2-2V5h-2V3h2z"></path></svg>',
			context: "show-json",
			command: (editor) => {
				editor.Modal.setTitle("le format en json")
					.setContent(
						`<textarea style="width:100%; height: 250px;">${JSON.stringify(
							editor.getComponents()
						)}</textarea>
                        `
					)
					.open();
			},
		},
	],
});

editor.Commands.add("show-layers", {
	getRowEl(editor) {
		return editor.getContainer().closest(".editor-row");
	},
	getLayersEl(row) {
		return row.querySelector(".layers-container");
	},
	run(editor, sender) {
		const lmEl = this.getLayersEl(this.getRowEl(editor));
		lmEl.style.display = "";
	},
	stop(editor, sender) {
		const lmEl = this.getLayersEl(this.getRowEl(editor));
		lmEl.style.display = "none";
	},
});

editor.Commands.add("show-styles", {
	getRowEl(editor) {
		return editor.getContainer().closest(".editor-row");
	},
	getLayersEl(row) {
		return row.querySelector(".styles-container");
	},
	run(editor, sender) {
		const lmEl = this.getLayersEl(this.getRowEl(editor));
		lmEl.style.display = "";
	},
	stop(editor, sender) {
		const lmEl = this.getLayersEl(this.getRowEl(editor));
		lmEl.style.display = "none";
	},
});

editor.Commands.add("show-traits", {
	getRowEl(editor) {
		return editor.getContainer().closest(".editor-row");
	},
	getLayersEl(row) {
		return row.querySelector(".traits-container");
	},
	run(editor, sender) {
		const el = this.getLayersEl(this.getRowEl(editor));
		el.style.display = "";
	},
	stop(editor, sender) {
		const el = this.getLayersEl(this.getRowEl(editor));
		el.style.display = "none";
	},
});

editor.Commands.add("show-tools", {
	getRowEl(editor) {
		return editor.getContainer().closest(".editor-row");
	},
	getLayersEl(row) {
		return row.querySelector("#blocks");
	},
	run(editor, sender) {
		const el = this.getLayersEl(this.getRowEl(editor));
		el.style.display = "";
	},
	stop(editor, sender) {
		const el = this.getLayersEl(this.getRowEl(editor));
		el.style.display = "none";
	},
});

editor.Commands.add("set-device-desktop", {
	run: (editor) => editor.setDevice("Desktop"),
});

editor.Commands.add("set-device-mobile", {
	run: (editor) => editor.setDevice("Mobile"),
});

editor.Commands.add("set-device-tablet2", {
	run: (editor) => editor.setDevice("Tablet 2"),
});

const blockManager = editor.BlockManager;
const deviceManager = editor.DeviceManager;

blockManager.add("some-block-id", {
	label: `<div>
		<img src="https://picsum.photos/70/70"/>
		<div class="my-label-block">Label block</div>
	  </div>`,
	attributes: { className: "red" },
	content: "<div>bonjour famille</div>",
	render: ({ model, className }) => `<div class="${className}__my-wrap">
		Before label
		${model.get("label")}
		After label
	  </div>`,
});

deviceManager.add("tablet", "900px");
deviceManager.add("tablet2", "900px", {
	height: "100%",
	// At first, GrapesJS tries to localize the name by device id.
	// In case is not found, the `name` property is used (or `id` if name is missing)
	name: "Tablet 2",
	widthMedia: "810px", // the width that will be used for the CSS media
});
