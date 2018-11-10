# nonuke

Dev note:
- `parcel-plugin-nunjucks` has an issue where it only listens for file change event from `index.njx`, but not other related template dependencies. (i.e. `partials/`).
