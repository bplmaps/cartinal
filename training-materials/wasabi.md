---
sidebar: auto
---

# Wasabi S3 Cloud Storage

## What is Wasabi?

[Wasabi](https://wasabi.com/) is S3 Cloud storage the LMEC uses to store digital assets.

Some reasons we use Wasabi:
1. It is cost-efficient 
2. BPL also uses it for digital assets
3. The company is Boston-based

## How does LMEC use Wasabi?

There is one main account, registered under the frontdesk@leventhalmap.org email. The manager of this service (previously Belle), creates sub-users, which each have their own username/passwords/access keys to log in. The reason we do this is because different users require different access permissions. The main account login is in the LMEC passwords.

If you are the new manager of this service, you can use Wasabi's online documentation, or call customer service if you have any questions about the nuances of how Wasabi works. Their customer service is prompt and helpful. 

## What does LMEC store in Wasabi? 

Top-level folders in Wasabi are called `buckets`. 

Here are the buckets LMEC currently uses for storage in Wasabi:
- `lmec-cold-storage`: Really large files we don't use anymore in day-to-day operations, such as graphics from past exhibitions
- `public-geospatial`: Main storage repository for the data pointed to from the [Public Data Portal](http://data.leventhalmap.org/)
- `lmec-public-files`: Assets pointed to from various digital projects 
- `urbanatlases`, `oml-urbanatlases`, and `boston-tilesets`: Large raster tilesets used to power tools like Atlascope, and other projects drawing on XYZ tiles

## How do I connect to Wasabi?


There are two ways of connecting to Wasabi:
1. In the browser. 
2. With an FTP client


### Browser access to Wasabi

You should use the browser to do tasks such as:
1. Manage credentials
2. Set up access permissions 
3. Handle billing and other administrative account settings

You should not use the browser to manage file transfers, it is faster and easier to use the FTP client for this. 

To connect to Wasabi via the browser:

1. Visit [https://wasabi.com/](https://wasabi.com/) and select `Sign In`
2. Select `Sign in as a sub-user`
3. Enter `frontdesk@leventhalmap.org` as the `Root Account Email or Alias`
4. Enter your sub-user credentials

### FTP access to Wasabi

To connect to Wasabi using an FTP client for file management purposes, follow these steps:

1. Make sure you have been set up in Wasabi as a subuser and granted programmatic access, which generates a unique API key. 
    * When API keys are generated for users, they need to be saved somewhere safe, as they cannot be regenerated
2. Download the free FTP client [CyberDuck](https://cyberduck.io/)
3. Select `Open Connection`
4. Select `Amazon S3` from the menu drop-down
5. Under server, enter 

```
s3.us-east-2.wasabisys.com
```

::: tip
We use Wasabi's US East 2 [Storage Region](https://wasabi-support.zendesk.com/hc/en-us/articles/360015106031-What-are-the-service-URLs-for-Wasabi-s-different-storage-regions-)
:::

6. Enter your unique access key and secret access key

## Managing bucket-level permissions

To manage asset-by-asset permission settings for a bucket, do the following:

1. Log in to Wasabi using the browser
2. Click on the bucket
3. Select the gear icon for `Settings`
4. Navigate to the `Policies` tab
5. Use the following syntax to set permissions:

``` json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::bucket-name/*"
    }
  ]
}
```



