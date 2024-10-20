# VirtualPC

Virtual Machine running on a Web browser.

![alt screenshot](https://raw.githubusercontent.com/lrusso/VirtualXP/master/VirtualXP.png)

## Web

https://gjhkyio.github.io/VirtualPCOnline/

## Editing the VirtualPC Registry

Within the **VirtualPC.iso** image file you will find the following files that belongs to the System Registry.

| REGISTRY KEY  | FILE |
| :------------ | :--------------- |
| HKEY_CURRENT_USER | \I386\SYSTEM32\CONFIG\DEFAULT |
| HKEY_LOCAL_MACHINE | \I386\SYSTEM32\CONFIG\SOFTWARE |

Copy those files to your hard drive (your hard drive must have a standard Windows installation) and run from that standard Windows installation the following lines:

```
reg load HKCU\OFFLINE C:\DEFAULT
reg load HKLM\OFFLINE C:\SOFTWARE
```

Those lines will mount the VirtualPC Registry in:

* HKEY_CURRENT_USER\OFFLINE 
* HKEY_LOCAL_MACHINE\OFFLINE
 
Now open the Registry editor and at the mentioned location you will find all the settings that VirtualPC is using. Modify all the things that you may need in there and after that run the following lines:

```
reg unload HKCU\OFFLINE
reg unload HKLM\OFFLINE
```

Those lines will:

* Remove the **HKEY_CURRENT_USER\OFFLINE** Registry.
* Remove the **HKEY_LOCAL_MACHINE\OFFLINE** Registry.
* Unmount the **DEFAULT** file and save changes in it.
* Unmount the **SOFTWARE** file and save changes in it.

After this, you must copy the modified **DEFAULT** and **SOFTWARE** files back to the **VirtualPC.iso** image file.

## The MODELRAM.EXE file

Within the **VirtualPC.iso** image you will find the **\MODELRAM.EXE** file that it is self extracting exe file created with the 7-Zip command line that automatically extracts the **Documents and Settings** folder in the RAMDisk when VirtualXP is booting. The command to create this file is the following:

```
7z a MODELRAM.EXE -mx9 -sfx "Documents and Settings"
```

## VirtualPC is a modified version of VirtualXP

https://github.com/nepx/halfix

## Disclaimer

The Windows XP minified image is provided for educational purposes ONLY. This demo is not affiliated with or endorsed by their respective copyright holders.
