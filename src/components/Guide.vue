<script setup>
import Command from './Command.vue'

import Commands from './../../constants/Commands.js'
</script>

<template>
    <div class="flex-grow flex flex-col items-center justify-center w-full">
        <div class="flex flex-col items-center justify-center bg-white dark:bg-gray-900 gap-8 p-12 rounded-xl border-gray-200 shadow w-[650px]">
            <div class="space-y-3">
                <div class="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                    Guide
                </div>
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    For a more detailed guide please refer to the
                    <a class="text-blue-300" href="https://linux.die.net/man/1/tree">manual</a>,
                    on this guide I will overview the features this tool can work with.
                </div>
            </div>
            <div class="space-y-4">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    The minimun you need for this tool to work is to output the tree
                    command as JSON and save it to a file, the command below show how to do this.
                </div>
                <Command :command="Commands.MINIMUN_COMMAND" />
            </div>
            <div class="space-y-3 w-full">
                <div class="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Other Arguments
                </div>
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    You can use other arguments to add more data to the output in the
                    following example I will show a few and what's the default output of some of them.
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">-a</span>:
                    All files are printed.  By default tree does not print hidden files (those beginning with a dot `.').  In no event does tree print the file system constructs `.'
                </div>
                <Command :command="Commands.ALL_FILES_COMMAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
├── .secret
├── File\ 0.txt
└── Folder\ 1
    ├── File\ 1.txt
    ├── File\ 2.pdf
    ├── File\ 3.mp4
    └── Folder\ 2
        ├── File\ 4.json
        └── File\ 5.py

2 directories, 7 files</pre>
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">-d</span>:
                    List directories only.
                </div>
                <Command :command="Commands.ONLY_DIRECTORIES_COMMAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
└── Folder\ 1
└── Folder\ 2

2 directories</pre>
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">-p</span>:
                    Print the file type and permissions for each file (as per ls -l).
                </div>
                <Command :command="Commands.PERMISSIONS_COMMNAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
├── [-rw-r--r--]  File\ 0.txt
└── [drwxr-xr-x]  Folder\ 1
    ├── [-rw-r--r--]  File\ 1.txt
    ├── [-rw-r--r--]  File\ 2.pdf
    ├── [-rw-r--r--]  File\ 3.mp4
    └── [drwxr-xr-x]  Folder\ 2
        ├── [-rw-r--r--]  File\ 4.json
        └── [-rw-r--r--]  File\ 5.py

2 directories, 6 files</pre>
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">-u</span>:
                    Print the username, or UID # if no username is available, of the file.
                </div>
                <Command :command="Commands.USERNAME_COMMAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
├── [username]  File\ 0.txt
└── [username]  Folder\ 1
    ├── [username]  File\ 1.txt
    ├── [username]  File\ 2.pdf
    ├── [username]  File\ 3.mp4
    └── [username]  Folder\ 2
        ├── [username]  File\ 4.json
        └── [username]  File\ 5.py

2 directories, 6 files</pre>
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">-g</span>:
                    Print the group name, or GID # if no group name is available, of the file.
                </div>
                <Command :command="Commands.GROUP_COMMAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
├── [staff   ]  File\ 0.txt
└── [staff   ]  Folder\ 1
    ├── [staff   ]  File\ 1.txt
    ├── [staff   ]  File\ 2.pdf
    ├── [staff   ]  File\ 3.mp4
    └── [staff   ]  Folder\ 2
        ├── [staff   ]  File\ 4.json
        └── [staff   ]  File\ 5.py

2 directories, 6 files</pre>
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">-D</span>:
                    Print the date of the last modification time or if -c is used, the last status change time for the file listed.
                </div>
                <Command :command="Commands.DATE_COMMAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
├── [Dec 28 21:24]  File\ 0.txt
└── [Dec 28 21:26]  Folder\ 1
    ├── [Dec 28 21:25]  File\ 1.txt
    ├── [Dec 28 21:25]  File\ 2.pdf
    ├── [Dec 28 21:25]  File\ 3.mp4
    └── [Dec 28 21:26]  Folder\ 2
        ├── [Dec 28 21:25]  File\ 4.json
        └── [Dec 28 21:26]  File\ 5.py

2 directories, 6 files</pre>
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">-s</span>:
                    Print the size of each file in bytes along with the name.
                </div>
                <Command :command="Commands.SIZE_COMMAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
├── [          0]  File\ 0.txt
└── [        192]  Folder\ 1
    ├── [          0]  File\ 1.txt
    ├── [          0]  File\ 2.pdf
    ├── [          0]  File\ 3.mp4
    └── [        128]  Folder\ 2
        ├── [          0]  File\ 4.json
        └── [          0]  File\ 5.py

2 directories, 6 files</pre>
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">-h</span>:
                    Print the size of each file but in a more human readable way, e.g. appending a size letter for kilobytes (K), megabytes (M), gigabytes (G), terabytes (T), petabytes (P) and exabytes (E).
                </div>
                <Command :command="Commands.HUMAN_SIZE_COMMAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
├── [   0]  File\ 0.txt
└── [ 192]  Folder\ 1
    ├── [   0]  File\ 1.txt
    ├── [   0]  File\ 2.pdf
    ├── [   0]  File\ 3.mp4
    └── [ 128]  Folder\ 2
        ├── [   0]  File\ 4.json
        └── [   0]  File\ 5.py

2 directories, 6 files</pre>
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">--du</span>:
                    For each directory report its size as the accumulation of sizes of all its files and sub-directories (and their files, and so on).
                </div>
                <Command :command="Commands.TOTAL_FOLDER_SIZE_COMMAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
├── [          0]  File\ 0.txt
└── [        320]  Folder\ 1
    ├── [          0]  File\ 1.txt
    ├── [          0]  File\ 2.pdf
    ├── [          0]  File\ 3.mp4
    └── [        128]  Folder\ 2
        ├── [          0]  File\ 4.json
        └── [          0]  File\ 5.py

480 bytes used in 2 directories, 6 files</pre>
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    <span class="py-1 px-1 dark:bg-gray-800 rounded">-L level</span>:
                    Max display depth of the directory tree.
                </div>
                <Command :command="Commands.MAX_DEPTH_COMMAND" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    Output:
                </div>
                <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all relative">
                    <pre>
.
├── File\ 0.txt
└── Folder\ 1

1 directory, 1 file</pre>
                </div>
            </div>
            <div class="text-xl font-semibold text-gray-800 dark:text-gray-100 w-full">
                Troubleshooting
            </div>
            <div class="space-y-4">
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    If for some reason you have a file that has a "\" in the name,
                    the tool will fail. You can validate your file doesn't contain any "\"
                    with the command below
                </div>
                <Command :command="Commands.CAT_NON_VALID_NAMES" />
                <div class="text-gray-500 dark:text-gray-400 text-sm">
                    If your file shows at least one line with 
                    the character, delete that line before uploading the file.
                </div>
            </div>
        </div>
    </div>

</template>

