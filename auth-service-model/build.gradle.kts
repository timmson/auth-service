plugins {
    kotlin("multiplatform")
}

kotlin {
    js(IR) {
        binaries.executable()
        nodejs {

        }
        generateTypeScriptDefinitions()
    }
    jvm {

    }
}
