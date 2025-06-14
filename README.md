This is my personal website. Built using Next.js.

# Running

To run in development mode, use the command: `yarn dev`

To build, use the command: `yarn build`

To deploy, just push to main.

# Adding new Articles or Projects

For each article or project, there should be two files, a `.json` for metadata and a `.md` for the text body and
the pair should have the same name.

For projects, the metadata should have the following attributes:
- *title* - Title of the project;
- *homepage* - The url to the live demo or homepage of the project;
- *repository* - The url to the project;
- *updatedAt* - The last time the project was updated.

For articles, the metadata should have only:

- *title* - Title of the article;
- *createdAt* - When the post was created.

Use the command `yarn doug-gen` to generate new Articles or Projects.
