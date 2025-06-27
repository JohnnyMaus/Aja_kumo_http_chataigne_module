function init() {
    script.log("Aja Kumo Module loaded");
}

function update() {
    // No periodic update by default
}

function routeInputToOutput(input, output) {
    var url = "config?action=set&configid=0&paramid=eParamID_XPT_Destination" + output + "_Status&value=" + input;
    local.sendGET(url);
}
