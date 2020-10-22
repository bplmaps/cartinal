---
    sidebar: auto
---

# Understanding Jupyter and Binder 

## Background Information

You may have come across the tools [Jupyter]("https://jupyter.org/index.html") and [Binder]("https://mybinder.org/) while traveling across the web or starting to learn about some of the topics discussed in these guides. Not sure what these are? This guide will explain. 

The Map Center often makes use of the tools Jupyter and Binder when it comes to illustrating concepts using code. These tools are popular are because they allow you to run code in the browser without having all of the necessary "dependencies" already installed locally on your computer.

## What are dependencies?

In coding, often you will have the main language, and then "modules" or "packages" or "libraries," which are developed outside of the main language, as extensions of the main language, and can be brought in to a script or program written in the main language to work along with the main language in order to augment the main language's functionality, or make a certain task easier. 

These "modules" or "packages" or "libraries" as they're sometimes called, are **dependencies**.

For instance, we often use the main language **Python** to programmatically write scripts that perform various spatial analyses and data cleaning. Using Python, we can import useful **Python modules** into our code, such as [GeoPandas]("https://geopandas.org/"), which makes working with tables of data so much easier. 

When a project has been created by installing these **modules** into the project in order to accomplish some task, that project (or "script" or "program") is then **dependent** on those modules in order to work correctly.

## Why are dependencies a challenge?

### Time consuming 
Most of the time, importing or installing these "modules" or "packages" or "libraries" is not difficult. Sometimes, it is a matter of typing the words into your script "import [modulename]". They can take a few minutes to install, or more, depending on their size, and depending on how many there are, this can take up valuable workshop time.

### Inconvenient / inaccessible 
If a workshop is being held in a computer lab, we might not even have access to install anything, depending on the computer settings. 

### Sensitive to particular configurations 
While configuring dependencies *can* be straightforward, sometimes it can be anything but. Depending on what you are trying to do, factors like your operating system, software you already have installed, versions of installed software, and so on can make a huge difference. To have everyone in the workshop set this up real-time, would not be practical at all. For our remote coding examples, we don't assume to know anything about your own computer set up, other than that you are currently accessing this guide on the internet.

::: tip 
Check out Jupyter notebooks and steps on how to launch them in our [Basic Mapmaking in Python workshop guide](./python.html)
:::

## Why do we use Jupyter + Binder?

Jupyter and Binder are tools that run in the browser. Educators (or anyone!) can pre-prepare code (even with lots of dependencies) and host it online. A Jupyter notebook is essentially a space to combine code, text, pictures, really all sorts of media that help you understand a topic better. These notebooks are then launched or deployed using Binder, which basically creates a `virtual environment` in the browser where all of the dependencies you need will work. This way, you can execute the code and nothing will (hopefully!) break.

## General step-by-step

The general steps are:
1. Create a Jupyter notebook with the code, text, images, etc.
2. Store that notebook in a Github repository, so that it is accessible to everyone by a link
3. Copy the link into Binder and launch the notebook, creating a virtual environment where all the code works

## Documenting Projects

Sometimes we use this process for teaching classes at the beginner or fundamentals level.

Other times, we at the Map Center use Jupyter notebooks to self-document geospatial analyses we run that can sometimes be complicated, in order to ensure that the data and maps we make available are reproducible to anyone who comes across them. 

For instance, check out our Jupyter notebook that walks through how we [created a clean boundary file for Massachusetts municipalities](https://github.com/nblmc/massachusetts-municipal-boundaries/blob/main/processor.ipynb).




