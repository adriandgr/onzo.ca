---
layout: portfolio
title:  "Heat Map"
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
		start: new Date(2000, 0, 5),
		cellSize: 10,
		range: 2,
		previousSelector: "#example-c-PreviousDomain-selector",
		nextSelector: "#example-c-NextDomain-selector",

		legend: [2, 4, 6, 8]
	});
</script>
