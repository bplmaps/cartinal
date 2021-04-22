# Dealing with Data in the Wild

- Data sets on the LMEC Data Portal have been carefully described to make them as useful as possible to you.
- But what about data "in the wild"?

## Common pitfalls

- There's no way to account for every possible problem or frustration in a dataset you might encounter. But here are some that you might commonly find in geospatial data
    - **No link between features and attributes**. Remember, just because you have attribute data doesn't mean you can make a map. If you have a spreadsheet of place names with some kind of attribute, you're still going to need feature data (a.k.a. *geometry*)
    - **Bad identifiers for joins**. If you do have both features and attributes, they need to be connected to one another with a unique identifier. If your feature and attribute data use different identifiers, you'll have to modify them before they can be linked.
    - **Numbers encoded as strings.** Commas, dollar signs, and percent signs can all trick a computer into thinking that a number is a string. 
    - **Unclear field names**. If your data set is lacking metadata, it might be impossible to tell which field names are useful to you.
    - **No context**. If you make a guess about a field name, you might be guessing wrong. For instance, what if you have a field called `UNEMPLOYPOP`. What does that mean? The unemployed population? In what year? Is it counted out of the whole population, or only adults, or some other subset? Without metadata, you might draw the wrong conclusions.