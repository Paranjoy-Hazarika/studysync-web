export const notesHTML = `
    <!-- Card Overlay Header -->
    <div class="flex justify-between items-center -my-3 pr-2">
        <h6 class="text-zinc-700 text-2xl">Notes</h6>
        <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
    </div>

    <!-- Notes Content -->

    <div class="flex justify-start items-center gap-10 flex-wrap overflow-y-scroll scrollbar-hide pr-2">
        <div class="hover:cursor-pointer" title="Pysics is stupid af">
            <img src="src/icons/icons-folder.svg" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Physics/p>
        </div>

        <div class="hover:cursor-pointer" title="stupid bitch">
            <img src="src/icons/icons-pdf.svg" alt="icon-img" class="w-[50px]">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Physics</p>
        </div>
        
        <div class="hover:cursor-pointer">
            <img src="src/icons/icons-pdf.svg" alt="icon-img" class="w-[50px]">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Physics</p>
        </div>
        
        <div class="hover:cursor-pointer">
            <img src="src/icons/icons-pdf.svg" alt="icon-img" class="w-[50px]">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Physics</p>
        </div>
        
        <div class="hover:cursor-pointer">
            <img src="src/icons/icons-folder.svg" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center" title="Pysics is stupid af">Physicsssss</p>
        </div>

        <div class="hover:cursor-pointer">
            <img src="src/icons/icons-folder.svg" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center" title="Pysics is stupid af">Physicsssss</p>
        </div>
        
    </div>
`;

export const attendanceHTML = `
<div class="flex justify-between items-center -my-3 pr-2">
    <h6 class="text-zinc-700 text-2xl">Attendance</h6>
    <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
</div>
<p class="text-zinc-700">Attendance stuff here...</p>
`;

export const scheduleHTML = `
<div class="flex justify-between items-center -my-3 pr-2">
    <h6 class="text-zinc-700 text-2xl">Class Schedule</h6>
    <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
</div>
<p class="text-zinc-700">Schedule goes here...</p>
`;

export const todosHTML = `
<div class="flex justify-between items-center -my-3 pr-2">
    <h6 class="text-zinc-700 text-2xl">To-Do</h6>
    <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
</div>
<p class="text-zinc-700">Todo list...</p>
`;
