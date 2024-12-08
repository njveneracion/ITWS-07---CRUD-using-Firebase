import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  desc: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum"
  products = [
    {
      imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.AAZP4gS8Ut5Jlj9eAasjFwHaEC&pid=Api&P=0&h=220',
      category: 'Monkey',
      name: 'The Catalyzer',
      price: '$16.00'
    },
    {
      imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.ey9tMEhOTS2fWuDM3cMwpQHaEK&pid=Api&P=0&h=220',
      category:'Monkey',
      name: 'Shooting Stars',
      price: '$21.15'
    },
    {
      imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.5OtNVJyw1KlmIg2jIpHEBQHaEo&pid=Api&P=0&h=220',
      category: 'Monkey',
      name: 'Neptune',
      price: '$12.00'
    },
    {
      imgSrc: 'https://tse3.mm.bing.net/th?id=OIP._lYxAOn-jTyXGKIW0CrDagHaFF&pid=Api&P=0&h=220',
      category: 'Monkey',
      name: 'The 400 Blows',
      price: '$18.40'
    },
    {
      imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.lEIHwX4VaZi6L43o37-HYAHaE7&pid=Api&P=0&h=220',
      category: 'Monkey',
      name: 'The Catalyzer',
      price: '$16.00'
    },
    {
      imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.6bLHWCirT7ZH9c-M1MSn8wHaEK&pid=Api&P=0&h=220',
      category: 'Monkey',
      name: 'Shooting Stars',
      price: '$21.15'
    },
    {
      imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.3JZ2GTdZs-8dUyb2W4pGDgHaEJ&pid=Api&P=0&h=220',
      category: 'Monkey',
      name: 'Neptune',
      price: '$12.00'
    },
    {
      imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.I3clk_QCbOy1saSZhIna-AHaE7&pid=Api&P=0&h=220',
      category:'Monkey',
      name: 'The 400 Blows',
      price: '$18.40'
    },
    {
      imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.gmzIjcRzaXeSmtmjefXHxAAAAA&pid=Api&P=0&h=220',
      category: 'Monkey',
      name: 'The 400 Blows',
      price: '$18.40'
    },
    {
      imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.RBLoVycm2_1NnI0jLStfSAHaE8&pid=Api&P=0&h=220',
      category: 'Monkey',
      name: 'The 400 Blows',
      price: '$18.40'
    }
  ];
}
