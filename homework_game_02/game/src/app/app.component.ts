import { Component } from '@angular/core';
import { Game } from './interfaces/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game';

  gamesList: Game[] = [
    {
      id: 1,
      title: 'Dauntless',
      releaseDate: '2019-05-21',
      rating: 0.45,
      price: 22.45,
      shortDescription:
        'A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.',
      genre: 'MMORPG',
      publisher: 'Phoenix Labs',
      developer: 'Phoenix Labs, Iron Galaxy',
    },
    {
      id: 2,
      title: 'World of Tanks',
      releaseDate: '2011-04-12',
      rating: 3.56,
      price: 44.32,
      shortDescription:
        'If you like blowing up tanks, with a quick and intense game style you will love this game!',
      genre: 'Shooter',
      publisher: 'Wargaming',
      developer: 'Wargaming',
    },
    {
      id: 3,
      title: 'Warframe',
      shortDescription:
        'A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ',
      rating: 3.41,
      price: 32.3,
      genre: 'Shooter',
      publisher: 'Digital Extremes',
      developer: 'Digital Extremes',
      releaseDate: '2013-03-25',
    },
    {
      id: 4,
      title: 'CRSED: F.O.A.D.',
      shortDescription:
        'Take the battle royale genre and add  mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)',
      price: 3.54,
      rating: 32.4,
      genre: 'Shooter',
      publisher: 'Gaijin Distribution KFT',
      developer: 'Darkflow Software',
      releaseDate: '2019-12-12',
    },
    {
      id: 5,
      title: 'Crossout',
      shortDescription: 'A post-apocalyptic MMO vehicle combat game! ',
      genre: 'Shooter',
      publisher: 'Targem',
      developer: 'Gaijin',
      releaseDate: '2017-05-30',
      rating: 5.2,
      price: 11.23,
    },
    {
      id: 6,
      title: 'Blade and Soul',
      shortDescription:
        'A free-to-play martial arts MMORPG that tasks players with learning combination attacks.',
      genre: 'MMORPG',
      publisher: 'NCSoft',
      developer: 'NCSoft',
      releaseDate: '2016-01-19',
      price: 3.11,
      rating: 10.3,
    },
    {
      id: 7,
      title: 'Armored Warfare',
      shortDescription:
        'A modern team-based MMO tank game from Obsidian Entertainment.',
      genre: 'Shooter',
      publisher: 'My.com (Mail.ru Group)',
      developer: 'Obsidian Entertainment',
      releaseDate: '2015-10-08',
      rating: 3.3,
      price: 12.22,
    },
    {
      id: 8,
      title: 'Trove',
      shortDescription:
        'A free to play Sandbox massively multiplayer online role-playing game! ',
      genre: 'MMORPG',
      publisher: 'Trion Worlds',
      developer: 'Trion Worlds',
      releaseDate: '2015-07-09',
      price: 33.42,
      rating: 11.9,
    },
    {
      id: 9,
      title: 'World of Warships',
      shortDescription:
        'A 3D free to play naval action-themed MMO from the creators of World of Tanks! ',
      genre: 'Shooter',
      publisher: 'Wargaming',
      developer: 'Wargaming',
      releaseDate: '2015-07-02',
      rating: 22,
      price: 2.24,
    },
    {
      id: 10,
      title: 'ArcheAge',
      shortDescription:
        'A free-to-play, hybrid fantasy/sandbox MMORPG brought to you by Trion Worlds.',
      genre: 'MMORPG',
      publisher: 'Trion Worlds',
      developer: 'XL Games',
      releaseDate: '2014-09-04',
      rating: 33.2,
      price: 12.44,
    },
  ];
}
