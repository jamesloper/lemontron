---
layout: post
title:  "How to rebuild the Positron 90 Hotend"
categories: guide
thumbnail: /assets/guide/hotend.jpg
banner: /assets/guide/hotend.jpg
permalink: /lemontron/:title
---

Despite its savage heat, high flow rate, solid engineering & high quality construction, there is one an issue with the Positron 90
hotend! It ships from the factory loose, causing leaking and horrible results before you tighten it up. It's absolutely
imperative that you rebuild the hotend _before_ you use it.

<ol class="steps">
    {% include step.html
    title = "Remove retaining screw"
    image = "hotend---remove-retaining-screw.jpg"
    content = "Remove the M2.5 screw that retains the thermistor & sock." %}

    {% include step.html
    title = "Remove the sock"
    image = "hotend---remove-sock.jpg"
    content = "Pull off the sock." %}

    {% include step.html
    title = "Remove the clip"
    image = "hotend---remove-clip.jpg"
    content = "Unscrew the screws holding on the clip." %}

    {% include step.html
    title = "Remove the heater"
    image = "hotend---remove-heater.jpg"
    content = "Fully remove the heater and clip." %}

    {% include step.html
    title = "Pull out the thermister"
    image = "hotend---remove-thermistor.jpg"
    content = "It will slide out without force." %}

    {% include step.html
    title = "Pull out the heat break"
    image = "hotend---remove-heat-break.jpg"
    content = "This weird cone-shaped copper bimetallic heat break is quite amazing." %}

    {% include step.html
    title = "Tighten the heat break"
    image = "hotend---tighten-heat-break.jpg"
    content = "Using a 5mm wrench, tighten the heat break carefully! The heat break is copper (a ductile material). I had to shim the wrench with a 0.2 shim to avoid mangling it." %}

    {% include step.html
    title = "Apply boron nitride to the heat break"
    image = "hotend---apply-boron-nitride-to-heat-break.jpg"
    optional = true
    content = "This is completely optional! Don't feel bad if you don't do it, I just can't resist while it's torn down." %}

    {% include step.html
    title = "Apply boron nitride to the heater"
    image = "hotend---apply-boron-nitride-to-heater.jpg"
    optional = true
    content = "Also completely optional. I am told that the heat transfers fine without the paste." %}

    {% include step.html
    title = "Reattach heater and clip"
    image = "hotend---reattach-heater-and-clip.jpg"
    content = "Reattach the heater and clip, applying equal pressure to both screws. Do not over-tighten." %}

    {% include step.html
    title = "Insert thermistor and replace sock"
    image = "hotend---insert-thermistor.jpg"
    content = "Reattach the thermister and sock and replace the retaining screw." %}
</ol>