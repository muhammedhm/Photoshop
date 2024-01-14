function openCvReady(){
    cv["onRuntimeInitialized"]= () => {
        console.log("OpenCV Ready")

        //var loadFile = function(event) {
          //  var image = document.getElementById('output');
          //  image.src = URL.createObjectURL(event.target.files[0]);
         // };

        //read an image from image source and convert to opencv format
        let imgMain=cv.imread("img-main"); //img in opencv mat format
        cv.imshow("main-canvas",imgMain);
        imgMain.delete(); 
        
        //document.getElementById('input-file').addEventListener('change', loadFile);
        //****RGB Button****//
        document.getElementById("button-rgb").onclick = function(){
            console.log("RGB button pressed");
            let imgMain=cv.imread("img-main");
            cv.imshow("main-canvas",imgMain);
            imgMain.delete();
        };
        //****Gray Button****//
        document.getElementById("button-gray").onclick = function(){
            console.log("Gray button pressed");
            let imgMain=cv.imread("img-main");
            let imgGray=imgMain.clone();
            cv.cvtColor(imgMain,imgGray,cv.COLOR_RGB2GRAY,0);
            cv.imshow("main-canvas",imgGray);
            imgMain.delete(); //to free the memory allocated
            imgGray.delete();
        };
        //****Blur Button****//
        document.getElementById("button-blur").onclick = function(){
            console.log("Blur button pressed");
            let imgMain=cv.imread("img-main");
            let imgBlur=imgMain.clone();
            let ksize=new cv.Size(49,49);
            cv.GaussianBlur(imgMain,imgBlur,ksize,0);
            cv.imshow("main-canvas",imgBlur);
            imgMain.delete(); //to free the memory allocated
            imgBlur.delete();
        };
        //****Canny Button****//
        document.getElementById("button-edge").onclick = function(){
            console.log("Edge button pressed");
            let imgMain=cv.imread("img-main");
            let imgCanny=imgMain.clone();
            cv.Canny(imgMain,imgCanny,50,100);
            cv.imshow("main-canvas",imgCanny);
            imgMain.delete(); //to free the memory allocated
            imgCanny.delete();
        };

        //Converting image to grayscale
        //cv.cvtColor(imgMain,imgGray,cv.COLOR_RGB2GRAY,0);


        //Converting to blur
        //let ksize=new cv.Size(49,49);
        //cv.GaussianBlur(imgMain,imgBlur,ksize,0);

        //Find edges using canny edge detector
        //cv.Canny(imgMain,imgCanny,50,100);

    };
}