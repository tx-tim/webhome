---
layout: post
category: case-study
---

Project Url:  [UNT Smart Energy](http://smartenergy.unt.edu/)  
A single page application built with Backbone.js consisting of data visualizations highlighting energy efficiency at the University of North Texas.

The challenge presented to me when the project kicked off was to present highly specialized building automation data to a non-technical audience.  The UNT Smart Energy program is a partnership between the University of North Texas and Schneider Electric to highlight the University's commitment to environmental sustainability. Building automation controls and data loggers are installed in selected buildings on campus and the data is collected and stored in a database on Amazon Web Services.  

Inspired by Nicholas Felton's personal annual reports, I looked for ways to present energy consumption information in such a way that it might construct a narrative.  After looking at the data there were two categories of data that seemed to fit what I was looking for:  comparative data and historical data.  Using these categories we could build our interface around two main data visualisations:

The energy efficiency of each building compared one to another.

The changes in energy consumption patterns for a given period of time.


After the initial concept and designs were presented and approved by the project stakeholders, we set to work designing the architecture of the system.  Single page apps were still relatively new at the time, certainly new to us, but a SPA seemed to be perfectly appropriate for this project. We used python's Django framework to provide an API to our front end, with Backbone.js doing the heavy lifting and and Highcharts for our charting library.  Backbone views are incredibly flexible, and we took advantage of that flexibility with three views that all reported their state to a common parent view.  The parent view coordinated the presentation of each of its children, showing and hiding them as the user interacted with the site.
