---
layout: post
title:  "How to calibrate"
categories: guide
thumbnail: /assets/guide/calibration---adjust-screw.jpg
permalink: /lemontron/how-to-calibrate/
---

Once your Lemontron is assembled, you must do a one-time calibration! This is a very important step to ensure that your
bed mesh has a good starting point. Yes, your bed will change when you're out on the go, but the probe will make up for
any small variations.

<div class="steps">
{% include step.html
title="Home the printer"
image="calibration---home.png"
content="Click the home button."
%}

{% include step.html
title="Move the tool head"
image="calibration---xy.png"
content="Move the tool head to X=105 and Y=5."
%}

{% include step.html
title="Lower the bed"
image="calibration---z.png"
content="Lower the bed to Z=0."
%}

{% include step.html
title="Disengage the motors"
image="calibration---disengage.png"
content="When the motors are energized, it's hard to move them by hand. Click the button to cut the power to the
motors."
%}

{% include step.html
title="Insert paper"
image="calibration---insert-paper.jpg"
content="Insert a piece of paper on top of the nozzle."
%}

{% include step.html
title="Twist the lead screw by hand"
image="calibration---twist-lead-screw.jpg"
content="Twist the lead screw so that the paper can move but just barely starting to resist dragging."
%}

{% include step.html
title="Move the tool head"
image="calibration---move-front-left.jpg"
content="Using your hand move the tool head to the front left corner."
%}

{% include step.html
title="Adjust the screw"
image="calibration---adjust-screw.jpg"
content="Adjust the screw repeatedly testing with the paper until it just barely drags."
%}

{% include step.html
title="Repeat on the other side"
image="calibration---repeat-right.jpg"
content="Repeat the process on the front right corner. Now the bed is level! Remove the paper."
%}

{% include step.html
title="Home the bed again"
image="calibration---home.png"
content="Click the home button. This will leave the nozzle in the center of the build plate."
%}

{% include step.html
title="Place the paper again"
image="calibration---paper-front.jpg"
content="Place the paper between the nozzle and the bed."
%}

{% include step.html
title="Set z-offset"
image="calibration---z-offset.png"
content="Click the home button. Use the Z offset buttons in the UI to finely adjust the bed up or down so that the paper
just barely drags."
%}

{% include step.html
title="Save"
image="calibration---save.png"
content="Press the save icon. This will lock in your Z offset, which is the distance between the probe tip and nozzle
tip."
%}
</div>

Your Lemontron is now calibrated and ready to print. You should only need to come back and do it again if your Lemontron
gets knocked around or you change the bed, nozzle, or probe.
