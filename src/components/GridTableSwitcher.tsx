import {
	TableCellsIcon,
	RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function GridTableSwitcher(type: string) {
	const viewOptions = [
		{
			name: "Grid View",
			href: `/${type}-grid`,
			icon: RectangleGroupIcon,
		},
		{
			name: "Table View",
			href: `/${type}-table`,
			icon: TableCellsIcon,
		},
	];

	return (
		<div className="flex gap-2 place-content-end mb-4">
			{viewOptions.map((view) => (
				<NavLink
					key={view.href}
					to={view.href}
					className={({ isActive }) =>
						isActive
							? " text-scipurple no-underline group inline-flex gap-1 items-center  py-4 px-1 text-sm font-medium"
							: " text-gray-500 hover:text-gray-700 group inline-flex items-center  py-4 px-1 text-sm font-medium no-underline gap-1"
					}
				>
					<view.icon className="h-5 w-5" aria-hidden="true" />
					<span className="">{view.name}</span>
				</NavLink>
			))}
		</div>
	);
}
