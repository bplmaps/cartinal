
# Understanding Jupyter and Binder 

You may have come across the tools Jupyter and MyBinder while traveling across the web or starting to learn about some of the topics discussed in these guides. Not sure what these are? This guide will explain. 

The Map Center often makes use of the tools Jupyter and Binder when it comes to illustrating concepts using code. These tools are popular are because they allow you to run code in the browser without having all of the necessary "dependencies" already installed locally on your computer.

In coding, often you will have the core language, and then "modules" or "plugins" or "libraries," which are developed outside of the core language, as extensions of the core language, and can be brought in to a script or program to work alongside the core language in order to augment the core language's functionality, or make a certain task easier. 

For instance, we often use the language `Python` to programmatically write scripts that perform various spatial analyses and data cleaning. Using `Python`, we can import useful `Python` **modules** into our code, such as `Geopandas`, which makes working with tables of data much easier.

::: tip Related Resource
Check out the materials from our [Basic Mapmaking in Python workshop](./python.html)
:::

When a script or program has been created by importing these `modules` to accomplish some task, that script or program is then `dependent` on those modules in order to work correctly.

When you are attending an hour-long workshop, or are following an online tutorial, you likely don't want to be sitting around waiting for the dependencies to all install before you can start learning about the concepts you came to learn about! That is where Jupyter and Binder come in.

Jupyter and Binder are tools that run in the browser. Educators (or anyone!) can pre-prepare code (even with lots of dependencies) and host it online. A Jupyter notebook is essentially a space to combine code, text, pictures, really all sorts of media that help you understand a topic better. These notebooks are then launched or deployed using Binder, which basically creates a `virtual environment` in the browser where all of the dependencies you need will work. This way, you can execute the code and not have anything break!

::: tip Related Resource
Check out our Jupyter notebook on [Creating a clean boundary file for Massachusetts municipalities](https://github.com/nblmc/massachusetts-municipal-boundaries/blob/main/processor.ipynb).
:::

The general steps are:
1. Create a Jupyter notebook with the code, text, images, etc.
2. Store that notebook in a Github repository, so that it is accessible to everyone by a link
3. Copy the link into Binder and launch the notebook, creating a virtual environment where all the code works

