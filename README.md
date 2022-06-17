Requirements:
- application should connect to the locally running service
- application should render price changes for some tickers in real time

You can get some ideas how your application may look like on the [Google Finance](https://www.google.com/finance/) page.

As a bonus you can implement (please describe implemented bonus functionality in this file):
- any additional visual effects to highlight positive or negative changes in the prices
- the possibility to switch on/off tickers by user
- the possibility to specify interval time by user
- the possibility to add/remove ticker from watching group
- any additional functionality you consider useful

Bonus:
- Realised visual effects in the green background for values that grown and red background for values which moved down with matches previous values(prev values depend on time interval)
- When you click to +/- button whose placed in the right side of every items you will see that this item become inactive/active(inactive element not the same react module it's another one with the same name of ticker but without any data) 
- In the upper side of site you will see the Time Interval after choosing interval you can see that data update slower/faster(this work just in the client-side on the server interval of updating still stay   5 seconds)
- Add/remove element hapening in the server side with help 'AddOrRomove' event so when we choose ticker which we want to delete/add we add/romove it in the server side and after for one of updating cicle we get these new tickers