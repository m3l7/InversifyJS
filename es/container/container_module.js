import { guid } from "../utils/guid";
var ContainerModule = (function () {
    function ContainerModule(registry) {
        this.guid = guid();
        this.registry = registry;
    }
    return ContainerModule;
}());
export { ContainerModule };
