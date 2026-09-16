import re
import os

filepath = '/home/chandru/Desktop/Ilangathir_Trust/styles.css'
with open(filepath, 'r') as f:
    content = f.read()

# Replace variables
content = content.replace('--forest', '--wine')
content = content.replace('--terra', '--sand')

# Replace palette in :root
content = re.sub(r'--wine: #2c5f3f;', '--wine: #5c1a2a;', content)
content = re.sub(r'--wine-deep: #1a3d28;', '--wine-deep: #3d111c;', content)
content = re.sub(r'--wine-light: #4a8c65;', '--wine-light: #80243b;', content)
content = re.sub(r'--wine-muted: #5a9d75;', '--wine-muted: #993b54;', content)

content = re.sub(r'--sand: #c45d3e;', '--sand: #d4a76a;', content)
content = re.sub(r'--sand-light: #e07a5f;', '--sand-light: #e6c398;', content)
content = re.sub(r'--sand-soft: #fae5d3;', '--sand-soft: #fcf4e8;', content)
content = re.sub(r'--sand-deep: #a8432a;', '--sand-deep: #b08246;', content)

# Replace RGB values
# Old Forest (44, 95, 63) -> New Wine (92, 26, 42)
content = content.replace('44, 95, 63', '92, 26, 42')
content = content.replace('26, 61, 40', '61, 17, 28') # forest-deep roughly

# Old Terra (196, 93, 62) -> New Sand (212, 167, 106)
content = content.replace('196, 93, 62', '212, 167, 106')
content = content.replace('212, 149, 58', '212, 167, 106') # Some amber left over?

# Update description
content = content.replace('Warm & Earthy', 'Burgundy & Warm Sand')

# Also rename btn classes
content = content.replace('btn-terra', 'btn-sand')

with open(filepath, 'w') as f:
    f.write(content)

print("Replaced successfully!")
