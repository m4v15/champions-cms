import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "gq0s1sn3",
    dataset: "production",
    title: "Champion Gaza",
    apiVersion: "2024-05-31",
    basePath : "/admin",
    plugins: [structureTool()],
    schema: {types: schemas }
})

export default config