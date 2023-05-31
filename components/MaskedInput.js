import React from 'react';
import { TextInput } from 'react-native';

class MaskedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maskedValue: '',
    };
  }

  handleTextChange = (text) => {
    const { mask, onValueChange } = this.props;
    
    // Aquí implementa la lógica de la máscara según el tipo de input.
    // Puedes usar switch-case, un objeto de mapeo o cualquier enfoque que prefieras.

    let formattedText = text;

    switch (mask) {
      case 'phone':
        formattedText = this.formatPhone(text);
        break;
      case 'creditCard':
        formattedText = this.formatCreditCard(text);
        break;
      case 'name':
        formattedText = this.formatName(text);
        break;
      case 'expiry':
        formattedText = this.formatExpiry(text);
        break;
      case 'cvc':
        formattedText = this.formatCVC(text);
        break;
      case 'review':
        formattedText = this.formatReview(text)
        break;
      // Agrega más casos según tus necesidades
      default:
        break;
    };

    if (onValueChange) {
        onValueChange(formattedText);
    };

    this.setState({ maskedValue: formattedText });
  };

  formatPhone = (text) => {
    // Lógica de la máscara para un número de teléfono (XXX) XXX-XXXX
    return text.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };

  formatCreditCard = (text) => {
    // Lógica de la máscara para un número de tarjeta de crédito XXXX-XXXX-XXXX-XXXX
    return text.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
  };

  formatName = (text) => {
    // Lógica de la máscara para nombre y apellido
    const formattedText = text
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');

    return formattedText;
  };
  
  formatExpiry = (text) => {
    // Lógica de la máscara para fecha de vencimiento (MM/YY)
    const formattedText = text
      .replace(/\D/g, '') // Elimina todos los caracteres que no sean dígitos
      .slice(0, 4) // Limita la cadena a 4 caracteres
      .replace(/(\d{2})(\d)/, '$1/$2'); // Agrega una barra después de los primeros dos dígitos

    return formattedText;
  };

  formatCVC = (text) => {
    // Lógica de la máscara para el campo CVC (máximo 3 dígitos)
    const formattedText = text.replace(/\D/g, '').slice(0, 3);

    return formattedText;
  };

  formatReview = (text) => {
    // Lógica de la máscara para el campo de review
    // Por ejemplo, puedes limitar la longitud máxima del texto a 100 caracteres
    const formattedText = text.slice(0, 300);
  
    return formattedText;
  };

  render() {
    return (
      <TextInput
        {...this.props}
       value={this.state.maskedValue}
        onChangeText={this.handleTextChange}
        multiline={true}
      />
    );
  }
}

export default MaskedInput;
