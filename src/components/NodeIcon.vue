<script setup>
import { computed } from 'vue';

import Constants from '../../constants/Constants.js';

import FolderOpen from '../assets/icons/FolderOpen.png'
import FolderClosed from '../assets/icons/FolderClosed.png'

import File from '../assets/icons/File.png'
import Archive from '../assets/icons/Archive.png'
import Audio from '../assets/icons/Audio.png'
import Database from '../assets/icons/Database.png'
import Development from '../assets/icons/Development.png'
import Executable from '../assets/icons/Executable.png'
import Image from '../assets/icons/Image.png'
import SpreadSheet from '../assets/icons/SpreadSheet.png'
import System from '../assets/icons/System.png'
import Text from '../assets/icons/Text.png'
import Video from '../assets/icons/Video.png'

const FORMAT_ICONS = {
    'archive': Archive,
    'audio': Audio,
    'database': Database,
    'development': Development,
    'executable': Executable,
    'image': Image,
    'spreadsheet': SpreadSheet,
    'system': System,
    'text': Text,
    'video': Video,
}

const props = defineProps({
  name: String,
  type: String,
  open: Boolean
})

const format = computed(() => {
    if (props.type  === 'file'){
        const filename = props.name.split('.')
        const format = filename[filename.length - 1]
        return Constants.FILE_TYPES[format]
    } else {
        return null
    }
})

const icon = computed(() => {
    let icon = null
    if (format.value) {
        icon = FORMAT_ICONS[format.value]
    } else {
        icon = File
    }
    return icon
})

</script>

<template>
    <div v-if="type === 'directory'" class="h-6 w-6">
        <img v-if="open" :src="FolderOpen" alt="directory">
        <img v-else :src="FolderClosed" alt="directory">
    </div>
    <div v-if="type === 'file'">
        <div class="w-6 h-6">
            <img :src="icon" :alt="format">
        </div>
    </div>
</template>
