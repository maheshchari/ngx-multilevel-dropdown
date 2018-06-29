import { Injectable } from '@angular/core';
import { TreeviewItem } from '../../lib';

export class BookService {
  getBooks(): TreeviewItem[] {
    const childrenCategory = new TreeviewItem({
      text: 'Children',
      value: 1,
      collapsed: true,
      hasFilter: true,
      children: [
        { text: 'Baby 3-5', value: 11, checked: false },
        { text: 'Baby 6-8', value: 12, checked: false },
        { text: 'Baby 9-12', value: 13, checked: false }
      ]
    });
    const itCategory = new TreeviewItem({
      text: 'IT',
      value: 9,
      collapsed: true,
      hasFilter: true,
      children: [
        {
          text: 'Programming',
          value: 91,
          collapsed: true,
          children: [
            {
              text: 'Frontend',
              collapsed: true,
              value: 911,
              children: [
                { text: 'Angular 1', value: 9111, checked: false },
                { text: 'Angular 2', value: 9112, checked: false },
                { text: 'ReactJS', value: 9113, checked: false }
              ]
            },
            {
              text: 'Backend',
              value: 912,
              collapsed: true,
              children: [
                { text: 'C#', value: 9121, checked: false },
                { text: 'Java', value: 9122, checked: false },
                { text: 'Python', value: 9123, checked: false }
              ]
            }
          ]
        },
        {
          text: 'Networking',
          value: 92,
          collapsed: true,
          children: [
            { text: 'Internet', value: 921, checked: false },
            { text: 'Security', value: 922, checked: false }
          ]
        }
      ]
    });
    const teenCategory = new TreeviewItem({
      text: 'Teen',
      value: 2,
      collapsed: true,
      hasFilter: true,
      disabled: false,
      children: [
        { text: 'Adventure', value: 21, checked: false },
        { text: 'Science', value: 22, checked: false }
      ]
    });
    const othersCategory = new TreeviewItem({
      text: 'Others',
      value: 3,
      checked: false,
      disabled: false
    });
    return [childrenCategory, itCategory, teenCategory, othersCategory];
  }
}
