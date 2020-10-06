# Set up a PC to Use Python and GIS Python Libraries

Configuring your PC to be able to run Python from the command line in a way that correctly points to all the various geospatial libraries you want to be able to access can be a total pain. Instead, follow this step-by-step tutorial to configure a proper virtual environment using Anaconda.

Uninstall any remaining Python Anaconda installations via Start > “Apps & features”

Download the Python 3.7 - 64-Bit Graphical Installer [from the Anaconda website](https://www.anaconda.com/distribution/)

::: warning 
You might want to pay attention to where it is being saved
:::
::: warning
 It is normal for this to take a long time to install
 :::

::: tip 
The Getting Started with Conda Guide can be accessed here [https://conda.io/projects/conda/en/latest/user-guide/getting-started.html](https://conda.io/projects/conda/en/latest/user-guide/getting-started.html)
::: 

Windows Start > Anaconda Prompt

```
conda —version
```

``` 
conda update conda
```

You will be prompted with `proceed y/n` <br>
Enter `y`


```
conda init cmd.exe
```

Open a Windows command prompt Windows Start > cmd


```
conda create --name yourenvironmentname python=3.7
```


```
conda activate urenvname
```

``` 
python -v
```
Should return 3.7

Now you can install packages! :tada:

::: tip Packages we use at the Map Center

```
conda install shapely
```
```
conda install fiona
```
```
conda install gdal
```
```
conda install pyproj
```
:::