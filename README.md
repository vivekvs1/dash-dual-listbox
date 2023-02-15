Dual listbox for Dash. Original component: https://rawgit.com/jyotirmaybanerjee/react-duallist/master/example/examples.html#

Install using:
<code>pip install dash-dual-listbox</code>

************************************************************************
<code>pip install dash-dual-listbox</code> installs a version that contains packages which no longer work. In that version, callbacks are broken.

If you cloned the repo from here (https://github.com/vivekvs1/dash-dual-listbox.git), the DualList.py file will need to be recompiled. 

To do this:

- Make sure you have <code>node.js</code> and <code>npm</code> installed
- <code>git clone https://github.com/vivekvs1/dash-dual-listbox.git</code>
- cd dash-dual-listbox
- npm install
- npm run build:js
- npm run build:py

You can now run: <code>python setup.py install</code> to install the dash-dual-listbox to your packages

Alternatively, you can clone this repo and run <code>python setup.py install</code> to install the dash-dual-listbox to your packages. The DualList.py file in this fork of the original dash-dual-listbox repo is working (as of August 2022)


To get the list box to show up properly styled:
- copy the style.css file from <code>dash_dual_listbox/style.css</code> to an <code>assets</code> folder in your dash app

Check out the `usage.py` file for usage of the DualList
