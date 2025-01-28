chrome.windows.create({
    url: 'calculator/index.html',
    type: 'popup',
    width: 800,
    height: 600,
}, function(window) {
    console.log('Window created:', window);
});