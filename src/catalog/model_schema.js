const schema = {
    title: 'A model catalog entry',
    type: 'object',
    properties: {
        name: {
            title: 'Name',
            description:
                "Short, unique name for the model (one or two words, under 20 characters recommended)\n\n- Good example :white_check_mark:: **Quux Classifier**\n- Okay example :heavy_check_mark:: **quux-classifier**\n- Bad example :x:: **model-456** (prefer a descriptive name)\n- Bad example :x:: **The Quux classification model** (too long; no need to include 'model' in the name)",
            type: 'string',
        },
        description: {
            title: 'Description',
            description: 'Detailed description of the model',
            type: 'string',
        },
        tasks: {
            title: 'Tasks',
            description: 'Which task (or tasks) does the model perform?',
            default: [],
            type: 'array',
            items: { $ref: '#/definitions/TaskEnum' },
            uniqueItems: true,
        },
        pkg_url: {
            title: 'Python package',
            description:
                "A pip requirement specifier to install the model\n\nThis might be just the name of your package if your model is a python package on PyPI, or a URL to the source repository on GitHub or another location (see examples below)\n\n- Good example :white_check_mark:: `sampleproject` (install sampleproject from PyPI)\n- Good example :white_check_mark:: `git+https://github.com/pypa/sampleproject@main` (install sampleproject directly from GitHub, main branch)\n- Bad example :x:: `pip install my-python-package` (don't include the actual pip command, just the package name)\n",
            type: 'string',
        },
        url: {
            title: 'Scivision metadata URL',
            description:
                'The URL to the Scivision metadata yaml file, if it has one (or leave blank)\n\n- Good example :white_check_mark:: `https://raw.githubusercontent.com/alan-turing-institute/scivision_classifier/main/.scivision/model.yml`',
            minLength: 1,
            maxLength: 65536,
            format: 'uri',
            type: 'string',
        },
        scivision_usable: {
            title: 'Model runs with Scivision?',
            description:
                "Can the model be installed and loaded with the scivision Python package, using the command below?\n\n```\nscivision.load_pretrained_model(<model url>, allow_install=True)\n```\n\nSelect 'no' if not sure",
            default: false,
            type: 'boolean',
        },
        institution: {
            title: 'Institutions or organizations',
            description:
                'A list of institutions or organizations that produced or are associated with the model (one per item)',
            default: [],
            type: 'array',
            items: { type: 'string' },
        },
        tags: {
            title: 'Tags',
            description: 'A list of free-form labels to associate with a model',
            default: [],
            type: 'array',
            items: { type: 'string' },
        },
    },
    required: ['name', 'pkg_url'],
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
