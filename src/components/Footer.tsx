import { FaCopyright, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex items-center justify-between border-t border-gray-200 py-8">
				<div className="text-sm text-gray-500 sm:text-left inline-flex gap-2 items-center">
					<FaCopyright />
					<span className="font-mono">
						Some text about Turing and/or SciVision.
					</span>
				</div>
				<div className="text-gray-500 inline-flex gap-3 items-center">
					<Link to="#" className="text-gray-500 hover:text-scipurple">
						<FaYoutube />
					</Link>
					<Link to="#" className="text-gray-500 hover:text-scipurple">
						<FaGithub />
					</Link>
					<Link to="#" className="text-gray-500 hover:text-scipurple">
						<FaTwitter />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
