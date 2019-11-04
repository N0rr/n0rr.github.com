module.exports = {
    "postcss": [],
    "postscss": [
        {
            "name": "postcss-sorting",
            "options": {
                "unspecified-properties-position": "bottomAlphabetical",
                "rule-nested-empty-line-before:": [
                    true
                ],
                "at-rule-nested-empty-line-before": [
                    true,
                    {
                        "except": [
                            "blockless-after-same-name-blockless",
                            "first-nested"
                        ]
                    }
                ],
                "custom-property-empty-line-before": [
                    true,
                    {
                        "except": [
                            "after-custom-property",
                            "first-nested"
                        ]
                    }
                ],
                "dollar-variable-empty-line-before": [
                    false
                ],
                "order": [
                    "custom-properties",
                    "dollar-variables",
                    {
                        "type": "at-rule",
                        "name": "extend"
                    },
                    {
                        "type": "at-rule",
                        "name": "include",
                        "hasBlock": false
                    },
                    "declarations",
                    "at-rules",
                    {
                        "type": "at-rule",
                        "name": "include",
                        "hasBlock": true
                    },
                    "rules"
                ],
                "properties-order": [
                    {
                        "emptyLineBefore": true,
                        "properties": [
                            "content"
                        ]
                    },
                    {
                        "emptyLineBefore": true,
                        "properties": [
                            "position",
                            "z-index",
                            "top",
                            "right",
                            "bottom",
                            "left"
                        ]
                    },
                    {
                        "emptyLineBefore": true,
                        "properties": [
                            "display",
                            "box-sizing",
                            "flex-flow",
                            "flex-direction",
                            "flex-wrap",
                            "align-items",
                            "align-content",
                            "justify-content",
                            "flex",
                            "order",
                            "align-self",
                            "flex-grow",
                            "flex-shrink",
                            "flex-basis",
                            "float",
                            "clear",
                            "width",
                            "min-width",
                            "max-width",
                            "height",
                            "min-height",
                            "max-height",
                            "padding",
                            "padding-top",
                            "padding-right",
                            "padding-bottom",
                            "padding-left",
                            "margin",
                            "margin-top",
                            "margin-right",
                            "margin-bottom",
                            "margin-left",
                            "overflow",
                            "overflow-x",
                            "overflow-y",
                            "clip",
                            "zoom",
                            "resize",
                            "table-layout",
                            "empty-cells",
                            "caption-side",
                            "border-spacing",
                            "border-collapse"
                        ]
                    },
                    {
                        "emptyLineBefore": true,
                        "properties": [
                            "font",
                            "font-family",
                            "font-size",
                            "font-weight",
                            "font-style",
                            "font-variant",
                            "font-size-adjust",
                            "font-stretch",
                            "font-effect",
                            "font-emphasize",
                            "font-emphasize-position",
                            "font-emphasize-style",
                            "font-smooth",
                            "line-height",
                            "color",
                            "text-align",
                            "text-align-last",
                            "vertical-align",
                            "white-space",
                            "text-decoration",
                            "text-emphasis",
                            "text-emphasis-color",
                            "text-emphasis-style",
                            "text-emphasis-position",
                            "text-indent",
                            "text-justify",
                            "text-transform",
                            "letter-spacing",
                            "word-spacing",
                            "text-outline",
                            "text-transform",
                            "text-wrap",
                            "text-overflow",
                            "text-overflow-ellipsis",
                            "text-overflow-mode",
                            "text-shadow",
                            "word-wrap",
                            "word-break",
                            "hyphens"
                        ]
                    },
                    {
                        "emptyLineBefore": true,
                        "properties": [
                            "border",
                            "border-collapse",
                            "border-width",
                            "border-style",
                            "border-color",
                            "border-top",
                            "border-top-width",
                            "border-top-style",
                            "border-top-color",
                            "border-right",
                            "border-right-width",
                            "border-right-style",
                            "border-right-color",
                            "border-bottom",
                            "border-bottom-width",
                            "border-bottom-style",
                            "border-bottom-color",
                            "border-left",
                            "border-left-width",
                            "border-left-style",
                            "border-left-color",
                            "border-radius",
                            "border-top-left-radius",
                            "border-top-right-radius",
                            "border-bottom-right-radius",
                            "border-bottom-left-radius",
                            "border-image",
                            "border-image-source",
                            "border-image-slice",
                            "border-image-width",
                            "border-image-outset",
                            "border-image-repeat",
                            "background",
                            "background-color",
                            "background-image",
                            "background-repeat",
                            "background-attachment",
                            "background-position",
                            "background-position-x",
                            "background-position-y",
                            "background-clip",
                            "background-origin",
                            "background-size",
                            "box-decoration-break",
                            "box-shadow",
                            "cursor",
                            "opacity",
                            "outline",
                            "outline-width",
                            "outline-style",
                            "outline-color",
                            "outline-offset",
                            "transform",
                            "transform-origin",
                            "list-style",
                            "list-style-position",
                            "list-style-type",
                            "list-style-image",
                            "visibility",
                            "user-select"
                        ]
                    },
                    {
                        "emptyLineBefore": true,
                        "properties": [
                            "animation",
                            "animation-name",
                            "animation-duration",
                            "animation-play-state",
                            "animation-timing-function",
                            "animation-delay",
                            "animation-iteration-count",
                            "animation-direction",
                            "transition",
                            "transition-delay",
                            "transition-timing-function",
                            "transition-duration",
                            "transition-property",
                            "will-change"
                        ]
                    }
                ]
            }
        }
    ],
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "separate-file-with-link",
            "usePolyfillForExternalSymbols": false,
            "pathToExternalSymbolsFile": ""
        }
    },
    "css": {
        "workflow": "manual"
    },
    "js": {
        "workflow": "modular",
        "bundler": "webpack",
        "lint": true,
        "useBabel": true,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": false,
            "providePlugin": {}
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": true,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "minifyHtml": false,
    "generateStaticPath": true,
    "buildPath": "../build/",
    "useBuildVersioning": false,
    "useArchiver": false,
    "ulimit": 4096,
    "templater": "pug",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img",
        "componentsFolderName": "components"
    },
    "devPath": "./dev/"
};