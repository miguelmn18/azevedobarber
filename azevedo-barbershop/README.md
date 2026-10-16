# Azevedo Barber — React + Vite

Site responsivo para barbearia com estética preto, branco e cinza; tipografia retrô inspirada nos anos 80; animações no cabeçalho; biografia; serviços; prótese capilar; localização e formulário de contato integrado a um link do WhatsApp.

## Executar localmente
1. Instale Node.js LTS.
2. Abra um terminal nesta pasta.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Abra o endereço local mostrado pelo Vite.

## Personalizar antes de publicar
- **WhatsApp:** em `src/App.jsx`, altere `whatsappNumber` para o número oficial com código do país e DDD, somente números. O valor atual é apenas um placeholder.
- **Foto do proprietário:** substitua a URL da imagem `owner-photo` pela foto real do dono.
- **Biografia:** edite os textos da seção `#sobre`.
- **Serviços:** altere o array `services` no começo de `src/App.jsx`.
- **Localização e horários:** substitua os textos de exemplo na seção `#localizacao` e insira o link ou iframe do Google Maps.
- **Instagram:** altere o link genérico para o perfil oficial.
- As fotos de demonstração são servidas pelo Unsplash e precisam de internet; prefira imagens autorizadas da barbearia na versão publicada.

## Build
`npm run build` cria a pasta `dist/`, pronta para hospedagem estática, como Vercel.
