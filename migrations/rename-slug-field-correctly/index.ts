import {defineMigration, at, setIfMissing, unset} from 'sanity/migrate'

const from = 'sug'
const to = 'slug'

export default defineMigration({
  title: 'Rename slug field correctly',
  documentTypes: ["page"],

  migrate: {
    document(doc, context) {
      return [
        at(to, setIfMissing(doc[from])),
        at(from, unset())
      ]
    }
  }
})
