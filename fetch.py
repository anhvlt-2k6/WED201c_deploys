import os

def find_htm_files(root_path):
    for dirpath, dirnames, filenames in os.walk(root_path):
        for name in filenames:
            if '.htm' in name.lower():
                yield os.path.join(dirpath, name)

path = "./"

htm_header = """
<!DOCTYPE html>
<html>
<head>
  <title>Vo Luu Tuong Anh - WED201c Repository</title>
</head>
<body>
  <h1>WED201c Repository for submission</h1>
  <p>
    Below are the list of deployed/designed website that maybe use for
    submission.
    <br />
    View the source code on <a href="https://github.com/anhvlt-2k6/WED201c_deploys" target="_blank">GitHub</a>.
    <br />
  </p>
  <ul>
"""

htm_footer = """
  </ul>
</body>
</html>
"""

with open("index.html", "w") as index_file:
    index_file.write(htm_header)
    for htm_file in find_htm_files(path):
        if "index.html" not in htm_file:
            htm_link = os.path.relpath(htm_file, path)
            index_file.write('\n    <li>\n      <a href="{htm_link}">{htm_link}</a>\n    </li>'.format(htm_link=htm_link))
    index_file.write(htm_footer)
