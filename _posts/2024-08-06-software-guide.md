---
layout: post
title:  "Software Guide"
date:   2024-08-06 09:09:44 -0400
categories: guide
---

## 1. Introduction

Install Mainsail OS via Raspberry-Pi-Imager as normal. Be sure to configure your SSH key and WiFi settings so that you can SSH into the Raspberry Pi.

## 2. Get up-to-date
SSH into the Raspberry Pi and run the following commands:

```bash
sudo apt update
sudo apt upgrade
```

## 3. Flash the SKR Pico

1. [Download this file](https://lemontron.com/files/klipper.uf2) of you can [manually build the firmware](/manually-build-firmware).
2. Apply the jumper to the `BOOT` pins on the SKR Pico (located in the center, under the `TE` in `BIGTREETECH`).
3. Hold down the `BOOT` button on the SKR Pico and connect the SKR Pico to your computer over USB-C. on the SKR Pico and connect the SKR Pico to your computer over USB-C.