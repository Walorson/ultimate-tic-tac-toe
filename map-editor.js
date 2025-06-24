const preview = document.getElementById("preview");
const previewImg = document.getElementById("preview-img");
const slots = document.getElementById("slots");
const inputs = {
    file: document.getElementById("file"),
    width: document.getElementById("width"),
    height: document.getElementById("height"),
    slots: document.getElementById("slots-input"),
    gridX: document.getElementById("gridX"),
    gridY: document.getElementById("gridY"),
    top: document.getElementById("top"),
    left: document.getElementById("left"),
    slotSize: document.getElementById("slot-size"),
    showHitbox: document.getElementById("show-hitbox")
}
let isShowHitbox = true;

window.addEventListener("load", includeEventToSlots);

inputs.file.addEventListener("change", () => {
    const file = inputs.file.files[0];

    if(file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const image = new Image();
            image.onload = () => {
                preview.style.width = image.width+"px";
                preview.style.height = image.height+"px";

                inputs.width.value = image.width;
                inputs.height.value = image.height;

                previewImg.src = e.target.result;
            }
            image.src = e.target.result;
        }

        reader.readAsDataURL(file);
    }
});

inputs.width.addEventListener("input", (e) => {
    preview.style.width = e.target.value+"px";
});

inputs.height.addEventListener("input", (e) => {
    preview.style.height = e.target.value+"px";
});

inputs.gridX.addEventListener("input", (e) => {
    slots.style.gap = `${inputs.gridY.value}px ${e.target.value}px`;
});

inputs.gridY.addEventListener("input", (e) => {
    slots.style.gap = `${e.target.value}px ${inputs.gridX.value}px`;
});

inputs.top.addEventListener("input", (e) => {
    slots.style.top = `${e.target.value}px`;
});

inputs.left.addEventListener("input", (e) => {
    slots.style.left = `${e.target.value}px`;
});

inputs.slots.addEventListener("input", (e) => {
    slots.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;

    slots.innerHTML = "";
    for(let i=0; i < Math.pow(e.target.value, 2); i++)
    {
        slots.innerHTML += '<div class="slot hitbox"><img src="uttt/characters/circle.png"></div>';
    }

    if(isShowHitbox == false) 
    {
        document.querySelectorAll(".slot").forEach(slot => {
            slot.classList.remove("hitbox");
        });
    }

    includeEventToSlots();
});

inputs.slotSize.addEventListener("input", (e) => {
    document.querySelectorAll(".slot").forEach(slot => {
        slot.style.width = e.target.value+"px";
        slot.style.height = e.target.value+"px";
    });
});

inputs.showHitbox.addEventListener("input", (e) => {
    if(e.target.checked) {
        document.querySelectorAll(".slot").forEach(slot => {
            slot.classList.add("hitbox");
        });

        isShowHitbox = true;
    }
    else {
        document.querySelectorAll(".slot").forEach(slot => {
            slot.classList.remove("hitbox");
        });

        isShowHitbox = false;
    }
});

function includeEventToSlots() 
{
    document.querySelectorAll(".slot").forEach(slot => {
        let isVisible = true;

        slot.onclick = () => {
            if(isVisible) {
                slot.classList.add("shutdown");
                isVisible = false;
            }
            else {
                slot.classList.remove("shutdown");
                isVisible = true;
            }
        }
    });
}