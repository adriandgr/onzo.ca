---
layout: portfolio
title:  "Work.heatmap"
year: 2015
date:   2015-03-24 11:46:48
author: adrian
shadowbox: true
comments: true
cal_heatmap: true
---

Hello World

<div id="myHeatMap"></div>
<script type="text/javascript">
	var cal = new CalHeatMap();
	cal.init({
		itemSelector: "#myHeatMap",
		domain: "week",
		subDomain: "hour",
		data: "datas-years.json",
		start: new Date(2015, 0, 5),
		cellSize: 10,
		range: 2,
		previousSelector: "#example-c-PreviousDomain-selector",
		nextSelector: "#example-c-NextDomain-selector",

		legend: [2, 4, 6, 8]
	});
</script>


**Work.heatmap** <br />
*Ported javascript module* <br />
2015

This is an ongoing live project in which the artist will document his productivity on a calendar heatmap. The code is adapted from Kamisama's original [Cal-heatmap](http://kamisama.github.io/cal-heatmap/) javascript module.

