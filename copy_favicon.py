import urllib.request
import shutil
import os

url = "https://static.shuffle.dev/uploads/files/a5/a502e854efb113b2d72ad8f1b1d27984fd22a423/logos/logo-9b23fae3e0dbed745277575e5d1bd46c.png"
logo_path = os.path.join('public', 'logo.png')
favicon_path = os.path.join('public', 'favicon.ico')

print(f"Downloading PlayTherapy logo from {url}...")
try:
    urllib.request.urlretrieve(url, logo_path)
    shutil.copyfile(logo_path, favicon_path)
    print("Successfully updated public/logo.png and public/favicon.ico with the PlayTherapy face logo!")
except Exception as e:
    print(f"Error downloading image: {e}")
