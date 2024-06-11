const sitePage = {
  name: 'sitePage',
  title: 'Site Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'secondaryContent',
      title: 'Secondary Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default sitePage;
