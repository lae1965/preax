import { ILoginData, FormInputValidation } from "../types";


export const formInputValidation = (loginData: ILoginData): FormInputValidation  => {  
    const {name, password} = loginData;
    const nameValidation = /^[A-ZА-Я][а-яА-ЯёЁa-zA-Z0-9]{1,30}$/;
    const passwordValidation = /^(?=.*[A-ZА-Я].*[A-ZА-Я].*[A-ZА-Я].*$)(?=.*[\d].*[\d].*$)[A-Za-zа-яА-Я0-9\d]{8,30}$/;

    const validatonData: FormInputValidation = {
        messageName: '', 
        messagePassword: '',
        statusName: 'regular',
        statusPassword: 'regular',
    }

    if (!nameValidation.test(name)) {
        validatonData.messageName = 'Имя не соответствует требованиям';
        validatonData.statusName = 'error';
    }
    else {
        validatonData.messagePassword = '';  
        validatonData.statusName = 'regular';
    }
    
    if (!passwordValidation.test(password)) {
        validatonData.messagePassword = 'Пароль не соответствует требованиям';
        validatonData.statusPassword = 'error';
    }
    else {      
        validatonData.messagePassword = '';  
        validatonData.statusPassword = 'regular';
    }

    return  validatonData;
}