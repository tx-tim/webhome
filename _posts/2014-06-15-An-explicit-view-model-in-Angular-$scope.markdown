---
layout: post
---

Show a spinner over an area of the page if we are still waiting for data.  But how do you know if we are waiting for data?  Do you show if the variable is defined, or if the array is not empty?  Is the array empty?  Does it exist?

One way to solve it is to explicitly initialize any $scope variable in an object at the top of the controller, a variable manifest if you will.