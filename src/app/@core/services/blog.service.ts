import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

constructor() { }

  private posts: Array<any> = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: this.random(10),
      author: 'Publicador',
      image: `https://wallpaperaccess.com/full/1933524.jpg`
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: this.random(10),
      author: 'Publicador',
      image: `https://wallpaperaccess.com/full/2690513.jpg`
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: this.random(10),
      author: 'Publicador',
      image: `https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80`
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: this.random(10),
      author: 'Publicador',
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4fsT3NiKU9-QlJh1pCmrWDgWn4XLXmBheDve2kgfpgGvQKAYPBGadhrw6__kvxIWp4s&usqp=CAU`
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: this.random(10),
      author: 'Publicador',
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4kSDQYiujDUlDO_JCqAkWC75C3Xh4pDDL-wCuM0hsel-tONEqpbVV_4PuyFxIqef7UA&usqp=CAU`
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit amet 6',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: this.random(10),
      author: 'Publicador',
      image: `https://cdn.wallpapersafari.com/51/98/qfPoNW.jpg`
    }
  ]

  findById(id: number){
    return this.posts.find(post => post.id === id)
  }

  findAll(){
    return this.posts;
  }

  random(max: number){
    return Math.floor(Math.random() * max) + 1;
  }

}
