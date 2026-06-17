import express from "express";
import axios from "axios";
import cors from "cors";
import xml2js from "xml2js";

const app = express();

app.use(cors());

app.get("/api/post-blogs", async (req, res) => {
  try {
    const rssUrl = "https://digitallegacypodcast.com/rss";

    const response = await axios.get(rssUrl);

    const parser = new xml2js.Parser();

    const result = await parser.parseStringPromise(response.data);

    const items = result.rss.channel[0].item;

    const blogs = items
      .filter((item: any) => {
        const enclosureType = item.enclosure?.[0]?.$?.type ?? "";
        return (
          !enclosureType.startsWith("audio/") &&
          !enclosureType.startsWith("video/")
        );
      })
      .map((item: any) => {
        const rawDescription = item.description[0];
        const imgMatch = rawDescription.match(/<img[^>]+src=["']([^"']+)["']/i);
        const image = imgMatch ? imgMatch[1] : null;
        const description = rawDescription.replace(/<[^>]*>/g, "").trim();
        return {
          title: item.title[0],
          link: item.link[0],
          pubDate: item.pubDate[0],
          description,
          image,
        };
      });

    res.json(blogs);
  } catch (error) {
    res.status(500).send("Error fetching RSS");
  }
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
