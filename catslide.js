 let arrImages = [
"catportait.jpg",
"Cat.jpg",
"kittens.jpg",
"orangecat.jpg"
//these are all the images in an array

        ];
        let currentImageindex=0
        //varable that will keep track of the images

        function showimage(index){
            //function to show the images
let CatImage = document.getElementById("CImageslide");
CatImage.src = arrImages[index];
//shortcut to img tag and sets the image source to the array source
        }
function BackSlide(){
    //this is my back function
currentImageindex--;
//takes you back an image when you hit the button

if(currentImageindex<0){
    currentImageindex = 0
}
//when you get to the last image it stays their
showimage(currentImageindex)
//shows the image
}
function ForwardSlide(){
currentImageindex++;
//when you hit the button you go forward 1 image

showimage(currentImageindex);
//shows the image

if(currentImageindex >= arrImages.length){
    currentImageindex = arrImages.length-1;
    //stays the on the last image
}
showimage(currentImageindex);
//shows image
}

showimage(currentImageindex);
//shows image

