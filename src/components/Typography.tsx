import { Link } from "react-router-dom";
import { ContributeButton } from "@/components/Buttons";

import GridTableSwitcher from "@/components/GridTableSwitcher";

export interface PageTitleProps {
	children: string;
}
export const PageTitle = (props: PageTitleProps) => {
	return (
		<div className="mb-4 pb-2 border-scipurple border-b-2">
			<h2>{props.children}</h2>
		</div>
	);
};

export const ModelsHeader = () => {
	return (
		<>
			<div className="pb-4 border-scipurple border-b-2 flex flex-col md:flex-row justify-between">
				<div className="w-full md:w-7/12">
					<h2>Models</h2>
					<p className="text-sm md:text-base">
						Pre-trained computer vision models that can be loaded and run with
						the <Link to="scivisionpy">Scivision Python library.</Link>
					</p>
				</div>
				<div className="mt-2 md:mt-0">
					<ContributeButton link="/new-model" />
				</div>
			</div>
			{window.location.pathname !== "/" && (
				<div className="">{GridTableSwitcher("model")}</div>
			)}
		</>
	);
};

export const DataHeader = () => {
	return (
		<>
			<div className="pb-4 border-scipurple border-b-2 flex flex-col md:flex-row justify-between">
				<div className="w-full md:w-7/12">
					<h2>Data</h2>
					<p className="text-sm md:text-base">
						Curated image datasets from diverse scientific domains, suitable for
						a variety of computer vision tasks and loadable as array data via
						the numerical Python stack.
					</p>
				</div>
				<div className="mt-2 md:mt-0">
					<ContributeButton link="/new-datasource" />
				</div>
			</div>
			{window.location.pathname !== "/" && (
				<div className="">{GridTableSwitcher("datasource")}</div>
			)}
		</>
	);
};

export const ProjectsHeader = () => {
	return (
		<>
			<div className="pb-4 border-scipurple border-b-2 flex flex-col md:flex-row justify-between">
				<div className="w-full md:w-7/12">
					<h2>Projects</h2>
					<p className="text-sm md:text-base">
						Project using sci.vision: Research projects that have contributed
						scientific image data and computer vision models to the Scivision
						catalog.
					</p>
				</div>
				<div className="mt-2 md:mt-0">
					<ContributeButton link="/new-project" />
				</div>
			</div>
			{window.location.pathname !== "/" && (
				<div className="">{GridTableSwitcher("project")}</div>
			)}
		</>
	);
};
