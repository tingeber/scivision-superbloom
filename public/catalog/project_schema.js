const schema = {
    title: 'A project catalog entry',
    type: 'object',
    properties: {
        name: {
            title: 'Name',
            description:
                'Short, unique name for the project (one or two words, under 20 characters recommended)',
            type: 'string',
        },
        header: {
            title: 'Header',
            description:
                'Header that will display at the top of the project page',
            type: 'string',
        },
        description: {
            title: 'Description',
            description:
                'Short description of the project (that will appear when hovering on the project thumbnail)',
            type: 'string',
        },
        page: {
            title: 'Page',
            description: 'Markdown formatted content for the project page',
            type: 'string',
        },
        models: {
            title: 'Models',
            description:
                'Which models from the scivision catalog are used in the project?',
            default: [],
            type: 'array',
            items: { type: 'string' },
        },
        datasources: {
            title: 'Datasources',
            description:
                'Which datasources from the scivision catalog are used in the project?',
            default: [],
            type: 'array',
            items: { type: 'string' },
        },
        tasks: {
            title: 'Tasks',
            description:
                'Which task (or tasks) do the CV models used in the project perform?',
            default: [],
            type: 'array',
            items: { $ref: '#/definitions/TaskEnum' },
            uniqueItems: true,
        },
        institution: {
            title: 'Institutions or organizations',
            description:
                'A list of institutions or organizations that produced or are associated with the project (one per item)',
            default: [],
            type: 'array',
            items: { type: 'string' },
        },
        tags: { title: 'Tags', type: 'array', items: { type: 'string' } },
    },
    required: ['name', 'header', 'tags'],
    additionalProperties: false,
    definitions: {
        TaskEnum: {
            title: 'TaskEnum',
            description: 'An enumeration.',
            enum: [
                'classification',
                'object-detection',
                'segmentation',
                'thresholding',
                'shape-analysis',
                'object-tracking',
                'other',
            ],
            type: 'string',
        },
    },
}
export default schema
