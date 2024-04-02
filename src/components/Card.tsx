import { Link } from "react-router-dom";

import { TaskBadge, UsageBadge } from "@/components/Badges";

import {
	fallbackThumbnail,
	extractThumbnailFromName,
} from "@/utils/ExtractThumbnails";

type CardProps = {
	name: string;
	type: "model" | "datasource" | "project";
	description?: string;
	tasks?: string[];
	scivision_usable?: boolean;
	labels_provided?: boolean;
	tags?: string[];
	domains?: string[];
	institution?: string;
};

const Card = ({
	name,
	description,
	tasks,
	scivision_usable,
	type,
}: CardProps) => {
	const thumbnailFromName = extractThumbnailFromName(type, name);

	return (
		<div key={name} className="group relative">
			<Link to={`/${type}/` + encodeURIComponent(name)}>
				<div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 shadow-sm">
					{thumbnailFromName === undefined ||
					thumbnailFromName.endsWith("undefined") ? (
						fallbackThumbnail(name)
					) : (
						<img
							src={new URL(thumbnailFromName, import.meta.url).href}
							alt={name}
							className="h-full w-full object-cover object-center"
						/>
					)}
				</div>
			</Link>
			<h3 className="mt-4 text-gray-700 break-words">{name}</h3>

			<p className="mt-1 mb-2 text-sm text-gray-500 min-h-20">{description}</p>

			<Link to={`/${type}/` + encodeURIComponent(name)}>
				<button
					type="button"
					className="w-full rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-scipurple shadow-sm ring-1 ring-inset ring-scipurple hover:bg-gray-50"
				>{`View ${type}`}</button>
			</Link>
			<div className="my-4">
				<UsageBadge usageBool={scivision_usable} />
				{tasks?.map((task) => <TaskBadge taskName={task} key={task} />)}
			</div>
		</div>
	);
};

export default Card;

export const CardSidebar = ({
	name,
	description,
	tasks,
	scivision_usable,
	type,
}: CardProps) => {
	const thumbnailFromName = extractThumbnailFromName(type, name);

	return (
		<div key={name} className="group relative border-b-2 border-gray-300">
			<h3 className="mt-4 font-semibold break-words">{name}</h3>
			<div className="flex">
				<div className="w-5/12 mr-4 aspect-square overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 shadow-sm">
					{thumbnailFromName === undefined ||
					thumbnailFromName.endsWith("undefined") ? (
						fallbackThumbnail(name)
					) : (
						<img
							src={new URL(thumbnailFromName, import.meta.url).href}
							alt={name}
							className="h-full w-full object-cover object-center"
						/>
					)}
				</div>
				<div className="w-3/4">
					<p className="my-2 text-sm text-gray-500">{description}</p>
					<Link to={`/${type}/` + encodeURIComponent(name)}>
						<button
							type="button"
							className="w-full rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-scipurple shadow-sm ring-1 ring-inset ring-scipurple hover:bg-gray-50"
						>{`View ${type}`}</button>
					</Link>
				</div>
			</div>

			<div className="my-4">
				<UsageBadge usageBool={scivision_usable} />
				{tasks?.map((task) => <TaskBadge taskName={task} key={task} />)}
			</div>
		</div>
	);
};

export const MiniCard = ({ name, type }: CardProps) => {
	const thumbnailFromName = extractThumbnailFromName(type, name);

	return (
		<div key={name} className="group relative">
			<h3 className="my-2 text-gray-700 break-words">{name}</h3>
			<Link to={`/${type}/` + encodeURIComponent(name)}>
				<div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 shadow-sm">
					{thumbnailFromName === undefined ||
					thumbnailFromName.endsWith("undefined") ? (
						fallbackThumbnail(name)
					) : (
						<img
							src={new URL(thumbnailFromName, import.meta.url).href}
							alt={name}
							className="h-full w-full object-cover object-center"
						/>
					)}
				</div>
			</Link>

			<Link to={`/${type}/` + encodeURIComponent(name)}>
				<button
					type="button"
					className="w-full mt-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-scipurple shadow-sm ring-1 ring-inset ring-scipurple hover:bg-gray-50"
				>{`View ${type}`}</button>
			</Link>
		</div>
	);
};
