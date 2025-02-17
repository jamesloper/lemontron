---
layout: guide
title: Download & print settings guide
header_title: Download
description: Settings & Materials
category: Assembly
kofi: true
thumbnail: /assets/content/printed-parts.jpg
permalink: /lemontron/download/
---

<div class="paragraph btn-wrapper">
   {% include button.html 
   title="Download Lemontron"
   link=site.download_link
   icon="cloud_download"
   target="_blank" %}
</div>

{% include tip.html tip="Don't forget to scale all the ABS parts to ~100.5%!" %}

- Supports? What supports? Lemontron does not use supports!
- To ensure dimensional accuracy, use a **0.2mm layer height** and a **0.4mm nozzle**.
- Top & bottom layers: To avoid infill on 1mm thick vertical features like the top plates, ensure your are using 5 top
  layers and 5 bottom layers.
- For an insanely buffed printer, use **50% Grid Infill** and **8 Perimeters**, and dial back according to your
  preference.
- Using my settings will use 800-1000g of filament.
- Most parts have orientations implied by the **teardrop holes**. Always refer to the plated file if unsure.

## Chassis Inventory & Materials

<ul class="inventory">
{% include inventory-item.html
title="Top Plates"
id="top-plates"
description="The top plates are mostly decorative, save for the Lemonstruder. Show off your printing
abilities with a flashy filament and upload your results to the photo album."
preferred_material="PLA" %}

{% include inventory-item.html
title="Unibody Chassis"
id="chassis"
description="The chassis should be made from a stiff material, and it does not experience savage heat. Therefore I would
recommend PLA."
preferred_material="PLA" %}

{% include inventory-item.html
title="Mid Plates"
id="mid-plates"
description="high temp material is required because these serve as the motor mounts."
preferred_material="ABS" %}

{% include inventory-item.html
title="Tensioner"
id="tensioner"
description="The tensioner experiences some torsion, so a drift-resistant material like CF-PET is recommended."
preferred_material="CF-PET"
other_material="PLA" %}

{% include inventory-item.html
title="Lemonstruder"
id="lemonstruder"
description="Lemonstruder is made of two parts. It experiences compression from the spring, so a drift-resistant
material with good dimensional accuracy is preferred."
preferred_material="CF-PET"
other_material="PLA" %}

{% include inventory-item.html
title="Risers"
id="risers"
description="Raspberry Pi mounts to these and they keep the SKR Pico pinned down. The material doesn't matter."
preferred_material="ABS" %}

{% include inventory-item.html
title="Z-Tensioner"
id="z-tensioner"
description="Does not experience much load, but does experience heat from the motor, so ABS is recommended."
preferred_material="ABS" %}

{% include inventory-item.html
title="XY-Spacer"
id="xy-spacer"
description="This links the X and Y rails together to create the XY plane. A stiff material, resistant to warping and
drift, would be ideal like CF-PET."
preferred_material="CF-PET"
other_material="ABS" %}
</ul>

## Z-Axis Inventory

<ul class="inventory">
{% include inventory-item.html
title="Z-Axis"
id="z-axis"
description="Choose any material for this part, just make sure it looks awesome."
preferred_material="PLA" %}

{% include inventory-item.html
title="Bed Bracket"
id="bracket"
description="The bed bracket is made from two parts. A stiff material like CF-PET would be ideal."
preferred_material="CF-PET"
other_material="PLA" %}

{% include inventory-item.html
title="Bed Holder"
id="bed-holder"
description="This is best printed in CF-PET and the spine can be printed in whatever you want, I recommend matching
the tool head materials."
preferred_material="CF-PET"
other_material="PLA" %}

{% include inventory-item.html
title="Spool Holder"
id="spool-holder"
description="This has a captive nut. This has very little material requirements, but if anything, layer adhesion is
important, so PLA is fine."
preferred_material="PLA" %}
</ul>

## Tool Head Inventory

<ul class="inventory">
{% include inventory-item.html
title="Tool Head & Clamp"
id="tool"
description="The tool head houses the hotend and thus must be printed in ABS. The clamp is a small part that holds the
wires in."
preferred_material="ABS" %}

{% include inventory-item.html
title="Clip"
id="clip"
description="Clips the belt to the tool end. Layer adhesion matters most, so I recommend PETG or PLA."
preferred_material="PETG"
other_material="PLA" %}
</ul>