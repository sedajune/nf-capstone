import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";

const DiyCard = () => {
	return (
		<Box sx={{ mb: 5 }}>
			<ImageList sx={{ width: 370, height: 750, m: "auto" }} variant="woven" cols={3} gap={8}>
				{itemData.map(item => (
					<ImageListItem key={item.img}>
						<img
							src={`${item.img}?w=161&fit=crop&auto=format`}
							srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

export default DiyCard;

const itemData = [
	{
		img: "https://cdn3-www.momtastic.com/assets/uploads/2015/03/IMG_2866.jpg",
		title: "Plastic Bottles",
		source: "momtastic.com",
	},

	{
		img: "https://www.woohome.com/wp-content/uploads/2014/06/diy-recycled-planter-ideas-7.jpg",
		title: "Radio",
		source: "woohome.com",
	},
	{
		img: "https://www.icreativeideas.com/wp-content/uploads/2015/02/40-Creative-DIY-Garden-Containers-and-Planters-from-Recycled-Materials-16.jpg?968a10",
		title: "Drawer",
		source: "icreativeideas.com",
	},
	{
		img: "https://hative.com/wp-content/uploads/2014/07/diy-planter-ideas/7-wall-planter-with-cups-and-shoes.jpg",
		title: "Flip Flops",
		source: "hative.com",
	},
	{
		img: "https://www.icreativeideas.com/wp-content/uploads/2015/02/40-Creative-DIY-Garden-Containers-and-Planters-from-Recycled-Materials-17.jpg",
		title: "Cork",
		source: "icreativeideas.com",
	},
	{
		img: "https://www.momtastic.com/assets/uploads/2016/04/final-2Self-Watering-Planter-handmadebykelly.com-momtastic.com_-1.jpg",
		title: "Plastic Bottles",
		source: "momtastic.com",
	},
	{
		img: "https://www.girljustdiy.com/wp-content/uploads/2017/02/Recycled-Tin-Can-Lantern-close3.jpg?x27700",
		title: "Cans",
		source: "girljustdiy.com",
	},
	{
		img: "https://www.icreativeideas.com/wp-content/uploads/2015/02/40-Creative-DIY-Garden-Containers-and-Planters-from-Recycled-Materials-23.jpg",
		title: "Timber",
		source: "icreativeideas.com",
	},
	{
		img: "http://hative.com/wp-content/uploads/2014/07/diy-planter-ideas/2-old-alarm-clock-planter.jpg",
		title: "Alarm Clock",
		source: "hative.com",
	},
	{
		img: "http://3.bp.blogspot.com/-vdrRsifgCdw/VSZ9dndy_II/AAAAAAAAMrk/MFNLmUhhNYc/s1600/diy-recycled-planter-ideas-12.jpg",
		title: "Bead sieve",
		source: "3.bp.blogspot.com",
	},
	{
		img: "https://cdn.onekindesign.com/wp-content/uploads/2020/04/Recycled-Wood-Pallet-Garden-Ideas-08-1-Kindesign.jpg",
		title: "Palette",
		source: "cdn.onekinddesign.com",
	},
	{
		img: "https://diycraftsfood.trulyhandpicked.com/wp-content/uploads/2016/11/DIY-reycled-planter-for-kids-4.jpg",
		title: "Egg shells",
		source: "diycraftsfood.trulyhandpicked.com",
	},
];
