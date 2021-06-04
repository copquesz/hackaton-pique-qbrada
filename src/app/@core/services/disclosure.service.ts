import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisclosureService {

  disclosures: Array<any> = [
    {
      id: 1,
      name: 'Grupo 01',
      email: 'nome@dominio.com.br',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis pellentesque id. Laoreet sit amet cursus sit amet dictum sit. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Eget nulla facilisi etiam dignissim diam quis enim lobortis. At lectus urna duis convallis convallis tellus id. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Id interdum velit laoreet id donec ultrices tincidunt. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Vulputate sapien nec sagittis aliquam malesuada bibendum. Tincidunt ornare massa eget egestas. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Suscipit tellus mauris a diam maecenas sed enim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Vitae tempus quam pellentesque nec nam aliquam sem et.',
      imageUrl: 'https://i.pinimg.com/originals/2f/60/0d/2f600dc77f4f487271d1405f2953d4b4.png'
    },
    {
      id: 2,
      name: 'Grupo 02',
      email: 'nome@dominio.com.br',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis pellentesque id. Laoreet sit amet cursus sit amet dictum sit. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Eget nulla facilisi etiam dignissim diam quis enim lobortis. At lectus urna duis convallis convallis tellus id. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Id interdum velit laoreet id donec ultrices tincidunt. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Vulputate sapien nec sagittis aliquam malesuada bibendum. Tincidunt ornare massa eget egestas. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Suscipit tellus mauris a diam maecenas sed enim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Vitae tempus quam pellentesque nec nam aliquam sem et.',
      imageUrl: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2016%2F12%2F08%2F15%2FLogo-199485_301422_151657146_506277777.jpg'
    },
    {
      id: 3,
      name: 'Grupo 03',
      email: 'nome@dominio.com.br',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis pellentesque id. Laoreet sit amet cursus sit amet dictum sit. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Eget nulla facilisi etiam dignissim diam quis enim lobortis. At lectus urna duis convallis convallis tellus id. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Id interdum velit laoreet id donec ultrices tincidunt. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Vulputate sapien nec sagittis aliquam malesuada bibendum. Tincidunt ornare massa eget egestas. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Suscipit tellus mauris a diam maecenas sed enim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Vitae tempus quam pellentesque nec nam aliquam sem et.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1oK-d6x-DDZsyOncGm5WRklfgLRWq3vWbJ1WWEOo5C03xKFrf4MPVaC05KQ_JHshgqo&usqp=CAU'
    },
    {
      id: 4,
      name: 'Grupo 04',
      email: 'nome@dominio.com.br',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis pellentesque id. Laoreet sit amet cursus sit amet dictum sit. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Eget nulla facilisi etiam dignissim diam quis enim lobortis. At lectus urna duis convallis convallis tellus id. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Id interdum velit laoreet id donec ultrices tincidunt. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Vulputate sapien nec sagittis aliquam malesuada bibendum. Tincidunt ornare massa eget egestas. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Suscipit tellus mauris a diam maecenas sed enim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Vitae tempus quam pellentesque nec nam aliquam sem et.',
      imageUrl: 'http://www.colegioexcelsior.com.br/wp-content/uploads/2018/07/logo-teatro.jpg'
    }
  ];

  constructor() { }

  findById(id: number){
    return this.disclosures.find(disclosure => disclosure.id === id)
  }

  findAll(){
    return this.disclosures;
  }

}
