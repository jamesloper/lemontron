---
layout: guide
title:  "Raspberry Pi & SKR Firmware"
date:   2024-08-06
category: Software
---

In this guide, we’ll walk you through the essential steps to get your 3D printer up and running with Mainsail OS on a
Raspberry Pi. You’ll start by installing the operating system, configuring SSH and WiFi settings, and updating the
system. Then, we’ll guide you through flashing the firmware on your SKR Pico board and finalizing the setup on your
Raspberry Pi. By the end, your printer will be fully configured and ready to begin printing.

## Burn an OS onto your MicroSD

Burn Mainsail OS via [Raspberry-Pi-Imager](https://www.raspberrypi.com/software/). Make sure you configure your SSH key and WiFi
settings so that you can SSH as soon as it powers up.
SSH into the Raspberry Pi and bring the OS up-to-date:

```bash
sudo apt update && sudo apt upgrade
```

## Flash the SKR Pico

1. Get your firmware file for the SKR Pico.
    - [Download SRK Pico Firmware](/assets/downloads/klipper.uf2) (Latest as of 2024-08-06) or
    - Check my guide for [Manually Build SKR Pico Firmware](/guides/manually-build-firmware/)
2. Apply the jumper to the `BOOT` pins on the SKR Pico (located in the center, under the "TE" in "BIGTREETECH").
3. Hold down the `BOOT` button on the SKR Pico and connect the SKR Pico to your computer over USB-C and connect the SKR
   Pico to your computer over USB-C.
4. Drag the .uf2 file to the PICO drive that appears. Wait for the drive to disappear and reappear and then disconnect
   the USB-C.

## Set up Raspberry Pi

1. Open up the Raspberry Pi webpage by navigating to the network name of the Raspberry Pi in your browser. If you named
   your printer "lemontron" then your URL would be `http://lemontron.local`.
2. Update everything!
3. Click on the "Machine" tab (the last one) and then upload this [printer.cfg](/assets/downloads/printer.cfg) file. 