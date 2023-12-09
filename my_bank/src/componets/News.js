import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const News = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h2>News:</h2>
			<List>
				{news.map((item, index) => (
					<ListItem key={index}>
						<ListItemText primary={item.Title} secondary={item.Content} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

const news = [
	{ Title: "Macaques in the midst", Content: "To solve the conflict between humans and macaques we should ‘not manage the wildlife but manage the people" },
	{ Title: "Title News", Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },];

export default News;
export { news };
