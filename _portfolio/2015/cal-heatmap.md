---
layout: portfolio
title:  "CalHeatMap( work )"      
year: 2015
date:   2015-03-24 11:46:48
author: adrian
shadowbox: true
comments: true
cal_heatmap: true
---

<button id="example-c-PreviousDomain-selector" class="btn" style="margin-bottom: 10px;">
    <i class="icon icon-chevron-left"> &#60; </i>
</button>
<button id="example-c-NextDomain-selector" class="btn" style="margin-bottom: 10px;">
	<i class="icon icon-chevron-right"> &#62; </i>
</button>

<div id="myHeatMap"></div>
<script type="text/javascript">
	var cal = new CalHeatMap();
	cal.init({
		itemSelector: "#myHeatMap",
		itemName: ["work unit", "work units"],
		domain: "day",
		subDomain: "hour",
		data: "{{ site.url }}/js/cal-heatmap/workData.json",
		cellSize: 10,
		range: 10,
		legendHorizontalPosition: "right",
		previousSelector: "#example-c-PreviousDomain-selector",
		nextSelector: "#example-c-NextDomain-selector",
		onClick: function() {
			window.open("{{ site.url }}/js/cal-heatmap/workData.json", "_self");
		},
		legend: [2, 6, 10, 15]
	});
	setTimeout(func, 2000);
	function func() {
     cal.previous(9);
	}
</script>
<br />

**CalHeatMap( work )** <br />
*Ported javascript module, JSON database* <br />
2015

nueva linea


> "Now it is only by labour that thought can be made healthy, <br />
> and only by thought that labour can be made happy" <br />
> ~John Ruskin

CalHeatMap( work ) is an ongoing live project through which the artist will set out to document his productivity levels on a daily basis. A level of play takes place between the arbitrarily chosen unit of measure ("work units") and the high precision medium of display: a calendar heatmap. The artists, in an attempt to increase his mindfulness towards time and labour, paradoxically burdens himself with the obsessiveness involved with logging every single action done throughout the day. 

The calendar heatmap code was adapted from Kamisama's original [Cal-heatmap](http://kamisama.github.io/cal-heatmap/) javascript module.

