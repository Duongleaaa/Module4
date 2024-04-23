"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// tạo hàm decorator.
/*
target: tham chiếu tới class mà có method được gắn decorator.
propertyKey: Tên method được gắn.
descriptor: mô tả về method.
*/
function log(target, propertyKey, descriptor) {
    // lưu trữ tham chiếu đến hàm gốc.
    let originMethod = descriptor.value;
    //ghi đè hàm gốc bằng function mới,  cái này sẽ thay cho hàm gốc khi được gọi.
    //arg được truyền vào chính là các đối số mà ta truyền vào hàm gốc (sum)
    descriptor.value = function (...arg) {
        // clg ra tên hàm
        console.log(`tên hàm: ${propertyKey}`);
        //clg các tham số đầu vào
        console.log(`các tham số đầu vào:${arg}`);
        //gọi hàm gốc với tham số truyền vào và lưu vào biến result 
        let result = originMethod(...arg);
        console.log(`kết quả trả về của hàm gốc: ${result}`);
        return result;
    };
}
//tạo lớp
let homeWork1 = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _sum_decorators;
    return _a = class homeWork1 {
            constructor(nameCln) {
                this.name = __runInitializers(this, _instanceExtraInitializers);
                this.name = nameCln;
            }
            //phương thức có gắn decorator
            sum(a, b) {
                return a + b;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sum_decorators = [log];
            __esDecorate(_a, null, _sum_decorators, { kind: "method", name: "sum", static: false, private: false, access: { has: obj => "sum" in obj, get: obj => obj.sum }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
//tạo đối tượng
let hw1 = new homeWork1('duong');
//gọi phương thức.
hw1.sum(1, 2);
