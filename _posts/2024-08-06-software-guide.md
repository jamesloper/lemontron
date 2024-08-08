---
layout: post
title:  "Software Guide"
date:   2024-08-06 09:09:44 -0400
categories: guide
---

## Introduction

Install Mainsail OS via [Raspberry-Pi-Imager](https://www.raspberrypi.com/software/). Configure your SSH key and WiFi settings so that you can SSH as soon as it powers up.
SSH into the Raspberry Pi and bring the OS up-to-date:

```bash
sudo apt update && sudo apt upgrade
```

## Flash the SKR Pico

1. [Download the firmware](/downloads/klipper.uf2) (Latest as of 2024-08-06) or [manually build the firmware](/manually-build-firmware).
2. Apply the jumper to the `BOOT` pins on the SKR Pico (located in the center, under the `TE` in `BIGTREETECH`).
3. Hold down the `BOOT` button on the SKR Pico and connect the SKR Pico to your computer over USB-C. on the SKR Pico and connect the SKR Pico to your computer over USB-C.