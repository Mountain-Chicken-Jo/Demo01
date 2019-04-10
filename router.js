exports.showIndex = showIndex
exports.showAbout = showAbout
exports.show404 = show404

function showIndex(req, res) {
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF-8"
    })
    res.end("这是首页")
}

function showAbout(req, res) {
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF-8"
    })
    res.end("这是about")
}

function show404(req, res) {
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF-8"
    })
    res.end("这是404")
}