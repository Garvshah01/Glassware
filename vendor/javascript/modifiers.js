// modifiers@1.0.0 downloaded from https://ga.jspm.io/npm:modifiers@1.0.0/modifiers.js

var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var i={};(function(){var i={shift:16,control:17,alt:18,option:18,command:91};var d={};function resetModifiers(){for(var e in i)d[e]=false}function updateModifier(e){var o=e.keyCode;var n="keydown"==e.type;93!=o&&224!=o||(o=91);for(var t in i)o==i[t]&&(d[t]=n)}resetModifiers();document.addEventListener("keydown",updateModifier);document.addEventListener("keyup",updateModifier);window.addEventListener("focus",resetModifiers);(this||e).modifiers=d;(this||e).modifiers.add=function addKeyMapping(e){for(var o in e){i[o]=e[o];d[o]=false}}}).call(i);export default i;

