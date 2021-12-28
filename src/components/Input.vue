<script setup>

const emit = defineEmits(['fileUpload'])

const generateJSONFile = (e) => {
    const contents = e.target.result
    const json = JSON.parse(contents)
    emit('fileUpload', json)
};

const openJSONFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = generateJSONFile
    reader.readAsText(file)
};

</script>

<template>
    <div>
        <input type="file" id="treeFile" class="hidden" @change="openJSONFile" accept=".json">
        <label for="treeFile" class="p-12 border border-blue-500 bg-blue-100/30 dark:bg-blue-900/20 border-dashed rounded-xl text-blue-400 text cursor-pointer block">
            Drop a file here or click to select a file
        </label>
    </div>
</template>

