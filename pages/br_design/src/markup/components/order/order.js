import Component from 'helpers-js/Component';
import Inputmask from 'inputmask';
import 'jquery-validation';

export default Component.create('order', class {
    constructor($block) {
        this.$block = $block;
        this.init();
    }

    init() {
        let form = document.querySelector('.order__form');
        let inputPhone = document.querySelector('.input-phone-js');

        let inputMaskPhone = new Inputmask({
            mask: '7(999)999-99-99'
        }); inputMaskPhone.mask(inputPhone);

        $(form).validate({
            errorClass: 'invalid',
            validClass: 'valid',
            ignoreTitle: true,
            errorElement: 'span',
            errorPlacement: function (error, element) {
                let errorBlock = document.querySelector('.' + $(element).attr('data-error-msg'));

                error.appendTo(errorBlock);
            },
            highlight: function (element, errorClass, validClass) {
                let errorBlock = document.querySelector('.' + $(element).attr('data-error-msg'));

                $(element).addClass(errorClass).removeClass(validClass);
                $(errorBlock).addClass(errorClass);
            },
            unhighlight: function (element, errorClass, validClass) {
                let errorBlock = document.querySelector('.' + $(element).attr('data-error-msg'));

                $(element).removeClass(errorClass).addClass(validClass);
                $(errorBlock).removeClass(errorClass);
            },
            rules: {
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    phone: true
                },
                name: {
                    required: true,
                    name_: true
                }
            },
            messages: {
                email: {
                    required: 'необходимо ввести адрес почты'
                },
                phone: {
                    required: 'необходимо ввести номер телефона'
                },
                name: {
                    required: 'необходимо ввести имя'
                }
            }
        });

        $.validator.addMethod('email', function (value, element) {
            return this.optional(element) || /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value);
        }, 'Пожайлуста введите коректный email');

        $.validator.addMethod('phone', function (value, element) {
            return this.optional(element) || /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(value);
        }, 'Введите полный номер телефона');

        $.validator.addMethod('name_', function (value, element) {
            return this.optional(element) || /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$/u.test(value);
        }, 'Введите имя');

    }
});

