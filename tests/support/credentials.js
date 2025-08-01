const Credentials = {
    usuarioValido:{
        usuario: 'standard_user',
        senha: 'secret_sauce'
},
    usuarioSenhaInvalido:{
        usuario: 'standard_user',
        senha: 'invalid_password'
    },
    dadosCheckout:{
        firstName: 'John',
        lastName: 'Doe',
        postalCode: '12345'
    },
    dadosCheckoutEmBranco:{
        firstName: '',
        lastName: '',
        postalCode: ''
    }
};

module.exports = Credentials;