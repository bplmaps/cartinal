---
sidebar: auto
---

# Georeference Urban Atlases with Allmaps

::: warning LMEC-specific instructions

While we've made this documentation publicly available, please note that it is specific to the LMEC workflow, and thus may contain instructions that are widely replicable.

:::

This documentation contains step-by-step instructions on creating the underlying data sources for [Atlascope v2](https://atlascope.org), the Leventhal Center's tool for exploring historic urban atlases across Massachusetts. It assumes familiarity with Allmaps and the IIIF protocol.

::: details What is georeferencing?

Georeferencing is the process of matching a scanned map to real-life geography by adding ground control points (GCP's). Learn more at our [georeferencing guide](../guides/georeference.md). Allmaps is a web georeferencing tool, powered by the International Image Interoperability Protocol (IIIF), that doesn't require any lcoal  [georeferencing guide](../guides/allmaps-iiif.md).

:::

## About urban atlases

Urban atlases captured fine-grained changes in the built environment of U.S. cities, particularly between about 1860 and 1940. Created by civil engineering firms like the Sanborn Map Company and G.W. Bromley & Co., urban atlases were primarily used to assess taxes or evaluate fire risk. These large books, which usually mapped cities at the scale of an inch (on the map) to fifty feet (in the real world), were meant to be worked with on a daily basis and thus designed durably. The Leventhal Map & Education Center holds hundreds of atlases of towns and cities across the state of Massachusetts, many of which have been digitized but not georeferenced. While far from comprehensive, urban atlases represent an invaluable set of historic spatial data that lends itself to georeferencing.

There are many ways to georeference maps. Because we will be georeferencing online using [Allmaps Editor](https://editor.allmaps.org), there are no system or software requirements, **though it is recommended that you always use the most up-to-date web browser to avoid any buggy behavior**.

::: tip Learn more about urban atlases

See LMEC's exhibition, *[Building Blocks: Boston Stories from Urban Atlases](https://www.leventhalmap.org/digital-exhibitions/building-blocks/)* for a deeper examination of the role that urban atlases have played in transforming the city.

::: 

## Step 1: Find your next atlas

At LMEC, we use the Airtable base `Atlascope Geotransformation Progress` as the single source of truth for all Atlascope georeferencing progress. 