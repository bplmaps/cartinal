---
sidebar: auto
---

# Adding a dataset to the LMEC portal 

How to add data to the [public portal](https://data.leventhalmap.org/#/), beginning with data acquisition. The sections of this guide are to be followed sequentially.

## Gathering information about the dataset

The first step to prepping data for the portal is collecting information about how you processed the data.

::: tip BELLE TIP

It's always easier to jot down your processing steps *while* you're doing them, than to try to remember later!

:::


If you are archiving data prepared or collected by someone else, try to talk with them beforehand about capturing this info. Examples might be:

- A researcher creating a unique dataset for their research we want to preserve as open access
- Someone at LMEC working on a [cool digital project](https://www.instagram.com/p/CHDCDTvLShA/) that requires [data manipulation](https://data.leventhalmap.org/#/catalog/dkmqcoshg)
- A partner like BPL or LMEC Education team creating crowd-sourced data from patrons or students

Having a discussion at the outset of any project with whoever is prepping the data you plan to archive will save you so much time and frustration later. Talk about privacy concerns! Talk about why it's important to capture any context a future data user would want in evaluating if the dataset is useful for their own research needs. 

Here is a public-facing [How to Create a README](../guides/readme-instructions.html) document you can send to potential data collaborators, to ensure you are capturing all the info you will need, at the outset of the project.


## Creating a unique ID for the dataset

The next step is to create a unique identifier for the dataset.

- LMEC uses Archival Resource Keys (ARK). Our NAAN number is **76611**. You can read more [here](https://arks.org/about/ark-naans-and-systems/).

- To ensure each dataset has a genuinely unique identifier, we have developed a tool called the [LMEC Identifier Minting Service](https://geoservices.leventhalmap.org/identifier-mint/), which randomly generates unique IDs.

- We keep track of which IDs are in use by sending each newly-minted ID to a [Fauna](https://fauna.com/) database. 

- You can use the [Fauna guide](./fauna.html) to learn how to access the database, which is titled `lmec-data-repository`

- Right now (June 2021), the [LMEC Identifier Minting Service](https://geoservices.leventhalmap.org/identifier-mint/) is only capable of minting new IDs. To mark an ID as obsolete, you can either:
    - manually change the ID object property `obsolete` to `true`, using the Fauna browser dashboard interface as described in the [Fauna guide](./fauna.html)
    - further develop the [minting app](https://github.com/bplmaps/identifier-mint) 0:-)

- Belle kept track of which ID goes with each dataset using natural language names, in [this Airtable](https://airtable.com/invite/l?inviteId=inv94lrLkvWOLlQ3W&inviteToken=baf72e7954f0b16e59f7c86088e519237a0f3a91f983a56809de899877f62713&utm_source=email). You can optionally keep up with this, it's not required, just easier to find the right dataset, when you need to.

### Steps to generating a unique ID

1. Visit the [LMEC Identifier Minting Service](https://geoservices.leventhalmap.org/identifier-mint/)
2. Select `Mint New`
3. From the prefix group dropdown, select `d` for dataset
4. Enter your first and last name under `Creator Name`
5. Upon submit, when the new ID appears, store it somewhere safe:
    - You can check that it was added to the [Fauna](./fauna.html) database titled `lmec-data-repository`
    - You can add a reference record in the `Minted IDs` [Airtable](https://airtable.com/invite/l?inviteId=inv94lrLkvWOLlQ3W&inviteToken=baf72e7954f0b16e59f7c86088e519237a0f3a91f983a56809de899877f62713&utm_source=email)

## Archiving the data

- Decide if you want to host the data at LMEC, or have the metadata record point to an endpoint from another institution. Some reasons you might want to host at LMEC: 
    - You, or someone else, performed significant cleaning or data manipulation you wouldn't want yourself or a researcher to have to replicate
    - The data has been extracted from a statewide or national database, and then clipped to a spatial or statistical parameter you anticipate being frequently in-demand, and are there are no legal barriers to sharing the clipped version in the data portal
    - You are not sure how stable the existing digital storage and access apparatus is for where the data is currently hosted
    - The data is updated frequently, and you want to establish an archive of regular temporal snapshots

### Steps to archiving the data 

1. Connect to `Wasabi` using `CyberDuck` 
    - You can use the training guide [Wasabi S3 Cloud Storage](./wasabi.html) to learn how to access and manage Wasabi assets.
2. Navigate to the bucket titled `public-geospatial`
3. Create a new folder. The name of the folder should be the unique ID you just minted. 
4. Inside that folder, store the data

::: tip BELLE TIPS
- As of June 2021, there is not really established protocols for standard file types, though we have been tending to lean towards GeoJSON & Zipped Shapefiles for vector data.
- There is no protocol yet for naming the actual data files. During portal development, I was using human legible file names.  You might want to standardize this (especially thinking about temporal dimension). 

:::



## Creating a new metadata record

- LMEC metadata records are [stored in Github](https://github.com/bplmaps/metadata)
    - These are public assets

 - In the GH metadata repository, there is [file](https://github.com/bplmaps/metadata/blob/main/template.json) titled `template.json`. You can copy this file any time you want to make a new record. This file is also available from the [main schema documentation page](https://cartinal.leventhalmap.org/documentation/schema/) on Cartinal. 

 <aside>

The schema itself is a living tool. You will inevitably want to edit it, in ways that ensure it is always best supporting your work. If you make changes to `schema.json`, always make sure to roll out those changes to the schema documentation in Cartinal, and to `template.json`. These changes will not be applied automatically.

</aside>

### Steps to creating a new record

1. Clone a local copy of the [LMEC metadata repository](https://github.com/bplmaps/metadata)
2. Duplicate `template.json`. Don't overwrite it! : ) 
3. Rename the duplicate `dataset-identifier.json`
    - e.g. **dkqh27e0e.json**
4. Open the new file in a text editor
5. Populate the record



## Populating records using the LMEC schema

- [Schema documentation](https://cartinal.leventhalmap.org/documentation/schema/) is available on Cartinal.
- The documentation breaks down all of the schema sub-sections, and gives examples of every field with proper syntax 

::: tip BELLE TIP

If you have any questions about using the schema that are not covered in the official documentation or this training guide, please do not hestitate to email me.

:::

::: tip BELLE TIP

If you get stuck, you can always compare against [existing records](https://github.com/bplmaps/metadata).


:::

## Validating records against the schema

When you have finished populating the record, you can check to make sure there are no syntactical errors by validating the record against the schema. It's good to check this, because any errors in the metadata could cause problems in the way the record is displayed in the portal. 


1. Navigate to a [JSON Schema Validator](https://www.jsonschemavalidator.net/)
2. Copy the text of [the schema](https://github.com/bplmaps/data-description-schema/blob/master/schema.json) into the left-hand panel
3. Copy the text of the new record you have just written into the right-hand of the validator
4. The tool will generate errors if there is anything that needs to be fixed


## Publishing the record 

Publishing the record consists of two steps:
1. Committing the record to Github
2. Sending the contents of the record to Algolia, the search as service tool LMEC uses for indexing for the portal

There is a [Python script](https://github.com/bplmaps/algolia-updater) we use to manage the records stored in Algolia.

### Steps to publish the record

1. Commit the record to the [metadata Github repository](https://github.com/bplmaps/metadata)
2. Clone the [algolia-updater script](https://github.com/bplmaps/algolia-updater)
3. Open a new terminal inside the `algolia-updater` folder
4. Run the following command...

``` python

chmod +x ./algolia-updater.py
./algolia-updater.py --repoPath {{/absolute/path/to/the/metadata/repo}}

```

... where the absolute path is the folder on your computer where your recent record is stored (likely Documents/Github/metadata)

5. Scroll through the output to check for invalid endpoints or other errors

::: warning

The feedback from `algolia-updater` is pretty good. Sometimes if you are pointing to external resources as a data endpoint (like the city's data resources), our script will flag as invalid, just due to the way COB and others host their datasets. You can ignore these errors, so long as the external endpoint is accessible. If the script is flagging errors for LMEC-hosted resources, you will definitely want to diagnose that.

:::

## Checking the record in the portal

At this point, the record should be live on [data.leventhalmap.org](https://data.leventhalmap.org/)! Give it a read-through to make sure everything is displaying properly, and check that it is showing up how you want it to in the search page filters.





