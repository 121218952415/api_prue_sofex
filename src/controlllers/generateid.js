

function generateUniqueId() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_";
  
    let id = "";
  
    // Generar las letras
    for (let i = 0; i < 4; i++) {
      id += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  
    // Generar los números
    for (let i = 0; i < 4; i++) {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  
    // Generar los símbolos
    for (let i = 0; i < 4; i++) {
      id += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
  
    return id;
  }

  module.exports = {
    generateUniqueId,
  };