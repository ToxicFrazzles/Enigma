import {app, BrowserWindow} from 'electron';


app.once('ready', () => {
    console.log("App is ready");
    const win = new BrowserWindow({
        width: 600,
        height: 400
    });

    win.loadFile("${__dirname}/index.html");
})