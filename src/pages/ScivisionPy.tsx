import { PageTitle } from "@/components/Typography";
import { useEffect } from "react";

// Component: The Scivision.Py tab
// route: /scivisionpy

export default function ScivisionPy() {
	useEffect(() => {
		window.Prism?.highlightAll();
	});
	return (
		<>
			<PageTitle>The Scivision.Py Python Library</PageTitle>
			<div className="prose max-w-screen-md">
				<div className="">
					<p>
						Scivision.Py is a Python library for exploring and accessing the
						Scivision catalog programmatically, and for loading
						Scivision-compatible models and datasources.
					</p>
					<p>
						The full documentation is{" "}
						<a href="https://scivision.readthedocs.io/en/latest/">here</a>, and
						the github repo can be found{" "}
						<a href="https://github.com/alan-turing-institute/scivision">
							here
						</a>
						.
					</p>
				</div>
				<h2>Quick Start</h2>
				<div className="">
					<h3>Installation</h3>
					<p>From a terminal, run</p>
					<pre>
						<code className="language-shell">$ pip install scivision</code>
					</pre>
					<h3>Load a model</h3>
					<pre>
						<code className="language-python">
							{`from scivision import load_pretrained_model

resnet18 = load_pretrained_model(
    # The model URL
    "https://github.com/alan-turing-institute/scivision_classifier",

    # A Scivision model can contain several variants --
    # below we select the one to use
    model_selection='resnet18',

    # Allow the model and its dependencies to be installed
    # if they are not already (including tensorflow in this
    # example)
    allow_install=True
)`}
						</code>
					</pre>
					<h3>Load a datasource</h3>
					<pre>
						<code className="language-python">
							{`from scivision import load_dataset

dataset = load_dataset(
    "https://github.com/alan-turing-institute/scivision-test-data"
)

# 'dataset' provides several named arrays.  This datasource
# provides one named 'test_image': The keys can be looked
# up with # \`list(dataset)\` (or by consulting the datasource
# documentation)
#
test_image = dataset['test_image'].read()`}
						</code>
					</pre>
					<p>Optionally, inspect the image (with matplotlib, for example):</p>
					<pre>
						<code className="language-python">
							{`import matplotlib.pyplot as plt

plt.imshow(test_image)`}
						</code>
					</pre>
					<samp>
						<img
							src="/koala-imview.webp"
							alt="result of matplotlib imview: a koala"
						/>
					</samp>
					<h3>Run the model</h3>
					<pre>
						<code className="language-python">
							resnet18.predict(test_image)
						</code>
					</pre>
					<p>
						Output: <samp>'koala : 99.80%' </samp>
					</p>
					<h3>Query the catalogs</h3>
					<p>
						The model and datasource catalogs are available as pandas data
						frames.{" "}
					</p>
					<pre>
						<code className="language-python">
							{`from scivision import default_catalog

# The datasource catalog as a Pandas dataframe
default_catalog.datasources.to_dataframe()

# Similarly for the model catalog
default_catalog.models.to_dataframe()`}
						</code>
					</pre>
				</div>
			</div>
		</>
	);
}
