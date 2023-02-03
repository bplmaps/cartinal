---
sidebar: auto
---

# Georeference Urban Atlases with Allmaps

::: warning LMEC-specific instructions

While we've made this documentation publicly available, please note that it contains **LMEC-specific instructions**, and may not be exactly replicable across institutions.

:::

This documentation contains step-by-step instructions on creating the underlying data sources for [Atlascope v2](https://atlascope.org), the Leventhal Center's tool for exploring historic urban atlases across Massachusetts.

There are many ways to georeference maps. Because we will be georeferencing online using [Allmaps Editor](https://editor.allmaps.org), there are no system or software requirements, **though it is recommended that you always use the most up-to-date web browser to avoid any buggy behavior**.

<!-- ::: details What is georeferencing?

Georeferencing is the process of matching a scanned map its corresponding, real-life geography by adding ground control points (GCP's). Learn more at our [desktop georeferencing guide](../guides/georeference.md). Allmaps is a web georeferencing tool, powered by the International Image Interoperability Protocol (IIIF), that doesn't require any software installation. Learn more at our [Allmaps georeferencing guide](../guides/allmaps-iiif.md).

::: -->

<!-- ::: details What are urban atlases?

Urban atlases captured fine-grained changes in the built environment of U.S. cities, particularly between about 1860 and 1940. Created by civil engineering firms like the Sanborn Map Company and G.W. Bromley & Co., urban atlases were primarily used to assess taxes or evaluate fire risk.

These large books, which usually mapped cities at the scale of an inch (on the map) to fifty feet (in the real world), were meant to be worked with on a daily basis and thus designed durably. The Leventhal Map & Education Center holds hundreds of atlases of towns and cities across the state of Massachusetts, many of which have been digitized but not georeferenced. While far from comprehensive, urban atlases represent an invaluable set of historic spatial data that lends itself to georeferencing.

::: -->

## Checklist & Table of Contents

::: details The software stack for this process

Nothing needs to be downloaded! You will, however, use the following websites:

- [Allmaps Editor](https://editor.allmaps.org): mask and georeference atlas plates
- [Allmaps Viewer](https://dev.viewer.allmaps.org) and/or Observable: peer inspection
- [Airtable](https://airtable.com): the single source of truth for managing georeferencing progress

:::

- [ ] [Step 1: Updating metadata in Airtable](#step-1-updating-metadata-in-airtable)
- [ ] [Step 2: Load your atlas into Allmaps](#step-2-load-your-atlas-into-allmaps)
- [ ] [Step 3: Masking](#step-3-masking)
- [ ] [Step 4: Creating groud control points](#step-4-creating-ground-control-points)
- [ ] [Step 5: Inspection](#step-5-inspection)

## Step 1: Updating metadata in Airtable <img src="https://seeklogo.com/images/A/airtable-logo-216B9AF035-seeklogo.com.png" width="20" height="20">

At LMEC, we use the Airtable base [Atlascope Geotransformation Progress](https://airtable.com) as the single source of truth for progress in Atlascope georeferencing. This is where you'll find which atlases have been assigned to you. There are three views, but **Grouped by User** will be the easiest for tracking your georeferencing progress.

Lots of the metadata in this Airtable base is populated by LMEC's running list of digitized atlases. Those metadata fields (e.g., `barcode`, `geo_extent2`, `desc_short`) are not editable. However, there are a number of fields we *will* update as we make progress on georeferencing various atlases. The ones 

::: tip Metadata overview

- `who_lmec` describes which LMEC staff member is assigned to an atlas
- `peer_inspector` tracks which LMEC staff memnber is assigned to the [Peer Inspection](#step-5-peer-inspection) step for an atlas
- `georef_status` indicates the georeferencing progress for an atlas
- `multi_towns` indicates whether the atlas contains multiple towns or a single town
- `plate_flags` is used to temporarily flag issues in a corresponding atlas plate for the peer inspection phase
- `ctrl_points` indicates the progress of creating ground control points for an atlas

#### <img src="https://seeklogo.com/images/A/airtable-logo-216B9AF035-seeklogo.com.png" width="20" height="20"> Before proceeding to Step 2, confirm the `who_lmec`, `who_qc`, `georef_status`, and `multi_towns` fields are correct

:::

## Step 2: Load your atlas into Allmaps

### Importing via manifest

<aside>

<h4>Mani-what?</h4>

A **manifest** is a document listing the cargo, passengers, and crew of a vessel (for example, a ship). **IIIF manifests** do exactly the same thing, but for items in digital collections—e.g., the IIIF manifest for an atlas identifies all of its individual plates.

</aside>

Once you've selected an atlas to work on, load it into Allmaps using its IIIF manifest.

We'll use this 11-sheet [atlas of Braintree and Weymouth](https://collections.leventhalmap.org/search/commonwealth:j3862x39j) as an example, but feel free to follow along with any atlas you like.

To get started, simply copy and paste the IIIF manifest into Allmaps Editor input box. **In LMEC collections, IIIF manifests are always an object's URL suffixed with `/manifest`.**

For example, the IIIF manifest of

```
https://collections.leventhalmap.org/search/commonwealth:j3862x39j
```

is

```
https://collections.leventhalmap.org/search/commonwealth:j3862x39j/manifest
```

The atlas may take a minute to load, but once it has, you should see something like this:

|![Allmaps interface](./media/allmaps-editor-overview.png)
|:---:|

## Step 3: Masking

### What is masking?

*Masking* is the process of identifying the part of a scanned image that you actually want to georeference. It usually involves drawing a polygon around any geographic material in a map. As you georeference atlases, there are two kinds of masking that you'll commonly encounter:

<aside>

**Note:** Cartographic accoutrement such as legends and scale bars are sort of a blurry space here. We mask them out for Atlascope, but in other cases, you may want to keep them.

</aside>

1. Masking to **remove non-geographic content, such as the margins of a page**. This kind of mask will be present on almost everything you georeference.
2. Masking to **partition a map containing distinct geographic areas which must be georeferenced separately**.

Since this atlas contains many sheets of front matter with no cartographic detail, like title and copyright pages, we don't need to worry about masking or georeferencing those.

### Start masking

To begin, click on the <img src="./media/mask-button.png" height="20"> button on the banner at the top of Allmaps Editor

Draw the mask polygon by clicking a point on the map. You can move an existing point by clicking, holding, and dragging. When you're done, you can double-click anywhere, or you can single-click on the first point in the polygon.

You should make one mask per distinct geographic area depicted in the atlas. Since this plate contains two areas, we'll make two masks.

|![Allmaps masks](./media/allmaps-mask3.png)
|:---:|

::: tip Handling index maps

Like most atlases, this atlas contains an **index page** (image 6/11). When georeferencing for Atlascope, you often won't have to georeference the index map of an Atlas. You should only georeference part of an index map if it is of fairly large scale (e.g., between 50 feet:1 inch and 200 feet:1 inch).

This index page contains many map insets. Since some of them are large scale, such as the Lake View inset in the Town of Weymouth, we might choose to mask and georeference that, while choosing not to mask and georeference others for the purpose of Atlascope.

:::

Because this page has two inset maps, we made two masks.

---

![Toggle mask](./media/toggle-mask.gif)

---

### Best practices while masking

Generally, you should follow these two principles when masking atlas plates:
1. When possible, exclude non-cartographic data such as north arrows, legends, and blank spaces
2. Draw masks as closely as possible to the outermost cartographic data in the map

As you mask, consider the following:
1. If you were using Atlascope to conduct research in this area, what features would you want to be preserved?
2. Empty space on the *map* doesn't always mean empty space in the *territory*. There's was likely something there in real life, but it's not always easy to tell how this should impact your mask. If you aren't sure where to stop drawing your mask, check in with a colleague. 

#### Example
<br>

<img src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:tb09mv74t/326,190,1869,1596/full/0/default.jpg" height="300">
<img src=./media/allmaps-mask2.png height="300">

In this section of our [atlas of Braintree and Weymouth](https://collections.leventhalmap.org/book_viewer/commonwealth:j3862x39j#1/7), there was a lot of "empty space." We created a mask that followed the outermost cartographic data and excluded what "empty space" we could.

## Step 4: Creating ground control points (GCPs)

To get started, tab over to the <img src="./media/georef-button.png" height="20"> button in Allmaps.

You should see a screen like this:

|![georeference tab](./media/georeference-tab.png)
|:---:|
|The **Georeference tab** in Allmaps Editor

### What are GCPs?

**Ground control points (GCPs)** provide instructions for Allmaps to overlay the scanned atlas plate in the left-hand side of the screen upon a real geography in the right-hand side of the screen.

To do so, identify a place that you can guarantee is the same in both sides of the screen—perhaps a street intersection that hasn't changed, or a building corner that's still there. Then click that point on both sides of the screen.

### Best practices for creating GCPs

<aside>

**Check it out:** Read this [amazing essay](https://www.leventhalmap.org/articles/an-atlas-of-my-hometown-georeferencing-familiar-places/) from Ezra Acavedo, a former LMEC staff member and georeferencing whiz, for inspiration on georeferencing your hometown.

</aside>

1. **Avoid water bodies**—they change too much over time to trust for georeferencing
2. **Roads and buildings are useful**—as long as roads and buildings haven't been torn down or paved over, these are your safest bet for identifying a shared location between past and present
3. **Check your progress**—sometimes it only takes a few points to successfully georeference a map. Furthermore, adding too many points can actually *create* undesirable distortions in the warped image. As you georeference your map, check your progress along the way (for example, maybe at 5 GCPs and again at 10 GCPs)
4. <img src="https://seeklogo.com/images/A/airtable-logo-216B9AF035-seeklogo.com.png" width="20" height="20">**Add plate flags in the Airtable**—if you're unsure about or encounter any problems with an atlas plate, flag it for review during the [Inspection](#step-5-inspection) phase by adding the image number to the `plate_flags` Airtable field

To check your progress, tab over to the<img src="./media/results-button.png" height="20">button. You can either:
1. Right-click on `View current image` and select `Open link in new tab`
2. If on a Mac, hold down `⌘cmd` and click on `View current image`

This will open a new tab in **Allmaps Viewer**, a separate app in the Allmaps platform where you can view georeferenced plates.

::: warning 

As of this writing, Allmaps Viewer is under development and not particularly helpful for checking the accuracy of a warped map. This leaves us with two options for checking our work.

:::

### Development Viewer (recommended)

After opening Allmaps Viewer, simply prefix the URL with `dev.` such that, for example

```
https://viewer.allmaps.org/#?image=26a2a2242bb643f1&map=837c72dd4d472679&type=annotation&data=data:text/x-url,https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2F837c72dd4d472679
```

would become

```
https://dev.viewer.allmaps.org/#?image=26a2a2242bb643f1&map=837c72dd4d472679&type=annotation&data=data:text/x-url,https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2F837c72dd4d472679
```

This routes you to the development version of Allmaps Viewer, which actually applies the mask to the warped map.

|![Allmaps Viewer development view](./media/dev-viewer.png)
|:---:|
|Allmaps Viewer development view

### Observable notebook

While it requires the extra step of copying a Georeference Annotation, viewing warped maps in Bert Spaan's Observable notebook for the Allmaps Tile Server provides the added bonus of an opacity toggle.

First, grab the Allmaps Georeference Annotation URL by clicking on the<img src="./media/code-button.png" height="20">button and then clicking `Open in new tab`. This will open the Allmaps Georeference Annotation for the map you're currently georeferencing. Copy its URL.

|![Observable notebook](./media/get-anno-link.png)
|:---:|

Then, head over to Bert's [Observable notebook for the Allmaps Tile Server](https://observablehq.com/@bertspaan/allmaps-tile-server) and paste that URL into the "IIIF Manifest or Image URI" field.


|![Observable notebook](./media/observable.png)
|:---:|

::: tip Update metadata in Airtable

#### <img src="https://seeklogo.com/images/A/airtable-logo-216B9AF035-seeklogo.com.png" width="20" height="20"> Before proceeding to Step 2, update the `ctrl_points` field to `peer inspecting`. This will notify your peer inspector that it's time for them to review your work.

:::

## Step 5: Peer inspection

As part of the quality control process, someone else will check your georeferenced maps to see whether any changes should be made to the masks or GCPs before the plates are warped in Step 6.

During peer inspection, pay attention not only to how well atlas plates align to their real-world geography, but to **how atlas plates align with one another**. Using the `plate_flag` field, you can mark plates where you find issues.

Issues discovered during peer inspection should be resolved *with* the primary assignee on that atlas; e.g., if Emily finds lots of errors in the 1880 Attleboro atlas that Ian georeferenced, they should walk through those issues together. In this example, **it is still up to Ian to resolve the issues that Emily found.**

The peer inspection process is considered complete when both the primary assignee and the peer inspector agree that the warped atlas plates are satisfactorily aligned to their real-world geography and to one another.

::: tip Update metadata in Airtable

#### <img src="https://seeklogo.com/images/A/airtable-logo-216B9AF035-seeklogo.com.png" width="20" height="20"> Once the peer inspection process is complete, update the `ctrl_points` field to `completed`. Congratulations—you're done! On to the next one...

:::