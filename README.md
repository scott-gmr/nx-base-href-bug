This is a project generated using `create-nx-workspace` with the `react-standalone` template.

The only changes made to demonstrate the bug with the `"baseHref"` property are as follows:

- `"baseHref": "/testBaseHref/"` was added to the `@nx/rspack:rspack` options in `project.json`
- The existing hard-coded `<base href="/" />` tag was removed from `src/index.html`
- `dist` was removed from `.gitignore` so the output of `nx build` can be inspected to show that the `<base>` tag is not present in the output `dist/nx-base-href-bug/index.html`.
- A `console.log` statement was added to `rspack.config.js` to show that the `HtmlRspackPlugin`'s args lack the use of the baseHref property when `nx build` is run.
