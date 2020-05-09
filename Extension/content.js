chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    const reg = new RegExp('ducks', 'gi')
    const matches = document.documentElement.innerHTML.match(reg)
    sendResponse({count: matches.length})
})