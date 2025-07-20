const preview = document.getElementById("preview");
const previewImg = document.getElementById("preview-img");
const slots = document.getElementById("slots");
const inputs = {
    name: document.getElementById("name"),
    file: document.getElementById("file"),
    width: document.getElementById("width"),
    height: document.getElementById("height"),
    slots: document.getElementById("slots-input"),
    gridX: document.getElementById("gridX"),
    gridY: document.getElementById("gridY"),
    top: document.getElementById("top"),
    left: document.getElementById("left"),
    slotSize: document.getElementById("slot-size"),
    showHitbox: document.getElementById("show-hitbox"),
    export: document.getElementById("export")
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
        slots.innerHTML += `<div class="slot hitbox" style="width: ${inputs.slotSize.value}px; height: ${inputs.slotSize.value}px"><img src="uttt/characters/circle.png"></div>`;
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

inputs.export.addEventListener("click", () => {
    const content = `
const ${inputs.name.value} = {
    name: '${inputs.name.value}',
    width: ${inputs.width.value},
    height: ${inputs.height.value},
    x: ${inputs.slots.value}, y: ${inputs.slots.value},
    grid_template: 'repeat(${inputs.slots.value}, 1fr)',
    grid_gap: '${inputs.gridY.value}px ${inputs.gridX.value}px',
    top: '${inputs.top.value}px',
    left: '${inputs.left.value}px',
    slot_size: '${inputs.slotSize.value}px',
    disabled_map: [
${generateDisabledMap()}
    ]
}
    `;
    const blob = new Blob([content], {type: "text/plain"});
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = inputs.name.value+".txt";
    link.click();

    URL.revokeObjectURL(link.href);
});

function generateDisabledMap() {
    let text = "";
    const slots = document.querySelectorAll(".slot");

    for(let i=0; i<inputs.slots.value; i++) {

        let row = "         [";

        for(let j=0; j<inputs.slots.value; j++) {
            console.log(j)
            if(slots[j + inputs.slots.value * i].classList.contains("shutdown")) {
                row += j+","
            }
        }

        if(row[row.length-1] == ",")
            row = row.substring(0, row.length-1);

        if(i < inputs.slots.value - 1)
            row += "],\n";
        else
            row += "]";

        text += row;
    }

    return text;
}