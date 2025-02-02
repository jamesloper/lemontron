---
layout: bom
title: Stepper Motors
qty: 4
orders: 1
total: 30.91
description: 20mm NEMA17
new: false
links:
  - vendor: AliExpress
    url: https://www.aliexpress.us/item/3256805340023072.html
    note: 17HS08-1004S - Hanpose brand. Cheapest option, found in the JourneyMaker, and you get an extra!
  - vendor: Amazon
    url: https://www.amazon.com/dp/B091YDBK1S?&tag=lemontron-20
    note: Different model, works for me
modification: true
kofi: true
optional: false
category: Electronics
---

These 20mm NEMA17 motors have a faceplate 1.7" wide (43.2 mm) and length of 20mm of the motor body, excluding the shaft.

The Lemontron requires 4 of these motors, as opposed to 3 on
the [JourneyMaker](https://github.com/mcfazio2001/JourneyMaker-Positron). The Lemontron design demands precision from
the builder, so it's required that you cut the wires and re-crimp them! Otherwise your rats nest of wires will be too
large to fit in the Lemontron's case and the electronics will overheat.

## Required Modifications

<ol class="steps">
    {% include step.html
    title = "Cut motor wires"
    image = "motors---cut-wires.jpg"
    content = "Cut the motor wires to the lengths 15cm, 15cm, 10cm, 23cm." %}

    {% include step.html
    title = "Mark shaft"
    image = "motors---mark-shaft.jpg"
    content = "Drop on one of the 10mm thick pulleys and mark the shaft." %}

    {% include step.html
    title = "Trim shaft"
    image = "motors---cut-shaft.jpg"
    content = "Cut the shaft with a dremel and cutoff wheel or hack saw." %}
</ol>