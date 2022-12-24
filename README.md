# Video-Teams

Este projeto simula um site para visualização de videos em salas virtuais para convidados e conta com quatro paginas. Feito com Reactjs e Firebase, 
- A página de login permite o login com o Github e com o Google. 
- A página de criação da sala só permite link de vídeos do Youtube e mostrará uma mensagem de erro caso o link seja inválido. Também não permite criar a sala sem nome. Se você possuir o id link do video (que fica no canto superior direito da sala virtual), poderá entrar diretamente na sala. 
- A sala virtual roda automáticamente o video (tem que ligar o som do video pois os navegadores não permitem mais autoplay com o som ligado) e quem estiver logado pode fazer comentários que ficam salvos mesmo depois de sair da tela. Senão, aparece uma opção de logar para comentar. O link da sala virtual é o link utilizado para poder entrar diretamente. Os botões de usuarios assistindo e visualizações são decorativos, para adicionar funcionalidades depois.
- A sala de listagem de salas virtuais mostra todas as salas disponiveis para acesso, que também ficam salvas mesmo após sair. Já existe uma sala criada para teste.
Quem criar a sala tem a opção de poder apagar a sala.


## Para rodar o projeto na sua máquina

- Clone o projeto na sua máquina e rode ```npm install``` para rodar todas as dependências
- Rode ```npm run dev``` e você ja terá acesso ao projeto!

### Não é necessario comandos ou instalação de recursos adicionais.

### Link do projeto: <a href="https://video-teams.vercel.app/">Video Teams</a>

![image](https://user-images.githubusercontent.com/99514714/209438578-1a67f910-c340-401a-a7e9-9f321165c784.png)
