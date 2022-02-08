import {app, BrowserWindow} from 'electron';
import * as path from 'path';


function createWindow(){
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile(path.join(__dirname,"index.html"));
    win.webContents.openDevTools();
}


app.once('ready', () => {
    console.log("App is ready");
    createWindow();
    app.on("activate", () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});