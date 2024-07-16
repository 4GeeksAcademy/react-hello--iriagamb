import React from "react";
import Header from "./header";
import Card from "./card";

import Footers from "./footers";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Header />
				<div className="row g-3 my-5">
					<Card imageURL ="https://picsum.photos/500/325?random=1" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
					<Card imageURL ="https://picsum.photos/500/325?random=2" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
					<Card imageURL ="https://picsum.photos/500/325?random=3" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
					<Card imageURL ="https://picsum.photos/500/325?random=4" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
				
				</div>
			</div>
			<BottomNavbar />
		</div>
	);
};

export default Home;
