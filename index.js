function playVideo(){
    const video = document.getElementById("myVideo");
    const playButton = document.querySelector(".video-container button");
    const diya = document.getElementById("diya");

    if(video.style.display === "none"){
    video.style.display = "block"; // Show video
    video.play();
    playButton.innerText = "Hide Video"; // Change button text
    diya.style.display = "flex"; // Show diya
    }else{
    video.style.display = "none"; // Hide video
    video.pause();
    playButton.innerText = "Get Diwali Gift again!"; // Reset button text
    diya.style.display = "none"; // Hide diya
    }
}