const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    savePNG: (dataURL) => ipcRenderer.send('save-png', dataURL)
});
