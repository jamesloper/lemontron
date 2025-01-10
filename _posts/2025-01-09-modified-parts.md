---
layout: post
title: Modified parts
categories: guide
kofi: true
thumbnail: /assets/guide/motors---cut-shaft.jpg
permalink: /lemontron/:title
---

Whereas with other printers without such tiny space constraints, on the Lemontron, you need to modify several parts.
For your reference, these are the parts that will be modified:

{% assign modified_items = site.bom | where:"modification", true %}
{% include bom_list.html items=modified_items hide_price=true %}