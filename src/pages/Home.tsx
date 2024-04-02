import { Link } from "react-router-dom";

import { sample_without_replacement } from "@/utils/utils.js";

import Card, { CardSidebar } from "@/components/Card";

// import { ContributeButton } from "@/components/Buttons";
import datasources from "@/catalog/data/datasources.json";
import models from "@/catalog/data/models.json";
import projects from "@/catalog/data/projects.json";

import { makeExcerpt } from "@/utils/MakeExcerpt";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { DataHeader, ModelsHeader } from "@/components/Typography";

// pick three random models and datasources (with thumbnails)
//
const models_sample = sample_without_replacement(models.entries, 3);
const datasources_sample = sample_without_replacement(datasources.entries, 3);
const projects_sample = sample_without_replacement(projects.entries, 3);

// Component: The home page
// route: /
export default function Home() {
	return (
		<main className="-mt-24 pb-8">
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<h1 className="sr-only">Home Page</h1>
				{/* Main 3 column grid */}
				<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
					{/* Left column */}
					<div className="grid grid-cols-1 gap-4 lg:col-span-2">
						<section aria-labelledby="section-1-title">
							<div className="overflow-hidden rounded-lg bg-white shadow">
								<div className="p-6">
									<ModelsHeader />
									<div className="w-75 mx-auto m-3">
										<Link
											to="model-grid"
											className="text-sm no-underline hover:text-scipurple-dark flex items-center place-content-end"
										>
											<span>View all models</span>
											<ArrowLongRightIcon className="w-6 h-6 ml-2" />
										</Link>
										<div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
											{models_sample.map((model) => (
												<Card
													name={model.name}
													key={model.name}
													description={makeExcerpt(model.description)}
													tasks={model.tasks}
													scivision_usable={model.scivision_usable}
													type="model"
												/>
											))}
										</div>
									</div>
								</div>
							</div>
						</section>
						<section>
							<h2 className="sr-only" id="section-1-title">
								Data
							</h2>
							<div className="overflow-hidden rounded-lg bg-white shadow">
								<div className="p-6">
									<DataHeader />
									<div className="w-75 mx-auto m-3">
										<Link
											to="datasource-grid"
											className="text-sm no-underline hover:text-scipurple-dark flex items-center place-content-end"
										>
											<span>View all data</span>
											<ArrowLongRightIcon className="w-6 h-6 ml-2" />
										</Link>
										<div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
											{datasources_sample.map((ds) => (
												<Card
													name={ds.name}
													key={ds.name}
													description={makeExcerpt(ds.description)}
													tasks={ds.tasks}
													scivision_usable={ds.scivision_usable}
													type="datasource"
												/>
											))}
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>

					{/* Right column */}
					<div className="grid grid-cols-1 gap-4">
						<section aria-labelledby="section-2-title">
							<h2 className="sr-only" id="section-2-title">
								Section title
							</h2>
							<div className="overflow-hidden rounded-lg bg-white shadow">
								<div className="p-6">
									<div className="pb-4 border-gray-300 border-b-2 flex justify-between">
										<h2>Projects using Scivision</h2>
									</div>
									<Link
										to="project-grid"
										className="mt-2 no-underline hover:text-scipurple-dark flex items-center place-content-end text-sm"
									>
										<span>View all projects</span>
										<ArrowLongRightIcon className="w-6 h-6 ml-2" />
									</Link>

									{projects_sample.map((proj) => (
										<CardSidebar
											name={proj.name}
											key={proj.name}
											description={makeExcerpt(proj.description)}
											tasks={proj.tasks}
											scivision_usable={proj.scivision_usable}
											type="project"
										/>
									))}
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}
