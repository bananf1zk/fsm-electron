const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile(path.join(__dirname, 'www', 'index.html'));
}

ipcMain.on('save-png', (event, dataURL) => {
  const base64Data = dataURL.replace(/^data:image\/png;base64,/, '');

  dialog.showSaveDialog({
    title: 'Save PNG',
    defaultPath: 'fsm.png',
    filters: [{ name: 'PNG Image', extensions: ['png'] }]
  }).then(result => {
    if (!result.canceled) {
      fs.writeFile(result.filePath, base64Data, 'base64', (err) => {
        if (err) console.error('Failed to save PNG:', err);
      });
    }
  });
});


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


