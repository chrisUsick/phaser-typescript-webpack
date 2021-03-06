/// <reference path="../node_modules/phaser-ce/typescript/phaser.comments.d.ts"/>

import {BootState} from './states/boot'
import {SplashState} from './states/splash'
import {GameState} from './states/game'

class Game extends Phaser.Game {

  constructor () {
    let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth
    let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

new Game()
