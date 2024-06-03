function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateAccount() {
  const username = generateRandomString(8);
  const password = generateRandomString(8);
  document.getElementById('username').value = username;
  document.getElementById('password').value = password;
}

function copyToClipboard(id) {
  const copyText = document.getElementById(id);
  copyText.select();
  copyText.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand('copy');
  const button = document.querySelector(`button[onclick="copyToClipboard('${id}')"]`);
  button.innerHTML = '<i class="fas fa-check"></i> Copiado!';
  setTimeout(() => {
      button.innerHTML = '<i class="fas fa-copy"></i> Copiar ' + (id === 'username' ? 'Nome' : 'Senha');
  }, 2000);
}