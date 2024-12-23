---
layout: guide
title: Printed Parts
date:   2024-09-16
category: Assembly
kofi: true
---

The Lemontron plastic parts can be printed on most enclosed printers such as Bambulab X1C. Right now, not many
Lemontrons have been created. You should post your settings and materials and the advantages to the Lemontron thread in
the Voxolite Discord so that they can become official recommendations.

Each part has it's own ideal material, but if
you are looking for more cost effective rather than optimum, I would recommend you purchase 1 spool of ABS and 1 spool
of PLA.

## Slicer Settings

Ensure your slicer is on these settings so that the features coinside exactly with the 0.4mm nozzle stride and are
properly strong. You can also dial it back to save filament, but <b>use this layer height and nozzle size</b>.

1. 🔔 **Don't forget to scale ABS parts to ~100.5%!** 🔔
2. 50% Grid Infill
3. 8 Perimeters
4. 5 Top Layers
5. 5 Bottom Layers
6. 0.2mm Layer Height
7. 0.4mm Nozzle

## Chassis Inventory

<ul class="inventory">
{% include inventory-item.html
title = "Top Plates"
description = "Aside from the integrated Lemonstruder, the top plates are mostly decorative. Show off your printing
abilities with a flashy filament and upload your results to the photo album."
image = "/assets/printed-parts/top-plates.png"
preferred_material = "PLA"
other_material = "PLA"
%}
{% include inventory-item.html
title = "Unibody Chassis"
description = "You can print this in PLA, but ABS would be stronger. I would recommend PLA because its faster and when
you inevitably print new future Lemontron versions, you'd be wasting ABS."
image = "/assets/printed-parts/chassis.png"
preferred_material = "PLA"
other_material = "PLA"
%}
{% include inventory-item.html
title = "Mid Plates"
description = "These serve as the motor mounts and thus a high temp material is required."
image = "/assets/printed-parts/mid-plates.png"
preferred_material = "ABS"
other_material = "ABS"
%}
{% include inventory-item.html
title = "Belt Tensioner"
description = "The belt tensioner experiences some torsion, so I like to print it in CF-PET, but it probably doesn't
matter."
image = "/assets/printed-parts/belt-tensioner.png"
preferred_material = "CF-PET"
other_material = "ABS"
%}
{% include inventory-item.html
title = "Lemonstruder"
description = "This part experiences compression from the spring, so CF-PET is a good choice. It's
also extremely small, so the excellent dimensional accuracy of CF-PET is good here. This could also be printed in
resin."
image = "/assets/printed-parts/extruder.png"
preferred_material = "CF-PET"
other_material = "PLA"
%}
</ul>

## Z-Axis Inventory

<ul class="inventory">
{% include inventory-item.html
title = "Z-Axis"
description = "Choose any material for this part, just make sure it looks awesome."
image = "/assets/printed-parts/z-axis.png"
preferred_material = "PLA"
other_material = "PLA"
%}
{% include inventory-item.html
title = "Bed Bracket"
description = "This is best printed in CF-PET."
image = "/assets/printed-parts/bracket.png"
preferred_material = "CF-PET"
other_material = "PLA"
%}
</ul>

## Tool Head Inventory

<ul class="inventory">
{% include inventory-item.html
title = "Tool Head & Clamp"
description = "The tool head houses the hotend and thus must be printed in ABS. The clamp is a small part that holds the
wires in."
image = "/assets/printed-parts/tool.png"
preferred_material = "ABS"
other_material = "ABS"
%}
{% include inventory-item.html
title = "Clip"
description = "Clips the belt to the tool end. Layer adhesion matters most, so I recommend PETG or PLA."
image = "/assets/printed-parts/clip.png"
preferred_material = "PETG"
other_material = "PLA"
%}
</ul>