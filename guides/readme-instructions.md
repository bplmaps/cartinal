---
sidebar: auto
health: 
  underConstruction: true
---

# README Instructions

"A readme file provides information about a data file and is intended to help ensure that the data can be correctly interpreted, by yourself at a later date or by others when sharing or publishing data." - [Cornell Research Data README Guide]("https://data.research.cornell.edu/content/readme")

This guide covers best practices in preparing contextual information about your data processing workflow. Ensuring your work is as clear and reproducible as possible has many benefits, including transparency, education and reproducibility.


## Format

We accept contextual information about your data processing workflow in multiple formats, depending on your time constraints.

### Plain-text README
 If your time is tightly budgeted, we accept plain-text documents addressing the context we like to include with hosted datasets. 
 
 Use the [Recommended Content](./readme-instructions.html#recommended-content) section below to get a sense of what we are looking for.

::: tip Best Practices
 
  - Please write your READMEs in plain text formats, avoiding proprietary documents like MS Word, whenever possible
  - Please separate important pieces of information with blank lines, rather than having all the information in one long paragraph
:::

### Follow-along Tutorial

At the LMEC, when we have the time and we think others could benefit from seeing how we did something, we use Jupyter notebooks or other follow-along, narrative explanations of our processing workflows to describe how a given dataset was manipulated.

This sequential explanation, though more time consuming, ensures that someone could reproduce your process. It also lives on as an educational resource, adding to the larger "constellation of resources" orbiting the data. 

We operate under the "perfect is enemy of the good" philosophy at the LMEC, so if time is a factor, please err on the side of getting us a quick README.

::: tip
See an example LMEC-published Jupyter notebook describing one of our own datasets here: [LMEC Data Processing Description Example](https://github.com/nblmc/massachusetts-municipal-boundaries)
:::

If you would like to contribue your workflow this way, you can use the [Recommended Content](./readme-instructions.html#recommended-content) section to get an idea of the type of information we are looking for. Send us a link of your walkthrough in the blog, notebook or tutorial style you prefer.

## Recommended Content

### General Information

- List the datasets we will find in your submission. How do they relate to one another?
- If input data were combined to make final, cleaned output data, which are the final versions?
- Provide titles for the final, clean versions
- Provide the name and relationship to LMEC of the data processor
  - E.g. Name, Contracted Cartographer

### Access Conditions

- Are there any known use restrictions?

### Method and Process

- **Short description:** A clear, sequential overview of all steps taken and the reasons for making changes or carrying out processing.
- **Successes:** General explanation of how steps taken were beneficial to the improvement of this data for public use.
- **Challenges:** What was difficult about this project, known hangups, missing information, assumptions made, guesses, practical but questionable steps taken.
- **Sandtraps:** Forewarnings or words-to-the wise for someone else wanting to work with this data or project.

### Data Integrity

- Please note if there are missing or blank values in the data, and any possible causes.
- Please include any codebooks you referred to, noting how you used them.
- If fields were added, deleted, or renamed, please indicate which ones and why.
- If you collected this data, please include field name definitions and descriptions, including units of measurement and how you recorded null values.



