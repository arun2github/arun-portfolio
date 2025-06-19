import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyBboxPatch
import numpy as np

# LinkedIn Agent Cover Image
fig, ax = plt.subplots(1, 1, figsize=(12, 8))
ax.set_xlim(0, 10)
ax.set_ylim(0, 8)
ax.axis('off')

# Background gradient
gradient = np.linspace(0, 1, 256).reshape(1, -1)
gradient = np.vstack((gradient, gradient))
ax.imshow(gradient, extent=[0, 10, 0, 8], aspect='auto', cmap='Blues_r', alpha=0.3)

# LinkedIn blue background
bg = FancyBboxPatch((0.5, 1), 9, 6, boxstyle='round,pad=0.1', 
                    facecolor='#0077B5', edgecolor='none', alpha=0.9)
ax.add_patch(bg)

# Title
ax.text(5, 7, 'LinkedIn AI Agent', fontsize=32, fontweight='bold', 
        ha='center', va='center', color='white')

# Subtitle
ax.text(5, 6.2, 'Automated Content Interaction & Engagement', fontsize=16, 
        ha='center', va='center', color='white', alpha=0.9)

# Features boxes
features = [
    'Feed Analysis',
    'NLP Processing', 
    'Auto Posting',
    'Content Filtering'
]

colors = ['#00A0DC', '#0077B5', '#005885', '#004471']
for i, (feature, color) in enumerate(zip(features, colors)):
    x = 1.5 + (i % 2) * 4
    y = 4.5 - (i // 2) * 1.5
    
    box = FancyBboxPatch((x-0.8, y-0.4), 1.6, 0.8, boxstyle='round,pad=0.1',
                        facecolor=color, edgecolor='white', linewidth=2)
    ax.add_patch(box)
    ax.text(x, y, feature, fontsize=12, fontweight='bold',
            ha='center', va='center', color='white')

# AI Brain icon representation
brain_x, brain_y = 8, 3
circle1 = plt.Circle((brain_x-0.2, brain_y+0.1), 0.3, color='white', alpha=0.8)
circle2 = plt.Circle((brain_x+0.2, brain_y+0.1), 0.3, color='white', alpha=0.8)
circle3 = plt.Circle((brain_x, brain_y-0.2), 0.25, color='white', alpha=0.8)
ax.add_patch(circle1)
ax.add_patch(circle2)
ax.add_patch(circle3)

# Neural network lines
for i in range(5):
    x1, y1 = brain_x - 0.4 + i*0.2, brain_y + 0.5
    x2, y2 = brain_x - 0.3 + i*0.15, brain_y - 0.5
    ax.plot([x1, x2], [y1, y2], 'white', alpha=0.6, linewidth=1)

plt.tight_layout()
plt.savefig('public/images/project/linkedin_agent.png', dpi=300, bbox_inches='tight', 
            facecolor='#1A1D24', edgecolor='none')
plt.close()

print('LinkedIn Agent cover image created successfully!')

# Email Agent Cover Image
fig, ax = plt.subplots(1, 1, figsize=(12, 8))
ax.set_xlim(0, 10)
ax.set_ylim(0, 8)
ax.axis('off')

# Background gradient
gradient = np.linspace(0, 1, 256).reshape(1, -1)
gradient = np.vstack((gradient, gradient))
ax.imshow(gradient, extent=[0, 10, 0, 8], aspect='auto', cmap='Purples_r', alpha=0.3)

# Banking gradient background
bg = FancyBboxPatch((0.5, 1), 9, 6, boxstyle='round,pad=0.1', 
                    facecolor='#2D1B69', edgecolor='none', alpha=0.9)
ax.add_patch(bg)

# Title
ax.text(5, 7, 'Email AI Agent', fontsize=32, fontweight='bold', 
        ha='center', va='center', color='white')

# Subtitle
ax.text(5, 6.2, 'Banking CRM Automation with Llama3 & LangChain', fontsize=16, 
        ha='center', va='center', color='white', alpha=0.9)

# Features boxes
features = [
    'Intent Recognition',
    'CRM Integration', 
    'Auto Ticketing',
    'Smart Replies'
]

colors = ['#8E2DE2', '#4A00E0', '#6A1B9A', '#9C27B0']
for i, (feature, color) in enumerate(zip(features, colors)):
    x = 1.5 + (i % 2) * 4
    y = 4.5 - (i // 2) * 1.5
    
    box = FancyBboxPatch((x-0.8, y-0.4), 1.6, 0.8, boxstyle='round,pad=0.1',
                        facecolor=color, edgecolor='white', linewidth=2)
    ax.add_patch(box)
    ax.text(x, y, feature, fontsize=12, fontweight='bold',
            ha='center', va='center', color='white')

# Email icon representation
email_x, email_y = 8, 3.5
email_box = FancyBboxPatch((email_x-0.5, email_y-0.3), 1, 0.6, boxstyle='round,pad=0.05',
                          facecolor='white', edgecolor='none', alpha=0.9)
ax.add_patch(email_box)

# Email lines
for i in range(3):
    y_line = email_y + 0.15 - i*0.15
    ax.plot([email_x-0.35, email_x+0.35], [y_line, y_line], 'black', linewidth=2)

# AI processing arrows
arrow_props = dict(arrowstyle='->', lw=2, color='white', alpha=0.8)
ax.annotate('', xy=(email_x-0.7, email_y-0.8), xytext=(email_x-0.3, email_y-0.4), arrowprops=arrow_props)
ax.annotate('', xy=(email_x+0.7, email_y-0.8), xytext=(email_x+0.3, email_y-0.4), arrowprops=arrow_props)

# AI processing labels
ax.text(email_x-0.7, email_y-1, 'Llama3', fontsize=10, fontweight='bold',
        ha='center', va='center', color='white', alpha=0.9)
ax.text(email_x+0.7, email_y-1, 'LangChain', fontsize=10, fontweight='bold',
        ha='center', va='center', color='white', alpha=0.9)

plt.tight_layout()
plt.savefig('public/images/project/email_agent.png', dpi=300, bbox_inches='tight', 
            facecolor='#1A1D24', edgecolor='none')
plt.close()

print('Email Agent cover image created successfully!')
print('Both AI project cover images have been generated!') 