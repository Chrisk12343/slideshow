# Cat Slideshow

A simple, interactive web-based slideshow application featuring cat images.

## Features

- **Image Navigation**: Browse through cat images using Back and Forward buttons
- **Responsive Design**: Clean and user-friendly interface with a green background
- **Image Array**: Easy to update with your own cat photos
- **Simple Controls**: Two-button navigation (Back/Forward) for easy browsing

## Files

- **catslideshow.html**: Main HTML file containing the page structure and slideshow container
- **catslide.js**: JavaScript file with slideshow logic and navigation functions
- **cat.css**: CSS stylesheet for styling and layout

## How to Use

1. Open `catslideshow.html` in your web browser
2. Click the **Back** button to view the previous cat image
3. Click the **Forward** button to view the next cat image
4. The slideshow will stop at the first and last images in the array

## Adding Your Own Images

To customize the slideshow with your own cat images:

1. Add your image files to the project folder
2. Open `catslide.js`
3. Update the `arrImages` array with your image filenames:
   ```javascript
   let arrImages = [
     "your_image1.jpg",
     "your_image2.jpg",
     "your_image3.jpg"
   ];
   ```

## Requirements

- A modern web browser
- Image files (JPG, PNG, etc.) referenced in the `arrImages` array

## Navigation Functions

- **BackSlide()**: Moves to the previous image (stops at the first image)
- **ForwardSlide()**: Moves to the next image (stops at the last image)

---

Enjoy your cat slideshow! 🐱
