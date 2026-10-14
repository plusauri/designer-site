#!/usr/bin/env python3
# Serve this folder the way the published site is hosted.
# BASE.txt is empty when the site is rooted at /. Otherwise it is a path such as
# /designer-site, and the browser opens that path.
import os
import sys
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

ROOT = os.path.dirname(os.path.abspath(__file__))
BASE = open(os.path.join(ROOT, "BASE.txt"), encoding="utf-8").read().strip().rstrip("/")
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4173


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        path = self.path.split("?", 1)[0].split("#", 1)[0]
        suffix = self.path[len(path):]
        local = path
        if BASE:
            if path == "/":
                self.send_response(302)
                self.send_header("Location", BASE + "/")
                self.end_headers()
                return
            if path == BASE:
                local = "/"
            elif path.startswith(BASE + "/"):
                local = path[len(BASE):] or "/"
            else:
                self.send_error(404)
                return
        full = os.path.normpath(os.path.join(ROOT, local.lstrip("/")))
        if not full.startswith(os.path.normpath(ROOT)):
            self.send_error(403)
            return
        if not os.path.isfile(full):
            index = os.path.join(full, "index.html")
            if os.path.isfile(index) and not local.endswith("/"):
                local = local.rstrip("/") + "/"
        self.path = local + suffix
        super().do_GET()


print(f"Open http://127.0.0.1:{PORT}{BASE}/", flush=True)
ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
