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
        <div class="hover:cursor-pointer" title="Discrete Maths">
            <img src="${fileIcon}" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Discrete Maths/p>
        </div>

        <div class="hover:cursor-pointer" title="binary-trees">
            <img src="${pdfIcon}" alt="icon-img" class="w-[50px]">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">binary-trees</p>
        </div>

        <div class="hover:cursor-pointer" title="Hazards and Glitches">
            <img src="${pdfIcon}" alt="icon-img" class="w-[50px]">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Hazards and Glitches</p>
        </div>

        <div class="hover:cursor-pointer">
            <img src="${fileIcon}" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">DLD</p>
        </div>

        <div class="hover:cursor-pointer">
            <img src="${fileIcon}" alt="icon-img" class="scale-130">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">Maths</p>
        </div>

        <div class="hover:cursor-pointer">
            <img src="${pdfIcon}" alt="icon-img" class="w-[50px]">
            <p class="pt-2 text-zinc-800 truncate max-w-14 text-center">DS</p>
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
        <h2 id="day" class="text-zinc-800 text-xl font-semibold hover:cursor-pointer hover:underline">Monday</h2>

        <div class="flex gap-4">
            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">DLD</h3>
                <p class="text-sm text-zinc-600">9:10 — 10:10 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Maths</h3>
                <p class="text-sm text-zinc-600">10:30 — 11:30 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">DS Lab</h3>
                <p class="text-sm text-zinc-600">2:30 — 3:30 AM</p>
            </div>

        </div>
    </div>

    <div class="flex flex-col gap-4">
        <h2 id="day" class="text-zinc-800 text-xl font-semibold hover:cursor-pointer hover:underline">Tuesday</h2>

        <div class="flex gap-4">
            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">DS</h3>
                <p class="text-sm text-zinc-600">9:10 — 10:10 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">DM</h3>
                <p class="text-sm text-zinc-600">10:30 — 11:30 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">Maths</h3>
                <p class="text-sm text-zinc-600">12:30 — 1:30 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">DLD Lab</h3>
                <p class="text-sm text-zinc-600">3:30 — 5:30 AM</p>
            </div>
        </div>

    </div>

    <div class="flex flex-col gap-4">
        <h2 id="day" class="text-zinc-800 text-xl font-semibold hover:cursor-pointer hover:underline">Wednesday</h2>

        <div class="flex gap-4">
            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">DS</h3>
                <p class="text-sm text-zinc-600">9:10 — 10:10 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">DLD</h3>
                <p class="text-sm text-zinc-600">10:30 — 11:30 AM</p>
            </div>

            <div class="bg-amber-50 p-4 w-full max-w-35 rounded-xl shadow-sm">
                <h3 class="font-semibold text-lg text-zinc-800">IT Lab</h3>
                <p class="text-sm text-zinc-600">3:30 — 5:30 AM</p>
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

<div class="flex gap-4 flex-wrap pr-2">

  <div id="attendance-card" class="p-4 bg-white rounded-2xl shadow w-[200px]">
    <p class="text-zinc-800 text-lg font-semibold mb-5">Maths</p>
    <div class="w-full bg-zinc-200 h-2 rounded mb-2">
      <div class="h-full bg-green-600 w-[85%] rounded"></div>
    </div>
    <p class="text-right font-bold text-green-600">85%</p>
  </div>

  <div id="attendance-card" class="p-4 bg-white rounded-2xl shadow w-[200px]">
    <p class="text-zinc-800 text-lg font-semibold mb-5">DM</p>
    <div class="w-full bg-zinc-200 h-2 rounded mb-2">
      <div class="h-full bg-green-600 w-[92%] rounded"></div>
    </div>
    <p class="text-right font-bold text-green-600">92%</p>
  </div>

  <div id="attendance-card" class="p-4 bg-white rounded-2xl shadow w-[200px]">
    <p class="text-zinc-800 text-lg font-semibold mb-5">DLD</p>
    <div class="w-full bg-zinc-200 h-2 rounded mb-2">
      <div class="h-full bg-green-600 w-[82%] rounded"></div>
    </div>
    <p class="text-right font-bold text-green-600">82%</p>
  </div>

  <div id="attendance-card" class="p-4 bg-white rounded-2xl shadow w-[200px]">
    <p class="text-zinc-800 text-lg font-semibold mb-5" id="subject-name">DS</p>
    <div class="w-full bg-zinc-200 h-2 rounded mb-2">
      <div class="h-full bg-green-600 w-[70%] rounded"></div>
    </div>
    <p class="text-right font-bold text-green-600">70%</p>
  </div>
</div>
`,

todo : `
<div class="flex justify-between items-center -my-3 pr-2">
    <h6 class="text-zinc-700 text-2xl">To-Do</h6>
    <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
</div>
<div class="text-zinc-700">
    <form id="todo-form">
        <input type="text" name="todo-input-item" id="todo-input-item" placeholder="Add a new to-do item..." class="w-full p-3 rounded-lg mb-5 text-shadow-zinc-800 bg-amber-50 placeholder:italic placeholder:text-[rgba(150,150,150,0.5)]">
    </form>

    <div>
        <ul id="todo-list" class="flex flex-col gap-3">

            <li id="item" class="flex items-center justify-between bg-white p-3 rounded-lg shadow hover:shadow-md transition duration-150 ease-in-out">
                <div class="flex items-center gap-4">
                    <input type="checkbox" name="todo-item-state" id="item-checkbox" class="w-4 h-4 accent-amber-400 hover:cursor-pointer">
                    <p id="todo-item" class="text-lg">Prepare for the DLD viva</p>
                </div>
                <i class="bi bi-trash text-xl hover:cursor-pointer" title="Delete"></i>
            </li>

            <li id="item" class="flex items-center justify-between bg-white p-3 rounded-lg shadow hover:shadow-md transition duration-150 ease-in-out">
                <div class="flex items-center gap-4">
                    <input type="checkbox" name="todo-item-state" id="item-checkbox" class="w-4 h-4 accent-amber-400 hover:cursor-pointer">
                    <p id="todo-item" class="text-lg">Complete writing the practicals</p>
                </div>
                <i class="bi bi-trash text-xl hover:cursor-pointer" title="Delete"></i>
            </li>

        </ul>
    </div>

</div>
`
}
