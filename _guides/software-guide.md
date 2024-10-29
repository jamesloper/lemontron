---
layout: guide
title:  "Software Guide"
date:   2024-09-17
category: Assembly
kofi: Yes
---

In this guide, we’ll walk you through the essential steps to get your 3D printer up and running with Mainsail OS on a
Raspberry Pi. You’ll start by installing the operating system, configuring SSH and WiFi settings, and updating the
system. Then, we’ll guide you through flashing the firmware on your SKR Pico board and finalizing the setup on your
Raspberry Pi. By the end, your printer will be fully configured and ready to begin printing.

{% include button.html
title = "Download Klipper Config"
link = "/assets/downloads/config-20241010-155612.zip"
%}

{% include button.html
title = "Download Klipper Firmware"
link = "/assets/downloads/klipper.uf2"
notes = "Built on 2024-08-06"
%}

{% include separator.html %}

## Burn an OS onto your MicroSD

Burn Mainsail OS via [Raspberry-Pi-Imager](https://www.raspberrypi.com/software/). Make sure you configure your SSH key
and WiFi settings so that you can SSH as soon as it powers up.
SSH into the Raspberry Pi and bring the OS up-to-date:

```bash
sudo apt update && sudo apt upgrade
```

{% include separator.html %}

## Flash the SKR Pico

1. Apply the jumper to the `BOOT` pins on the SKR Pico (located in the center, under the "TE" in "BIGTREETECH").
2. Hold down the `BOOT` button on the SKR Pico and connect the SKR Pico to your computer over USB-C.
3. Drag the klipper.uf2 file to the PICO drive that appears. Wait for the drive to disappear and reappear and then disconnect.

{% include separator.html %}

## Set up Raspberry Pi

1. Open up the Raspberry Pi webpage by navigating to the network name of the Raspberry Pi in your browser. If you named
   your printer "lemontron" then your URL would be `http://lemontron.local`
2. Update everything!
3. Click on the "Machine" tab (the last one) and upload the Klipper Config files.

## Customization

There is so much more that you can do, so feel free to explore
Positron's [Config Documentation](https://github.com/Positron3D/PositronConfig/blob/main/README.md).