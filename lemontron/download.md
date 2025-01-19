---
layout: post
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
link=site.download_link %}
{% include kofi.html %}
</div>

## Settings

1. Lemontron is designed for FDM and does not require supports.
2. To ensure dimensional accuracy, please use a **0.2mm layer height** and a **0.4mm nozzle**.
3. Top & bottom layers: To avoid infill on 1mm thick vertical features like the top plates, ensure your are using 5 top
   layers and 5 bottom layers.
4. For an insanely buffed printer, use **50% Grid Infill** and **8 Perimeters**, and dial back according to your
   preference.
5. Using my settings will use 800-1000g of filament.

{% include tip.html tip="Don't forget to scale ABS parts to ~100.5%!" %}

## Chassis Inventory & Materials

<ul class="inventory">
{% include inventory-item.html
title="Top Plates"
id="top-plates"
description="Aside from the integrated Lemonstruder, the top plates are mostly decorative. Show off your printing
abilities with a flashy filament and upload your results to the photo album."
preferred_material="PLA"
other_material="PLA"
%}

{% include inventory-item.html
title="Unibody Chassis"
id="chassis"
description="The chassis should be made from a stiff material, and it does not experience savage heat. Therefore I would
recommend PLA."
preferred_material="PLA"
other_material="PLA"
%}

{% include inventory-item.html
title="Mid Plates"
id="mid-plates"
description="high temp material is required because these serve as the motor mounts."
preferred_material="ABS"
other_material="ABS"
%}

{% include inventory-item.html
title="Tensioner"
id="tensioner"
description="The tensioner experiences some torsion, so I like to print it in CF-PET, but it probably doesn't
matter."
preferred_material="CF-PET"
other_material="PLA"
%}

{% include inventory-item.html
title="Lemonstruder"
id="lemonstruder"
description="This part experiences compression from the spring, so CF-PET is a good choice. It's
also extremely small, so the excellent dimensional accuracy of CF-PET is good."
preferred_material="CF-PET"
other_material="PLA"
%}

{% include inventory-item.html
title="Risers"
id="risers"
description="Raspberry Pi mounts to these and they keep the SKR Pico pinned down."
preferred_material="ABS"
other_material="ABS"
%}
</ul>

## Z-Axis Inventory

<ul class="inventory">
{% include inventory-item.html
title="Z-Axis"
id="z-axis"
description="Choose any material for this part, just make sure it looks awesome."
preferred_material="PLA"
other_material="PLA"
%}

{% include inventory-item.html
title="Bed Bracket"
id="bracket"
description="This is best printed in CF-PET."
preferred_material="CF-PET"
other_material="PLA"
%}

{% include inventory-item.html
title="Bed Holder"
id="bed-holder"
description="This is best printed in CF-PET and the spine can be printed in whatever you want, I recommend matching
the tool head materials."
preferred_material="CF-PET"
other_material="PLA"
%}

{% include inventory-item.html
title="Spool Holder"
id="spool-holder"
description="This has a captive nut."
preferred_material="PLA"
other_material="PLA"
%}
</ul>

## Tool Head Inventory

<ul class="inventory">
{% include inventory-item.html
title="Tool Head & Clamp"
id="tool"
description="The tool head houses the hotend and thus must be printed in ABS. The clamp is a small part that holds the
wires in."
preferred_material="ABS"
other_material="ABS"
%}

{% include inventory-item.html
title="Clip"
id="clip"
description="Clips the belt to the tool end. Layer adhesion matters most, so I recommend PETG or PLA."
preferred_material="PETG"
other_material="PLA"
%}
</ul>