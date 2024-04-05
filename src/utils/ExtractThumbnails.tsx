type Thumbnails = {
    model: string[]
    datasource: string[]
    project: string[]
}

export const model_thumbnails = extract_thumbnail_paths(
    import.meta.glob('@/catalog/data/thumbnails/models/*.jpg')
)

export const datasource_thumbnails = extract_thumbnail_paths(
    import.meta.glob('@/catalog/data/thumbnails/datasources/*.jpg')
)

export const project_thumbnails = extract_thumbnail_paths(
    import.meta.glob('@/catalog/data/thumbnails/projects/*.jpg')
)

// export const thumbnails: Thumbnails = {
// 	model: model_thumbnails,
// 	datasource: datasource_thumbnails,
// 	project: project_thumbnails,
// };

// export function create_thumbnail_list(thumbnails: Thumbnails) {
// 	thumbnails.model = extract_thumbnail_paths(
// 		import.meta.glob("@/catalog/data/thumbnails/models/*.jpg")
// 	);
// 	thumbnails.datasource = extract_thumbnail_paths(
// 		import.meta.glob("@/catalog/data/thumbnails/datasources/*.jpg")
// 	);
// 	thumbnails.project = extract_thumbnail_paths(
// 		import.meta.glob("@/catalog/data/thumbnails/projects/*.jpg")
// 	);
// 	return thumbnails;
// }

const modelGlob = import.meta.glob('@/catalog/data/thumbnails/models/*.jpg', {
    import: 'default',
    eager: true,
})

const datasourceGlob = import.meta.glob(
    '@/catalog/data/thumbnails/datasources/*.jpg',
    {
        import: 'default',
        eager: true,
    }
)

const projectGlob = import.meta.glob(
    '@/catalog/data/thumbnails/projects/*.jpg',
    {
        import: 'default',
        eager: true,
    }
)

function extract_thumbnail_paths(glob_data: Record<string, unknown>) {
    const thumbnail_list: string[] = []
    Object.entries(glob_data).map(([v]) => thumbnail_list.push(v))
    return thumbnail_list
}

// function create_thumbnail_list(thumbnails: Thumbnails) {
// 	thumbnails.model = extract_thumbnail_paths(modelGlob);
// 	thumbnails.datasource = extract_thumbnail_paths(datasourceGlob);
// 	thumbnails.project = extract_thumbnail_paths(projectGlob);
// 	return thumbnails;
// }

export const thumbnails: Thumbnails = {
    model: extract_thumbnail_paths(modelGlob),
    datasource: extract_thumbnail_paths(datasourceGlob),
    project: extract_thumbnail_paths(projectGlob),
}
// create_thumbnail_list(thumbnails);

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
    )
}

export function extractThumbnailFromName(
    type: 'model' | 'datasource' | 'project',
    name: string
) {
    let thumb: string | undefined

    if (type === 'model') {
        thumbnails.model.map((thumbnail: string) => {
            thumbnail.includes(name) ? (thumb = thumbnail) : null
        })
    } else if (type === 'datasource') {
        thumbnails.datasource.map((thumbnail) => {
            thumbnail.includes(name) ? (thumb = thumbnail) : null
        })
    } else if (type === 'project') {
        thumbnails.project.map((thumbnail) => {
            thumbnail.includes(name) ? (thumb = thumbnail) : null
        })
    }
    return thumb
}
