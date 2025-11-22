import fileIcon from "/src/icons/icons-folder.svg";
import pdfIcon from "/src/icons/icons-pdf.svg";

export const cardContents = {
    notes: `
    <!-- Card Overlay Header -->
    <div class="flex justify-between items-center -my-3 pr-2">
        <h6 class="text-zinc-700 text-2xl">Notes</h6>
        <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
    </div>

    <!-- Notes Content -->

    <div class="files-section flex justify-start items-center gap-10 flex-wrap overflow-y-scroll scrollbar-hide pr-2">
        <div class="hover:cursor-pointer" title="Pysics is stupid af">
            <img src="${fileIcon}" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Physics/p>
        </div>

        <div class="hover:cursor-pointer" title="stupid bitch">
            <img src="${pdfIcon}" alt="icon-img" class="w-[50px]">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Physics</p>
        </div>
        
        <div class="hover:cursor-pointer">
            <img src="${pdfIcon}" alt="icon-img" class="w-[50px]">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Physics</p>
        </div>
        
        <div class="hover:cursor-pointer">
            <img src="${fileIcon}" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Physics</p>
        </div>
        
        <div class="hover:cursor-pointer">
            <img src="${fileIcon}" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center" title="Pysics is stupid af">Physicsssss</p>
        </div>

        <div class="hover:cursor-pointer">
            <img src="${pdfIcon}" alt="icon-img" class="w-[50px]">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center" title="Pysics is stupid af">Physicsssss</p>
        </div>

        <div class="hover:cursor-pointer">
            <img src="${fileIcon}" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center" title="Pysics is stupid af">Physicsssss</p>
        </div>
        
    </div>
`,
classes : `
<!-- Schedule Header -->
<div class="flex justify-between items-center -my-3 pr-2">
    <h6 class="text-zinc-700 text-2xl">Class Schedule</h6>
    <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
</div>
          
<!-- Schedule Content -->
<div class="pr-2 flex flex-col gap-5">
    <div class="flex flex-col gap-4">
        <h2 class="text-zinc-800 text-xl font-semibold">Monday</h2>

        <div class="flex gap-4">
            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Physics</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-4">
        <h2 class="text-zinc-800 text-xl font-semibold">Tuesday</h2>

        <div class="flex gap-4">
            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Physics</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>
        </div>

    </div>

    <div class="flex flex-col gap-4">
        <h2 class="text-zinc-800 text-xl font-semibold">Wednesday</h2>

        <div class="flex gap-4">
            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Physics</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Math</h3>
                <p class="text-sm text-zinc-600">9:00 — 11:00 AM</p>
            </div>
        </div>

    </div>

</div>
`,

attendance : `
<div class="flex justify-between items-center -my-3 pr-2">
    <h6 class="text-zinc-700 text-2xl">Attendance</h6>
    <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
</div>
<p class="text-zinc-700">Attendance goes here...</p>
`,

todo : `
<div class="flex justify-between items-center -my-3 pr-2">
    <h6 class="text-zinc-700 text-2xl">To-Do</h6>
    <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
</div>
<p class="text-zinc-700">Todo list...</p>
`
}