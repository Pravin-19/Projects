const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");

// Gloabal variables for tracking drag events
let isDragging = false , startY, startHeight;

const showBottomSheet = () =>{
    bottomSheet.classList.add("show");
    document.body.style.overflowY="hidden"
    updateSheetHeight(50);
}
const hideBottomSheet = () =>{
    bottomSheet.classList.remove("show");
    document.body.style.overflowY="auto"

}

const updateSheetHeight = (height)=>{
    sheetContent.style.height =`${height}vh`;   //updates the height of the sheet content
    // Toggles the fullscreen class to bottomSheet if the height is equals to 100
    bottomSheet.classList.toggle("fullscreen", height === 100);
}

// Sets initial drag position and SheetContent Height
const dragStart = (e) =>{
    isDragging= true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height);
    bottomSheet.classList.add("dragging");
}

// Calculates the new height for the sheet content and call the updateSheetHeight function

const dragging= (e) =>{
    if(!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight= startHeight + delta / window.innerHeight * 100;
    updateSheetHeight(newHeight);

    // sheetContent.style.height =`${e.pageY}vh`
    // console.log(e.pageY);
} 
// const dragging= (e) =>{
//     console.log(e.pageY);
// }

const dragStop = () =>{
    isDragging= false;
    bottomSheet.classList.remove("dragging");
    const sheetHeight = parseInt(sheetContent.style.height);
    sheetHeight <25 ? hideBottomSheet () : sheetHeight > 75 ? updateSheetHeight (100) : updateSheetHeight (50);
}

document.addEventListener("mouseup",dragStop);
document.addEventListener("mousemove",dragging);
dragIcon.addEventListener("mousedown",dragStart);

document.addEventListener("touchend",dragStop);
document.addEventListener("touchmove",dragging);
dragIcon.addEventListener("touchstart",dragStart);


showModalBtn.addEventListener("click", showBottomSheet);
sheetOverlay.addEventListener("click", hideBottomSheet);