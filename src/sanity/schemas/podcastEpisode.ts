export const podcastEpisodeSchema = {
  name: "podcastEpisode",
  title: "Podcast Episode",
  type: "document" as const,
  fields: [
    {
      name: "title",
      title: "Episode Title",
      type: "string",
      validation: (R: any) => R.required(),
    },
    {
      name: "guestName",
      title: "Guest Name",
      type: "string",
    },
    {
      name: "date",
      title: "Publication Date",
      type: "date",
      validation: (R: any) => R.required(),
    },
    {
      name: "videoUrl",
      title: "Video URL",
      description: "Paste the .mp4 link or YouTube URL",
      type: "url",
    },
    {
      name: "videoType",
      title: "Video Type",
      type: "string",
      options: {
        list: [
          { title: "Long Form", value: "long" },
          { title: "Short Form", value: "short" },
        ],
        layout: "radio",
      },
      initialValue: "long",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "guestName",
      media: "coverImage",
    },
  },
};
