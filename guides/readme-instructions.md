---
sidebar: auto
---

# README Instructions

"A readme file provides information about a data file and is intended to help ensure that the data can be correctly interpreted, by yourself at a later date or by others when sharing or publishing data." - [Cornell Research Data README Guide]("https://data.research.cornell.edu/content/readme")

This guide covers best practices in preparing contextual information about your data processing workflow. Ensuring your work is as clear and reproducible as possible has many benefits, including transparency, education and reproducibility.


## Accepted Formats 

We accept contextual information about your data processing workflow in multiple formats, depending on your time constraints.

### Plain-text README
 If your time is tightly budgeted, we accept plain-text documents addressing the context we like to include with hosted datasets. 
 
 Use the [Recommended Content](./readme-instructions.html#recommended-content) section below to get a sense of what we are looking for.

::: tip Best Practices
 
  - Please write your READMEs in plain text formats, avoiding proprietary documents like MS Word, whenever possible
  - Please separate important pieces of information with blank lines, rather than having all the information in one long paragraph
:::

### Follow-along Tutorial

Step-by-step tutorials in the format of blogs, articles, Jupyter notebooks or any other narrative format explaining your process can be an excellent way to extend the health, longevity and reusability of your work.

This format of sequential explanation, though more time consuming, will ensure that someone else could reproduce your process. It also lives on as an educational resource, adding to the larger [constellation of resources](../documentation/schema/resources.html) orbiting the data. 

::: tip
See an example LMEC-published Jupyter notebook describing one of our own datasets here: [LMEC Data Processing Description Example](https://github.com/nblmc/massachusetts-municipal-boundaries)
:::

If you decide you would like to submit your work in this format, you can use the [Recommended Content](./readme-instructions.html#recommended-content) section to get an idea of the type of information we are looking for. 

**Send us a link** of your walkthrough in the blog, notebook or tutorial style you prefer. If you need help deciding where to host your tutorial, we can help with that.

## Recommended Content

### General Information

1. List the datasets we will find in your submission, including how they relate to or were derived from one another
2. If input data were combined to make final, cleaned output data, indicate which are the final versions
3. Provide titles for final, clean versions

::: tip Citing you!
4. Please provide your preferred name and how you would like your relationship to the data to be listed

 *format:* **Your Name Here, Data Relationship**
  - E.g. Belle Lipton, Archivist
  - E.g. Garrett Dash Nelson, Analyst
  - E.g. Michelle LeBlanc, Educator
  - E.g. Daniel Huffman, Cartographer
  - E.g. Catherine D'Ignazio, Analyst & Educator
::: 

### Access Conditions

1. Please specify what the access conditions of this data are, noting if it is in the public domain, or subject to use restrictions

### Method and Process

1. Please sequentially explain your step-by-step process
2.  Please indicate what you believe to be the strengths or successes of the project, including notes about how this data is now better for public use than it was before your project.
3. Please indicate any challenging aspects of working with the data
4. Please indicate any words of the wise to someone endeavoring to work with any of the resources you have provided

### Data Genealogy

1. If you improved upon data acquired elsewhere, please point us to the tools or portals used for download, with notes about the process and rationale for how you tailored your search/extract

::: tip Examples
  - e.g. portal URL, "searched for towns and downloaded Shapefile"
  - e.g. extract tool URL, "manually drew a bounding box around the area I wished to extract"
:::

### Projection

1. If you selected a specific projection, please note the reasons for your selection


### Data Integrity

1. Please note if there are missing or blank values in the data, and any possible causes
2. Please include any codebooks you referred to, noting how you used them
::: tip Important!
If you cleaned data, deleted, renamed, mathematically calculated or inferred fields from other fields, please include a plain-text codebook for your new data files with field name definitions, including units of measurement 
:::

## Bonus Points

Check out our [descriptive metadata](../documentation/schema) template to get a sense of what types of information we typically capture. If you are privy to any useful additional information, please don't hesitate to include.

*You can contact us about submitting your data project by emailing Belle Lipton at blipton@leventhalmap.org*



