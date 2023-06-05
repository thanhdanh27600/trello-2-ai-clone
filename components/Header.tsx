"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Avatar from "react-avatar";
"react-avatar";

export const Header = () => {
	return (
		<header>
			<div className="flex flex-col md:flex-row items-center p-5 bg-gray-400/10 rounded-b-2xl">
				{/* Logo */}
				<Image
					src={`/logo.svg`}
					alt="Trello logo"
					width={300}
					height={100}
					className="w-44 md:w-56 pb-10 min:pb-0 object-contain"
				/>

				<div className="flex">
					{/* Searchbox */}
					<form className="flex items-center space-x-5 bg-white rouned-sm p-2 shadow-md">
						<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
						<input
							type="text"
							placeholder="Search"
							className="flex-1 outline-none p-2"
						/>
						<button hidden>Search</button>
					</form>
					{/* Avatar */}
					<Avatar name="Dolph Pham" round />
				</div>
			</div>
		</header>
	);
};
