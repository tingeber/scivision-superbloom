type Thumbnails = {
	model: string[];
	datasource: string[];
	project: string[];
};

function extract_thumbnail_paths(
	glob_data: Record<string, () => Promise<unknown>>
) {
	const thumbnail_list: string[] = [];
	for (const path in glob_data) {
		glob_data[path]().then(() => {
			thumbnail_list.push(path);
		});
	}
	return thumbnail_list;
}

export const model_thumbnails = extract_thumbnail_paths(
	import.meta.glob("@/catalog/data/thumbnails/models/*")
);

export const datasource_thumbnails = extract_thumbnail_paths(
	import.meta.glob("@/catalog/data/thumbnails/datasources/*.jpg")
);

export const project_thumbnails = extract_thumbnail_paths(
	import.meta.glob("@/catalog/data/thumbnails/projects/*.jpg")
);

export const thumbnails: Thumbnails = {
	model: model_thumbnails,
	datasource: datasource_thumbnails,
	project: project_thumbnails,
};

export const fallbackThumbnail = (name: string) => {
	return (
		<svg width="100%" role="img" style={{ aspectRatio: 1 }}>
			<rect width="100%" height="100%" fill="#6f6f6f"></rect>
			<text
				x="50%"
				y="50%"
				fill="white"
				textAnchor="middle"
				dominantBaseline="middle"
				fontSize="10pt"
				className="break-words"
			>
				{name}
			</text>
		</svg>
	);
};

export function extractThumbnailFromName(
	type: "model" | "datasource" | "project",
	name: string
) {
	let thumb: string | undefined;

	if (type === "model") {
		thumbnails.model.map((thumbnail: string) => {
			thumbnail.includes(name) ? (thumb = thumbnail) : null;
		});
	} else if (type === "datasource") {
		thumbnails.datasource.map((thumbnail) => {
			thumbnail.includes(name) ? (thumb = thumbnail) : null;
		});
	} else if (type === "project") {
		thumbnails.project.map((thumbnail) => {
			thumbnail.includes(name) ? (thumb = thumbnail) : null;
		});
	}
	return thumb;
}
