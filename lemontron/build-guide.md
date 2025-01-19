---
layout: guide
title: Build guide
kofi: true
thumbnail: /assets/guide/chassis---tool---screws.jpg
permalink: /lemontron/build-guide/
---

**Welcome to the build guide!** Before you assemble, make sure you grab everything you
need-- [tools](../tools-needed/), [printed parts](../download/) and [ordered parts](../bom/).

All hardware is M3 unless otherwise stated.

{% include tip.html
tip="I support other creators. If you support me, the cycle of kindness continues. Please consider supporting this
project on <a href='https://www.patreon.com/Lemontron' target='_blank'>Patreon</a>!"
icon="volunteer_activism"
shimmer=true
%}

{%- capture download_step -%}
<div class="paragraph">
    {% include button.html
    icon="cloud_download"
    title="Download Lemontron"
    link=site.download_link %}
</div>
The parts are sliced for 1-click printing on a Bambulab X1C, but check out the <a href="/lemontron/download/">Printed
    Parts</a> page for more very important information.
{%- endcapture -%}

<ol class="steps">
    {% include step.html
    title = "Print the parts"
    image = "intro---slicer.png"
    content = download_step %}

    {% include step.html
    title = "Install the software"
    image = "intro---sd-card.jpg"
    content = "Use the <a href='../software-guide/'>Software Guide</a> to install the required software on to the Raspberry Pi and SKR Pico. The SKR Pico is hard to reach once the Lemontron is assembled!" %}

    {% include step.html
    title = "Insert the screws"
    image = "bed-holder---insert-screws.jpg"
    content = "Drop two 40mm button heads into the holes." %}

    {% include step.html
    title = "Scrape the mating surface flat"
    image = "bed-holder---scrape.jpg"
    content = "Using a blade, lightly scrape the surface. This will remove any gaps and make the parts fit together
    beautifully." %}

    {% include step.html
    title = "Screw in the spine"
    image = "bed-holder---attach-spine.jpg"
    content = "Secure it with 5 14mm countersinks." %}

    {% include step.html
    title = "Install the posts"
    image = "bed-holder---posts.jpg"
    content = "Onto a 20mm button head, drop a 12mm washer, small bearing, another washer, a yellow spring that's been
    cut in
    half, and a nut." %}

    {% include tip.html tip="Follow the old machinists tapping tip which is to drive the screw in, back it out, and
    drive it in some more, over and over. This is the only way you'll be able to reuse the plastic threads next time you
    disassemble it." %}

    {% include step.html
    title = "Gather Z-Axis parts"
    image = "z-axis---parts.jpg"
    content = "Gather the Z-Axis (Printed), Bracket (Printed), MGW9C Linear Rail, Several 6mm Countersunk Screws, 2 x
    25mm Countersunk Screws, M5 Shims, M5 Bearings, Lead screw & Nut, Drive Pulley, and Belt." %}

    {% include step.html
    title = "Insert the bearings"
    image = "z-axis---insert-bearings.jpg"
    content = "Insert the two bearings into the bottom seats. Optionally, insert an additional bearing in the top seat."
    %}

    {% include step.html
    title = "Insert the lead screw"
    image = "z-axis---lead-screw.jpg"
    content = "Insert the lead screw through so that it just pokes through the bottom bearing." %}

    {% include step.html
    title = "Drop in the first shim"
    image = "z-axis---first-shim.jpg"
    content = "Drop in the first shim. This shim allows the bearing to turn while pressing against the drive pulley." %}

    {% include step.html
    title = "Drop in the drive pulley"
    image = "z-axis---drive-pulley.jpg"
    content = "Drop in the drive pulley with the belt pre-installed. Advance the lead screw flush with the top of the
    pulley." %}

    {% include step.html
    title = "Fish in the second shim"
    image = "z-axis---second-shim.jpg"
    content = "Use something thin to fish in the second shim. Push the lead screw all the way through." %}

    {% include step.html
    title = "Add the bracket"
    image = "z-axis---add-bracket.jpg"
    content = "After securing the nut to the bracket, install the bracket onto the lead screw." %}

    {% include tip.html
    title="Manufacturer's Differences"
    tip="If your nut is countersunk, use countersunk screws. If not, you can countersink it, or use button head screws.
    It makes no difference." %}

    {% include step.html
    title = "Cut the lead screw"
    image = "z-axis---tighten-grub-screws.jpg"
    content = "Align the lead screw's top with the top of the bearing seat and CUT the bottom off." %}

    {% include step.html
    title = "Tighten grub screws"
    image = "z-axis---tighten-grub-screws.jpg"
    content = "Tighten the grub screws." %}

    {% include step.html
    title = "Install the rail"
    image = "z-axis---install-rail.jpg"
    content = "Lay down the rail, give it a few love taps, and secure it with 6mm countersinks." %}

    {% include step.html
    title = "Gather edge connector parts"
    image = "z-axis---edge-connector.jpg"
    content = "Cut approximately 50cm of silicone power wire and signal wires." %}

    {% include step.html
    title = "Solder the power wires"
    image = "z-axis---edge-connector---power-wires.jpg"
    content = "Fan out the wire strands, and use the wire to bridge the two conductors as shown. Twist the end. Solder.
    Trim the excess." %}

    {% include step.html
    title = "Solder the signal wires"
    image = "z-axis---edge-connector---signal-wires.jpg"
    content = "Solder two thin gauge signal wires to the two middle conductors." %}

    {% include step.html
    title = "Sleeve the wires"
    image = "z-axis---edge-connector---sleeve.jpg"
    content = "Cut the wire sleeve to 32cm and finesse it onto the wires." %}

    {% include step.html
    title = "Cut the wires"
    image = "z-axis---edge-connector---cut-wires.jpg"
    content = "Cut the power wire to 44cm and the signal wires to 42cm." %}

    {% include step.html
    title = "Tin the power wires"
    image = "z-axis---edge-connector---strip-power-wires.jpg"
    content = "Strip 5mm of insulation from the power wires and tin them." %}

    {% include tip.html
    title="Note for the armchair experts who cry about ferrules"
    tip="If I hear one more idiotic comment about your stupid ferrules, I will find a tiny ferrule
    for your tiny benis and clamp it so hard that you'll wish I would use the iron instead." %}

    {% include step.html
    title = "Crimp signal wires"
    image = "z-axis---edge-connector---crimp-signal-wires.jpg"
    content = "Crimp the two signal wires. Learn how to crimp goooood <a href='/lemontron/how-to-crimp'>here</a>." %}

    {% include step.html
    title = "Insert connector"
    image = "z-axis---edge-connector---insert-connector.jpg"
    content = "Insert the two crimped signal wires into the JST connector. Polarity does not matter." %}

    {% include step.html
    title = "Slide in edge connector wire"
    image = "z-axis---install-edge-connector.jpg"
    content = "Slide the wires in through the slot in the bracket and press the edge connector into place." %}

    {% include step.html
    title = "Tighten bracket"
    image = "z-axis---tighten-bracket.jpg"
    content = "Tighten the bracket on to the carriage with two 25mm countersunk screws." %}

    {% include step.html
    title = "Gather Lemonstruder parts"
    image = "lemonstruder---parts.jpg"
    content = "Top & bottom halfs (Printed), super glue, yellow spring, 8mm countersunk screw, small bearing, 2 small shims (Off frame, sorry)" %}

    {% include step.html
    title = "Glue halves together"
    image = "lemonstruder---glue.jpg"
    content = "Dap two tiny dots of super glue as pictured." %}

    {% include step.html
    title = "Insert the first shim"
    image = "lemonstruder---first-shim.jpg"
    content = "Insert the first shim, using a small screw to help guide it in. This shim will allow the bearing to
    rotate against the plastic housing." %}

    {% include step.html
    title = "Insert the bearing"
    image = "lemonstruder---bearing.jpg"
    content = "Insert the bearing on top of the shim." %}

    {% include step.html
    title = "Insert the second shim"
    image = "lemonstruder---second-shim.jpg"
    content = "Using tweezers, insert the second shim between the bearing and the plastic housing." %}

    {% include step.html
    title = "Insert the screw"
    image = "lemonstruder---insert-screw.jpg"
    content = "Insert the screw, pushing out the small screw. This screw is designed to not fit completely flush." %}

    {% include step.html
    title = "Insert the spring"
    image = "lemonstruder---insert-spring.jpg"
    content = "Insert the unmodified yellow boinger." %}

    {% include step.html
    title = "Insert the Lemonstruder"
    image = "lemonstruder---finished.jpg"
    content = "Insert the Lemonstruder into the left top plate." %}

    {% include step.html
    title = "Cut motor wires"
    image = "motors---cut-wires.jpg"
    content = "Cut the motor wires to the lengths 15cm, 15cm, 10cm, 23cm." %}

    {% include step.html
    title = "Crimp motor wires"
    image = "motors---crimping.jpg"
    content = "Crimp every motor wire." %}

    {% include step.html
    title = "Insert the crimps into the connector"
    image = "motors---connector.jpg"
    content = "Starting from the triangle mark, go in order of black, green, blue, red." %}

    {% include step.html
    title = "Gather parts for the tool"
    image = "tool.jpg"
    content = "Tool body (printed), hotend, small fan, big fan, probe, connectors, crimps, power wires (silicone),
    signal wires, M2.5 screws, pcb." %}

    {% include step.html
    title = "Tighten the heat break"
    image = "hotend.jpg"
    content = "The heat break is loose from the factory. You need to rebuild the hotend."
    buttonTitle="Guide &rarr; Rebuild the Hotend"
    buttonLink="/lemontron/how-to-rebuild-positron-hotend"
    %}


    {% include step.html
    title = "Modify the part cooling fan"
    image = "fan---modify.jpg"
    content = "Completely remove the two mounting tabs and wire retaining clip." %}

    {% include step.html
    title = "Push the wires through"
    image = "tool---insert-wires.jpg"
    content = "Push the part cooling fan wires through the cavity of the tool head." %}

    {% include step.html
    title = "Drop in the hotend"
    image = "tool---insert-hotend.jpg"
    content = "The hotend will smoosh the wires and keep them in place. Now is a good time to strip the wires." %}

    {% include step.html
    title = "Fasten the hotend"
    image = "tool---fasten-hotend.jpg"
    content = "Use 6mm screws to attach the hotend to the tool body." %}

    {% include step.html
    title = "Fasten the probe"
    image = "tool---fasten-probe.jpg"
    content = "Use 6mm screws to fasten the probe to the tool body." %}

    {% include step.html
    title = "Insert small fan"
    image = "tool---insert-small-fan.jpg"
    content = "Insert the small fan and push it under the ledge so that it's touching the head sink." %}

    {% include step.html
    title = "Drop in the part cooling fan"
    image = "tool---seat-part-cooling-fan.jpg"
    content = "Finish dropping in the cooling fan to lock everything in place." %}

    {% include step.html
    title = "Tin the pcb"
    image = "tool---tin-pcb.jpg"
    content = "Apple some solder to hasten the wire bonding." %}

    {% include step.html
    title = "Fasten the pcb"
    image = "tool---fasten-pcb.jpg"
    content = "Fasten the pcb to the heat sink using 6mm M2.5 screws." %}

    {% include step.html
    title = "Solder the hotend fan"
    image = "tool---solder-hotend-fan.jpg"
    content = "Solder the hotend fan (small fan) to the pads on the pcb." %}

    {% include step.html
    title = "Solder the part cooling fan"
    image = "tool---solder-part-cooling-fan.jpg"
    content = "Solder the part cooling fan (big fan) to the pads on the pcb." %}

    {% include step.html
    title = "Solder the heater"
    image = "tool---solder-heater.jpg"
    content = "Clip and strip the wires at the end of the heat shrink tube. Solder to the pads on the pcb." %}

    {% include step.html
    title = "Shorten the thermistor spring"
    image = "tool---shorten-thermistor.jpg"
    content = "Clip the spring in half." %}

    {% include step.html
    title = "Solder the thermistor"
    image = "tool---solder-thermistor.jpg"
    content = "Clip and strip the wires and solder them to the pads on the pcb." %}

    {% include step.html
    title = "Plug in & solder the probe"
    image = "tool---solder-probe-wires.jpg"
    content = "Plug in the probe and split off one of the grounds (black or brown) and solder it to the pad. You can
    reuse this wire so don't throw it away." %}

    {% include step.html
    title = "Solder the heater wire"
    image = "tool---solder-ext-heater.jpg"
    content = "Solder the heater wire. Don't solder it as pictured. The pcb is literally labelled, I don't know why I
    flipped it but I did. I will replace this picture later." %}

    {% include step.html
    title = "Solder the thermistor wire"
    image = "tool---solder-ext-thermistor.jpg"
    content = "Using the leftover wire from the probe, solder the thermistor signal wire." %}

    {% include step.html
    title = "Solder the fan wires"
    image = "tool---solder-ext-fan-wires.jpg"
    content = "Cut two wires roughly to 50cm and solder them to the two fan pads on the pcb." %}

    {% include step.html
    title = "Wrap the wires"
    image = "tool---wire-sleeve.jpg"
    content = "Use 47cm of wire sleeve to wrap the wires." %}

    {% include step.html
    title = "Insert the clamp"
    image = "tool---insert-clamp.jpg"
    content = "Clamp down the wires by pushing in the clamp and securing it with a 10mm M2.5 screw." %}

    {% include step.html
    title = "Clip the tool wires"
    image = "tool---clip-wires.jpg"
    content = "Cut the heater wire and probe wires to 53cm, the rest to 55cm." %}

    {% include step.html
    title = "Tin the heater wires"
    image = "tool---tin-heater-wires.jpg"
    content = "Trim back 5mm off the heater wires and tin the ends." %}

    {% include step.html
    title = "Crimp the thermistor wire"
    image = "tool---connector-thermistor.jpg"
    content = "Crimp the thermistor wire and insert it into the connector side without the marking." %}

    {% include step.html
    title = "Crimp the hotend fan wire"
    image = "tool---connector-hotend-fan.jpg"
    content = "Crimp the hotend fan wire and insert it into the connector side without the marking." %}

    {% include step.html
    title = "Crimp the part cooling fan wire"
    image = "tool---connector-part-cooling-fan.jpg"
    content = "Crimp the part cooling fan wire and insert it into the connector side without the marking." %}

    {% include step.html
    title = "Crimp the probe sensor wires"
    image = "tool---connector-probe-sensor.jpg"
    content = "Crimp the probe sensor wires and insert them into position 2 & 3 as shown." %}

    {% include step.html
    title = "Crimp the probe servo wires"
    image = "tool---connector-probe-servo.jpg"
    content = "Crimp the probe servo wires and insert them as shown; black on the marking, white on the other position."
    %}


    {% include step.html
    title = "Gather the chassis parts"
    image = "chassis.jpg"
    content = "This is the rest of the parts! Draw the rest of the horse!" %}

    {% include step.html
    title = "Insert the heat set inserts"
    image = "chassis---threaded-inserts.jpg"
    content = "Insert the 6 inserts in the bottom holes using a soldering iron or heat set insert tool. These 10mm long
    threaded inserts are super strong." %}

    {% include step.html
    title = "Clean up the inserts"
    image = "chassis---clean-up-inserts.jpg"
    content = "After pushing in the inserts, clean up with a razor." %}

    {% include step.html
    title = "Insert the top z-block insert"
    image = "chassis---z-block-top-insert.jpg"
    content = "Insert the top z-block insert from the top." %}

    {% include step.html
    title = "Insert the bottom z-block inserts"
    image = "chassis---z-block-bottom-inserts.jpg"
    content = "Insert the bottom two z-block inserts from the rear." %}

    {% include step.html
    title = "Insert the vertical chassis stiffeners"
    image = "chassis---stiffener-vertical.jpg"
    optional = true
    content = "Optionally add the two M4 45mm stiffeners." %}

    {% include step.html
    title = "Insert the horizontal chassis stiffeners"
    image = "chassis---stiffener-horizontal.jpg"
    optional = true
    content = "Optionally add the two M5 80mm stiffeners." %}

    {% include step.html
    title = "Insert the AC input jack"
    image = "chassis---ac-input.jpg"
    content = "Slide in the AC jack and fasten with two 14mm wafer heads." %}

    {% include shock-warning.html %}

    {% include step.html
    title = "Modify PSU"
    image = "psu---cut.jpg"
    content = "Bevel the two corners of the PSU that face outwards. The cut should bisect the screw post holes." %}

    {% include step.html
    title = "Link the fans together"
    image = "chassis---fans.jpg"
    content = "Wire two chassis fans in parallel so that the wire is long enough to reach the ports on the left of the
    MCU." %}

    {% include step.html
    title = "Insert the right fan"
    image = "chassis---insert-right-fan.jpg"
    content = "Insert the fan and secure the bottom two screw holes with 14mm wafer heads." %}

    {% include step.html
    title = "Insert the left fan"
    image = "chassis---insert-left-fan.jpg"
    content = "Insert the fan and secure the bottom two screw holes with 14mm wafer heads." %}

    {% include step.html
    title = "Plug in the fans"
    image = "chassis---plug-in-fans.jpg"
    content = "Plug in the chassis fans to the top port of the MCU." %}

    {% include step.html
    title = "Plug in the power wires"
    image = "chassis---plug-in-power.jpg"
    content = "Connect the power wires to the PSU and cut to length, tin the ends, and plug in. The gauge of these wires
    should be 18AWG or thicker. 14AWG is the largest wire the terminal blocks can accept." %}

    {% include step.html
    title = "Plug in the probe connectors"
    image = "chassis---plug-in-probe.jpg"
    content = "Connect the two probe connectors as shown- B/W on top, Y/R on bottom." %}

    {% include step.html
    title = "Plug in the hotend heater wires"
    image = "chassis---plug-in-hotend-power.jpg"
    content = "Insert the two heater wires into the top terminal block." %}

    {% include step.html
    title = "Plug in the hotend thermistor connector"
    image = "chassis---plug-in-thermistor.jpg"
    content = "Insert the thermistor wire into the bottom left port." %}

    {% include step.html
    title = "Plug in the hotend fan connector"
    image = "chassis---plug-in-hotend-fan.jpg"
    content = "Insert the hotend fan connector into the second port." %}

    {% include step.html
    title = "Plug in the part cooling fan connector"
    image = "chassis---plug-in-part-cooling-fan.jpg"
    content = "Insert the part cooling fan connector into the third port." %}

    {% include step.html
    title = "Plug in the bed thermistor"
    image = "chassis---plug-in-bed-thermistor.jpg"
    content = "Bring over the z-axis and insert the heat bed thermistor connector next to the hotend thermistor." %}

    {% include step.html
    title = "Plug in the bed heater"
    image = "chassis---plug-in-bed-heater.jpg"
    content = "Insert the heat bed power wires into the middle terminal block and tighten." %}

    {% include step.html
    title = "Insert the motors"
    image = "chassis---insert-motors.jpg"
    content = "Bottom right motor has 15cm wire, bottom left has 23cm wire, top left has 15cm wire, top right has 10cm
    wire." %}

    {% include step.html
    title = "Plug in the motors"
    image = "chassis---plug-motor-connectors.jpg"
    content = "From left to right, port 1 is the top right (extruder) motor, port 2 is the bottom left (A) motor, port 3
    is the bottom right motor (B), port 4 is the top left (Z-Axis) motor." %}

    {% include step.html
    title = "Solder the serial connector"
    image = "raspberry-pi---solder-serial-connector.jpg"
    content = "Solder the Raspberry Pi connector as shown. You can also try using right angle pins!" %}

    {% include step.html
    title = "Plug in the Raspberry Pi"
    image = "chassis---connect-raspberry-pi.jpg"
    content = "Connect the Raspberry Pi to the serial port." %}

    {% include step.html
    title = "Smush the MCU"
    image = "chassis---smush-mcu.jpg"
    content = "Smoosh the wires up and press the MCU into place." %}

    {% include step.html
    title = "Install the first riser"
    image = "chassis---install-first-riser.jpg"
    content = "Install the left riser, constraining all the wires that are plugged in to the ports on the left side of
    the MCU." %}

    {% include step.html
    title = "Screw in the first riser"
    image = "chassis---screw-riser.jpg"
    content = "Flip it over and fix the riser in place with two 8mm countersunks." %}

    {% include step.html
    title = "Insert the second riser"
    image = "chassis---insert-second-riser.jpg"
    content = "Likewise, install the second riser, covering all wires except for the extruder motor's wires." %}

    {% include step.html
    title = "Attach Raspberry Pi"
    image = "chassis---screw-raspberry-pi.jpg"
    content = "Use four 5mm button heads to attach the Raspberry Pi." %}

    {% include step.html
    title = "Insert nut"
    image = "rail---insert-nut.jpg"
    content = "Insert a nut onto the Y-Rail (MGN12C) by pulling it in from behind with a screw." %}

    {% include step.html
    title = "Install tensioner"
    image = "rail---install-tensioner.jpg"
    content = "On the same rail, install the tensioner over the nut." %}

    {% include step.html
    title = "Prepare two posts"
    image = "rail---tensioner---posts.jpg"
    content = "Onto a 12mm wafer head, drop a big bearing, a shim, and a washer." %}

    {% include step.html
    title = "Install the posts"
    image = "rail---tensioner---install-bearings.jpg"
    content = "Install the bearing posts into the tensioner." %}

    {% include step.html
    title = "Install the rail"
    image = "chassis---install-rail.jpg"
    content = "Slide in the rail. You might want to tap it down with a mallet. Verify the wires that run under the rail
    are tidy." %}

    {% include step.html
    title = "Fasten the rail"
    image = "chassis---fasten-rail.jpg"
    content = "Using 14mm countersunks, fasten the rail to the chassis. You must go slow, alternate short rotations and
    don't overheat the plastic." %}

    {% include step.html
    title = "Insert the bonus screw"
    image = "chassis---bonus-screw.jpg"
    content = "From the bottom, fasten the rail tightly to the chassis using a 20mm countersunk." %}

    {% include step.html
    title = "Tape the motors"
    image = "chassis---tape.jpg"
    content = "Tape the motors. Without tape, the motor wires will walk around. You need to tape it before installing
    the mid plates." %}

    {% include step.html
    title = "Install the right midplate"
    image = "chassis---install-right-midplate.jpg"
    content = "Drop the right midplate on top of the motors, making sure you can press it flat. Verify from every angle
    that there is no gap." %}

    {% include step.html
    title = "Secure the right motors"
    image = "midplate---right---motor-mounts.jpg"
    content = "Secure the motors to the right midplate, filling the four countersunk motor mount holes with 8mm
    countersunks." %}

    {% include step.html
    title = "Install the extra screw"
    image = "midplate---right---locator-screw.jpg"
    content = "Add another 20mm countersunk to further secure the midplate to the chassis." %}

    {% include step.html
    title = "Install the lower pulley"
    image = "midplate---right---lower-pulley.jpg"
    content = "Onto a 30mm wafer head, drop a big bearing, a medium shim, and a big washer. Screw it all the way through
    the chassis." %}

    {% include step.html
    title = "Install extruder gear"
    image = "chassis---install-extruder-gear.jpg"
    content = "On the top left motor, and using several fingers, line up the top of the extruder gear with a pulley and
    fasten the grub screw to the flat side of the shaft." %}

    {% include step.html
    title = "Install left midplate"
    image = "chassis---install-left-midplate.jpg"
    content = "Insert the wire harnesses into the slots in the midplate and lay the midplate into position. Verify there
    is no gap." %}

    {% include step.html
    title = "Tug the cables"
    image = "chassis---tug-cables.jpg"
    content = "Remove the slack in the cables." %}

    {% include step.html
    title = "Insert the motor mount screws"
    image = "midplate---left---motor-mounts.jpg"
    content = "Secure the motors to the left midplate, filling the four countersunk motor mount holes with 8mm
    countersunks." %}

    {% include step.html
    title = "Insert the lower pulley"
    image = "midplate---left---lower-pulley.jpg"
    content = "Same as the right one." %}

    {% include step.html
    title = "Insert the upper pulley"
    image = "midplate---left---upper-pulley.jpg"
    content = "Same as the right one." %}

    {% include step.html
    title = "Install the extra screw"
    image = "midplate---left---locator-screw.jpg"
    content = "Add another 20mm countersunk to further secure the midplate to the chassis." %}

    {% include step.html
    title = "Finish right fan"
    image = "chassis---right---finish-fan-screws.jpg"
    content = "Secure the top two screw holes with wafer head M3 14mm." %}

    {% include step.html
    title = "Finish left fan"
    image = "chassis---left---finish-fan-screws.jpg"
    content = "Secure the top two screw holes with wafer head M3 14mm." %}

    {% include step.html
    title = "Install left drive pulley"
    image = "motor---left---install-drive-pulley.jpg"
    content = "Temporarily put two sheets of paper under the pulley before tightening the grub screw to the flat side of
    the shaft. If there are two grub screws, tighten them both but one should be on the flat side of the shaft." %}

    {% include step.html
    title = "Install right drive pulley"
    image = "motor---right---install-drive-pulley.jpg"
    content = "Repeat on the right. Verify the pulleys are friction-free by grabbing the pulley forcefully and rotating
    it a full circle. If it catches on something, it's going to show up in your prints." %}

    {% include step.html
    title = "Modify X rail"
    image = "rail---x---add-nuts.jpg"
    content = "Cut one hole off the X rail (MGN9C)." %}

    {% include step.html
    title = "Install right drive pulley"
    image = "rail---x---add-nuts.jpg"
    content = "Add a nut to both sides of the rail." %}

    {% include step.html
    title = "Create bearing posts"
    image = "rail---x---bearing-posts.jpg"
    content = "On a 14mm wafer head, drop a big bearing and a medium shim." %}

    {% include step.html
    title = "Install bearing posts"
    image = "rail---x---install-bearings.jpg"
    content = "On both sides of the rail tighten down both bearing posts." %}

    {% include step.html
    title = "Drop on the spacer"
    image = "rail---install-spacer.jpg"
    content = "Drop the spacer (printed) onto the Y axis carriage." %}

    {% include step.html
    title = "Attach the X rail"
    image = "rail---attach-x-rail.jpg"
    content = "Drop the X rail on top of the spacer and screw it in with two 20mm countersunks." %}

    {% include step.html
    title = "Create bearing towers"
    image = "rail---bearing-towers.jpg"
    content = "On a 16mm wafer or button head, drop a big bearing, a medium shim, a large washer, a small shim, a
    small flanged bearing, small shim, small normal bearing, and small shim." %}


    {% include step.html
    title = "Install bearing towers"
    image = "rail---install-bearing-towers.jpg"
    content = "Screw the two bearing towers into the top positions in the Y carriage." %}

    {% include step.html
    title = "Cut a piece of belt"
    image = "clip---cut-belt.jpg"
    content = "Cut a piece of belt that precisely fits into the recess in the belt clip." %}

    {% include step.html
    title = "Dap some super glue"
    image = "clip---super-glue.jpg"
    optional = true
    content = "Dap some super glue on the belt. The glue is not required, but it really makes it easier to put the belt
    into the clip." %}

    {% include step.html
    title = "Link the belts"
    image = "clip---glue-belts.jpg"
    content = "Hold the long piece of belt to the short one, overlapping half of it as shown." %}

    {% include step.html
    title = "Insert one side"
    image = "clip---insert-belt.jpg"
    content = "Insert the belt into the clip and verify that the short belt is seated properly." %}

    {% include step.html
    title = "Insert the other side"
    image = "clip---insert-other-side-belt.jpg"
    content = "Insert the other side of the belt temporarily. You can trim it later." %}

    {% include step.html
    title = "Lubricate belts"
    image = "belt-route---lubrication.jpg"
    content = "Lubricate the sides of the belt (not the teeth) with silicone based lube. Don't AT me for using sex lube,
    it's a joke." %}

    {% include step.html
    title = "Route the belts"
    image = "belt-route---tower---lower-bearings.jpg"
    content = "Hook the belt over the towers, placing it on the lowest bearing." %}

    {% include step.html
    title = "Around the lower bearings"
    image = "belt-route---lower-bearings.jpg"
    content = "Hook the lower bearings." %}

    {% include step.html
    title = "Around the upper bearings"
    image = "belt-route---upper-bearings.jpg"
    content = "Wrapping around the drive pulleys, hook the upper bearings." %}

    {% include step.html
    title = "Around the tensioner"
    image = "belt-route---tensioner.jpg"
    content = "Wrap the belts around the tensioner bearings, the two strands coming down the middle." %}

    {% include step.html
    title = "Around the tower again"
    image = "belt-route---tower---upper-bearings.jpg"
    content = "Hook the tower bearings, this time the upper ones, heading out to the X rail bearings." %}

    {% include step.html
    title = "Around the X rail"
    image = "belt-route---x-rail.jpg"
    content = "Route the belt around the X rail. Trim the excess and reattach the belt to the clip." %}

    {% include step.html
    title = "Screw in the tensioner"
    image = "tensioner---screw.jpg"
    content = "Push the tensioner towards the Z block, then using a 20mm countersunk, fix the tensioner in place. This
    should be super loose." %}

    {% include tip.html
    title="But loose belt? Is Lemontron a moron?"
    tip="You should feel the elasticity, and you should not be able to strum the belt. Why? Because it's not CoreXY!
    With only one belt and the same amount of friction total."
    icon="info" %}

    {% include step.html
    title = "Thoroughly test"
    image = "belt-route---test.jpg"
    content = "Thoroughly test and tune the belt tension. When you feel that the friction is negligible, it's ready." %}

    {% include step.html
    title = "Install top plates"
    image = "top-plates---install.jpg"
    content = "Drop in the two top plates." %}

    {% include step.html
    title = "Fasten the outer screws"
    image = "top-plates---outer-screws.jpg"
    content = "Fasten the top plates to the chassis on the 6 outer holes along the edges with 25mm (or 20mm)
    countersunks." %}

    {% include step.html
    title = "Fasten the inner screws"
    image = "top-plates---inner-screws.jpg"
    content = "Fasten the top plates to the motors on the 4 inner holes with 14mm countersunks (bonus points if you
    fabricate 15mm countersunks for a better fit)." %}

    {% include step.html
    title = "Attach the tool head"
    image = "chassis---tool---install.jpg"
    content = "Drop on the tool head." %}

    {% include step.html
    title = "Screw on the tool head"
    image = "chassis---tool---screws.jpg"
    content = "Screw on the tool head with two 14mm countersunks." %}

    {% include step.html
    title = "Attach the belt clip"
    image = "chassis---tool---attach-clip.jpg"
    content = "Flip over the printer and attach the clip with two 10mm M2.5 countersunks." %}

    {% include step.html
    title = "Attach the Z idler arm"
    image = "chassis---attach-z-idler.jpg"
    content = "Attach the z idler arm. To make the bearing stack, on a 14mm wafer head, drop a big bearing, medium shim,
    big bearing, and medium shim." %}

    {% include step.html
    title = "Attach the Z axis"
    image = "chassis---attach-z-axis.jpg"
    content = "Hook the Z axis drive belt on the pulley. Drop the Z axis into place. Tighten the idler arm." %}

    {% include step.html
    title = "Screw in Z axis"
    image = "chassis---screw-in-z-axis.jpg"
    content = "Screw in the Z axis. Rev B uses two 16mm button heads instead of the countersunks shown in the picture."
    %}

    {% include step.html
    title = "Rough up bowden tube"
    image = "bowden---rough-up.jpg"
    content = "Rough up at least 1cm of the bowden tube." %}

    {% include step.html
    title = "Pour glue on bowden tube"
    image = "bowden---glue.jpg"
    content = "Pour a generous amount of glue on the end of the bowden tube." %}

    {% include step.html
    title = "Insert the bowden tube"
    image = "bowden---insert-outlet.jpg"
    content = "Insert the bowden tube into the top plates. There is a lot of clearance, so the glue will go all the way
    down." %}

    {% include tip.html
    title="Surely there's a better way?"
    tip="Sometimes the simple solutions are the best. With the absurd contact patch of about 2cm², the glue will hold
    the tube until the end of time."
    icon="info" %}

    {% include step.html
    title = "Zip tie the bowden tube"
    image = "bowden---zip.jpg"
    content = "Zip tie the bowden tube with 2 zip ties, one at 10cm, another at 20cm." %}

    {% include step.html
    title = "Mark the bowden tube"
    image = "bowden---mark.jpg"
    content = "Holding the tube approximately where it needs to go, mark the bowden tube as pictured." %}

    {% include step.html
    title = "Cut the bowden tube"
    image = "bowden---cut.jpg"
    content = "SNIP, SNIP! The end needs to be as straight as possible." %}

    {% include step.html
    title = "Insert bowden tube"
    image = "bowden---insert-inlet.jpg"
    content = "Insert the bowden tube all the way into the tool end." %}

    {% include step.html
    title = "Insert the clip"
    image = "bowden---insert-clip.jpg"
    content = "While still putting pressure on the bowden tube, pull out the collar and install the orange clip." %}

    {% include step.html
    title = "Attach the bed holder"
    image = "final---bed-holder.jpg"
    content = "Attach the bed holder to the Z carriage with the two captive screws." %}

    {% include step.html
    title = "Slide in the bed"
    image = "final---attach-bed.jpg"
    content = "Slide the bed into the spring-loaded posts." %}

    {% include step.html
    title = "You've reached the end!"
    image = "final---beauty.jpg"
    content = "You just built the whole thing. Now wash up, you're probably covered in solder fumes." %}

    {% include step.html
    title = "Sike you've not reached the end!"
    image = "calibration---adjust-screw.jpg"
    content = "Use the handy guide to do your one-time calibration."
    buttonTitle="Guide &rarr; How to Calibrate"
    buttonLink="/lemontron/how-to-calibrate"
    %}

</ol>