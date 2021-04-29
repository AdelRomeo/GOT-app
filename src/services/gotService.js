export default class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  //основная функция по отправке запроса на сервер
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    //выбрасываем ошибку в случаи если ответ сервер не 'ok'
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  //получаем всех персонажей
  getAllCharacters(){
    return this.getResource('/characters?page=5&pageSize=10')
  }

  //получаем одного персонажа
  getCharacter(id){
    return this.getResource(`/characters/${id}`)
  }

  //получаем все дома
  getAllHouses(){
    return this.getResource('/houses/')
  }

  //получаем один дом
  getHouses(id){
    return this.getResource(`/houses/${id}`)
  }

  //получаем все книги
  getAllBooks(){
    return this.getResource('/books/')
  }

  //получаем одну книгу
  getBook(id){
    return this.getResource(`/books/${id}`)
  }

  _transformCharacter

}