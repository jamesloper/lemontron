---
layout: guide
title:  "Build Firmware"
date:   2024-08-07
category: Other
kofi: true
---

You can always download precompiled firmware, but building it yourself can be a good way to stay in control of the process.

{% include button.html
title = "Download Firmware"
link = "/assets/downloads/klipper.uf2"
%}

You might want to manually build the firmware for your SKR Pico rather than download the precompiled firmware. This guide will walk you through the process.

### Get up-to-date
SSH into the Raspberry Pi and run the following commands:

```bash
sudo apt update
sudo apt upgrade
```

### Build firmware

We're going to build the firmware on the Raspberry Pi, and then flash it to the SKR Pico.

```bash
cd klipper
git pull
make menuconfig
make
```

1. Select **Enable extra low-level configuration options**
2. Select **Raspberry Pi RP2040**
3. Select **Serial (on UART0 GPIO1/GPIO0)**

### Flash the SKR Pico

1. Using your computer, download the `klipper.uf2` file from the `klipper/out` directory to your computer.
2. Apply the jumper to the `BOOT` pins on the SKR Pico (located in the center, under the `TE` in `BIGTREETECH`).
3. Hold down the `BOOT` button on the SKR Pico and connect the SKR Pico to your computer over USB-C.