# DrHelix website

The information and download site for DrHelix, a native macOS companion for AEM
Edge Delivery Services. The landing-page design uses graphite surfaces, teal
accents, and an actual app screenshot containing fictional demonstration data.

## Local development

```sh
npm ci
npx -y @adobe/aem-cli up --no-open --no-stop-other
```

Open <http://localhost:3000/>. The development server combines local code with
previewed DA content. The authorable sources are `content/index.html`,
`content/nav.html`, and `content/footer.html`, at the normal DA root paths.
`content/` is excluded from Code Bus delivery by `.hlxignore`; content is synced
and published separately from code.

## Sync content to DA

```sh
aem content clone --org cloudadoption --site dr-helix --path /
aem content add content/index.html content/nav.html content/footer.html
aem content commit -m "Update DrHelix website content"
aem content push
```

Clone before editing; it downloads the current DA documents and authenticates
through Adobe IMS. Preview and publish `/index`, `/nav`, and `/footer` using
the AEM Sidekick or Admin API after pushing. `aem content push` alone does not
preview or publish content. Binary uploads use the DA Source API, not CLI
content push. The screenshot is stored at
`https://content.da.live/cloudadoption/dr-helix/media/drhelix-sites.png`.

## Authoring the homepage

Set page metadata **Theme** to `drhelix` to opt into the design. Other pages keep
the existing boilerplate styling. Set **Nav** and **Footer** to the paths of your
authored navigation and footer documents (the examples use `/nav` and `/footer`).
Use the documents in `content/` as the authoring reference.

| Content | Authoring structure |
| --- | --- |
| Product Hero | One cell with an eyebrow paragraph, H1, description, and links; an optional second cell or row with a picture and caption. Extra cells are retained, empty cells are omitted. |
| Hero buttons | A link formatted bold + italic is the teal primary action; an italic link is a secondary action. Both are optional. |
| Cards (Features) | One row per feature, containing an optional icon, H3, description, and optional short category label. The last paragraph is styled as a label when present; with no label, the description remains body text. |
| Cards (Steps) | One row per step, containing H3 and description. Step numbers are generated automatically. |
| Other sections | Default headings and paragraphs. Use Section Metadata **Style** values `feature-section`, `getting-started`, `download-section`, and `faq-section` to match the example. |

Heading anchors are generated from their text by the content pipeline. Keep
navigation and CTA links in sync whenever headings change; custom heading IDs
in the source are not preserved. Use authoring notation such as `:sites:` and
`:helix:` for icons so CLI content normalization retains them. Page theme and
section styling are expressed through Metadata and Section Metadata blocks,
not a custom HTML head or hardcoded section classes.

The download section intentionally says **macOS download coming soon**. Once an
installer is available, replace the status paragraph with a bold + italic link
to the actual installer and add accurate version and system requirements.
Do not advertise a version, release date, or download URL until confirmed.
Preview and publish the authored homepage, navigation, footer, and media
separately from deploying code; a code merge alone does not replace the homepage.

## Environments
- Preview: https://main--dr-helix--cloudadoption.aem.page/
- Live: https://main--dr-helix--cloudadoption.aem.live/

## Documentation

Before using the aem-boilerplate, we recommand you to go through the documentation on https://www.aem.live/docs/ and more specifically:
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `dr-helix` directory in your favorite IDE and start coding :)
