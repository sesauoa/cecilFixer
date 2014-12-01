script = document.createElement("script");
script.innerHTML = "\
function fixCecil(){ \
console.log('resetting!'); \
sessionAlert.ResetSession(true); \
sessionAlert.resetAlert(); \
window.setTimeout('fixCecil()', 3240000); \
} \
window.setTimeout('fixCecil()', 3240000);";
document.head.appendChild(script);