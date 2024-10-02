---
layout: guide
title: Printed Parts
date:   2024-09-16
category: Assembly
---

The Lemontron plastic parts can be printed on most enclosed printers such as Bambulab X1
and <a href="https://amzn.to/47ut5uQ" target="_blank">Creality K1</a>. Right now, not many Lemontrons have been created.
You should post your settings and materials and the advantages to the Lemontron
thread in the Voxolite Discord so that they can become official recommendations.

## Basic Information

The high temp nature of 3D printers requires ABS or ASA, and don't forget to scale up the parts 1%. Start with these slicer settings:

1. 50% Grid Infill (Very strong infill)
2. 4 Perimeters (Commonly used for strength)
3. 4 Top Layers (Increasing to 4 ensures that 1mm thick parts are printed solid)
4. 3 Bottom Layers (This is the default in most slicers)
5. .2mm Layer Height (Again, a pretty common default)

## Chassis Inventory

<ul class="inventory">

{% include inventory-item.html
title = "Top Plates"
description = "Aside from the integrated Lemonstruder, the top plates are mostly decorative. Show off your printing
abilities with a flashy filament and upload your results to the photo album. They would also look great in resin."
image = "/assets/printed-parts/top-plates.png"
material = "Any"
%}

{% include inventory-item.html
title = "Unibody Chassis"
description = "I recommend adding a <a href='https://www.youtube.com/watch?v=leHHulARH9Q' target='_blank'>modifier</a>
around
the Z axis attachment to increase infill to 60% for added strength. I have working prototypes using plain PLA but I
would recommend ABS."
image = "/assets/printed-parts/chassis.png"
material = "ABS"
%}

{% include inventory-item.html
title = "Mid Plates"
description = "These serve as the motor mounts and thus a high temp material is required."
image = "/assets/printed-parts/midplates.png"
material = "ABS"
%}

{% include inventory-item.html
title = "Lemonstruder"
description = "This part experiences a lot of compression from the spring, so a CF-blend is a good choice here. It's
also extremely small, so the excellent dimensional accuracy of CF-PET is good here. This could also be printed in
resin."
image = "/assets/printed-parts/extruder.png"
material = "CF-PET"
%}

</ul>

## Z-Axis Inventory

<ul class="inventory">

{% include inventory-item.html
title = "Z-Axis"
description = "Choose any material for this part, just make sure it looks awesome."
image = "/assets/printed-parts/z-axis.png"
material = "Any"
%}

{% include inventory-item.html
title = "Bed Bracket"
description = "This is best printed in CF-PET."
image = "/assets/printed-parts/bracket.png"
material = "Any"
%}

</ul>

## Tool Head Inventory

<ul class="inventory">

{% include inventory-item.html
title = "Tool Head & Clamp"
description = "I like to use dual colors for this print. Make the bottom part of the tool black to make it look
sleek."
image = "/assets/printed-parts/tool.png"
material = "ABS"
%}

{% include inventory-item.html
title = "Belt Clip"
description = "You can't see this part so its like whatever man."
image = "/assets/printed-parts/belt-clip.png"
material = "Any"
%}

</ul>

Don't forget to upload your work to
the [Lemontron Photo Album](https://photos.app.goo.gl/ymJsbDJciHWHy3QJ8).