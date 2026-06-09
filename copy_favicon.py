import shutil
import os

src = os.path.join('public', 'logo.png')
dest = os.path.join('public', 'favicon.ico')

if os.path.exists(src):
    shutil.copyfile(src, dest)
    print("Successfully copied public/logo.png to public/favicon.ico")
else:
    print("Error: public/logo.png not found")
