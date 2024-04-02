const schema = {
	title: "Datasource catalog entry",
	type: "object",
	properties: {
		name: {
			title: "Name",
			description:
				"Short, unique name for the datasource (one or two words, under 20 characters recommended)\n\n- Good example :white_check_mark:: **Foobar Penguins**\n- Okay example :heavy_check_mark:: **foobar-penguins**\n- Bad example :x:: **dataset-123** (prefer a descriptive name)\n- Bad example :x:: **Data from the Foobar penguin study** (too long; no need to include 'data' in the title)",
			type: "string",
		},
		description: {
			title: "Description",
			description: "Detailed description of the dataset (no length limit)",
			type: "string",
		},
		url: {
			title: "URL",
			description:
				"The URL to the datasource.  If your datasource has an associated scivision yaml file, this should point to it.  Otherwise, give a URL for downloading the data\n\n- Good example :white_check_mark:: `https://example.com/path/to/datasource.yml` (location of the scivision yml file)\n- Okay example :heavy_check_mark:: `https://example.com/dataset/download/data.zip` (data download URL)\n- Bad example :x:: `example.com/path/to/datasource.yml` (missing URL scheme, like 'https://')\n",
			minLength: 1,
			maxLength: 65536,
			format: "uri",
			type: "string",
		},
		tasks: {
			title: "Suitable tasks",
			description:
				"For which computer vision task or tasks is this datasource likely to be suitable? Select any number",
			type: "array",
			items: { $ref: "#/definitions/TaskEnum" },
			uniqueItems: true,
		},
		labels_provided: {
			title: "Labels included?",
			description:
				"Does the datasource contain labelled examples, suitable for model training or validation?",
			default: false,
			type: "boolean",
		},
		domains: {
			title: "Domain areas",
			description:
				"Which domain area or areas is this datasource from? (One per item, no duplicates)",
			uniqueItems: true,
			type: "array",
			items: {
				type: "string",
				examples: [
					"optical-microscopy",
					"multispectral",
					"hyperspectral",
					"computer-vision",
					"earth-observation",
					"ecology",
					null,
					"cell biology",
					"optical microscopy",
					"fluorescent microscopy",
					"history",
					"urban-planning",
					"plant-biology",
					"agriculture",
					"biology",
					"entomology",
					"marine-biology",
				],
			},
		},
		institution: {
			title: "Institutions or organizations",
			description:
				"A list of institutions or organizations that produced or are associated with the dataset (one per item)",
			default: [],
			type: "array",
			items: {
				type: "string",
				examples: [
					"epfl",
					"Aarhus University",
					"Wikipedia by Erik Veland",
					"Centre for Environment, Fisheries and Aquaculture Science (CEFAS)",
					"Cambridge University",
					"The Alan Turing Institute",
					"Rosalind Franklin Institute",
					"UCL",
					"Broad Institute",
					"Aberystwyth University",
					"National Plant Phenomics Centre",
					"Natural History Museum",
				],
			},
		},
		tags: {
			title: "Tags",
			description: "A list of free-form labels to associate with a datasource",
			default: [],
			type: "array",
			items: {
				type: "string",
				examples: [
					"help-needed",
					"3D",
					"cell",
					"cell-counting",
					"biology",
					"biomedical-science",
					"2D",
					"plant-phenotyping",
					"agriculture",
					"climate-change-and-agriculture",
					"demo",
					"plankton",
					"ecology",
					"environmental-science",
					"satellite",
					"remote-sensing",
					"drone",
					"aerial",
					"butterflies",
					"insects",
					"animals",
					"CryoEM",
					NaN,
					"fluorescence microscopy ",
					"bioimaging",
					"humanities",
					"museum-collections",
					"ocr",
					"pinned-insects",
					"debugging",
					"marine-biology",
					"species-classification",
				],
			},
		},
	},
	required: ["name"],
	additionalProperties: false,
	definitions: {
		TaskEnum: {
			title: "TaskEnum",
			description: "An enumeration.",
			enum: [
				"classification",
				"object-detection",
				"segmentation",
				"thresholding",
				"shape-analysis",
				"object-tracking",
				"other",
			],
			type: "string",
		},
	},
};
export default schema;