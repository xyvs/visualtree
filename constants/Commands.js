export default {
    EXAMPLE_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-hpugD", description: "Add more data to output" },
        { argument: "--du", description: "Calculate total folder size" },
        { argument: "-J", description: "Output as JSON" },
        { argument: "-o tree.json", description: "Save output into file" },
    ],
    MINIMUN_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-J", description: null},
        { argument: "-o tree.json", description: null},
    ],
    ONLY_DIRECTORIES_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-d", description: null},
    ],
    ALL_FILES_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-a", description: null},
    ],
    PERMISSIONS_COMMNAND: [
        { argument: "tree", description: null},
        { argument: "-p", description: null},
    ],
    USERNAME_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-u", description: null},
    ],
    GROUP_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-g", description: null},
    ],
    DATE_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-D", description: null},
    ],
    SIZE_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-s", description: null},
    ],
    HUMAN_SIZE_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-h", description: null},
    ],
    TOTAL_FOLDER_SIZE_COMMAND: [
        { argument: "tree", description: null},
        { argument: "--du", description: null},
    ],
    MAX_DEPTH_COMMAND: [
        { argument: "tree", description: null},
        { argument: "-L 1", description: null},
    ],
    CAT_NON_VALID_NAMES: [
        { argument: "cat", description: null},
        { argument: "tree.json", description: null},
        { argument: "|", description: null},
        { argument: "grep", description: null},
        { argument: "\"\\\\\"", description: null},
    ],
}

