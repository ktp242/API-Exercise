require(["module/apiController"], function(apiController) {
    //This function is called when module/apiController.js is loaded.
    //If apiController.js calls define(), then this function is not fired until
    //apiController's dependencies have loaded, and the apiController argument 
    //will hold the module value for "module/apiController".
});