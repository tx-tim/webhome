---
layout: post
category: case-study
---

The UNT Smart Energy program is a partnership between the University of North Texas and Schneider Electric to highlight the University's commitment to environmental sustainability. Building automation controls and data loggers are installed in selected buildings on campus and the data is collected and stored in a database on Amazon Web Services.  

The challenge presented to me when the project kicked off was to present highly specialized building automation data to a non-technical audience.  Inspired by Nicholas Felton's personal annual reports, I looked for ways to present the data in such a way that it might construct a narrative.  After looking at the data there were three different narratives that emerged: 

The Story of Efficiency - tells the story of how energy efficient is each building when compared with each other.

Performance - tells the story of a building's current energy comsumption compared with the last 24 hours.

Improvement - tells the story of a building's changes in energy consumption over the past year.

After the initial concept and designs were presented and approved by the project stakeholders, we set to work designing the architecture of the system.  At the time, single page apps had become the new hotness and we thought it might work well with this project. We used python's Django framework to provide an API to our front end, with Backbone.js doing the heavy lifting and and Highcharts for our charting library.  Backbone views are incredibly flexible, and we took advantage of that flexibility with three views that all reported their state to a common parent view.  The parent view coordinated the presentation of each of its children, showing and hiding them as the user interacted with the site.
