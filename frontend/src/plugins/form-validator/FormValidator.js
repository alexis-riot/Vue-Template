import axios from 'axios';

// eslint-disable-next-line no-unused-vars
class FormValidator {
    static ALLOWED_TYPE = ['INPUT', 'TEXTAREA'];

    constructor (endpoint, method, vm) {
        this.endpoint = endpoint;
        this.vm = vm;
        this.method = method;
        this.data = this.getData();

        this.request();
    }

    request () {
        axios({
            method: this.method,
            url: this.endpoint,
            data: this.data,
        });
    }

    getData () {
        var tmp_data = [];

        for (var index in this.vm.target) {
            if (!this.vm.target[index])
                continue;
            if (!FormValidator.ALLOWED_TYPE.includes(this.vm.target[index].tagName))
                continue;
            if (!this.vm.target[index].name)
                continue;

            tmp_data[this.vm.target[index].name] = this.vm.target[index].value;
        }
        return tmp_data;
    }


}

export default FormValidator
