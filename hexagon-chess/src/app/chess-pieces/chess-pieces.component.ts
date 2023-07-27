import { Component } from '@angular/core';

@Component({
  selector: 'app-chess-pieces',
  templateUrl: './chess-pieces.component.html',
  styleUrls: ['./chess-pieces.component.scss']
})
export class ChessPiecesComponent {

}

export class chessPiece {
  name: string;
  color: string;
  htmlElement: HTMLElement;
  character: string;
  hasMoved = false;
  constructor(name: string, color: string, character: string) {
    this.name = name;
    this.color = color;
    this.character = character;
    if (name != 'empty') {
      this.htmlElement = document.createElement('img');
      this.htmlElement.setAttribute('src', 'assets/chessPieces/' + this.name + '-' + this.color + '.png');
      this.htmlElement.setAttribute('alt', this.character);
      this.htmlElement.className = color + '" id = ' + this.name;
    }
    else
      this.htmlElement = document.createElement('img');


  }
  getValidMoves(position: string): number[] {
    console.log("current position is " + position)
    return [];
  }
}
export class Pawn extends chessPiece {
  constructor(color: string) {
    super('pawn', color, 'P');
  }
}

export class Bishop extends chessPiece {
  constructor(color: string) {
    super('bishop', color, 'B');
  }
}
export class Queen extends chessPiece {
  constructor(color: string) {
    super('queen', color, 'Q');
  }
}
export class Rook extends chessPiece {
  constructor(color: string) {
    super('rook', color, 'R');
  }
}
export class Knight extends chessPiece {
  constructor(color: string) {
    super('knight', color, 'N');
  }
}
export class King extends chessPiece {
  constructor(color: string) {
    super('king', color, 'K');
  }
}
export class Empty extends chessPiece {
  constructor(color: string) {
    super('empty', color, '');
    //html element is a div
    this.htmlElement = document.createElement('div');
  }
}



export function convertFromChessToHexagon(chessPosition: string) {
  //convert from chess notation to hexagon notation

  const columnStartingXs = new Map([['a', 0], ['b', 1], ['c', 2], ['d', 3], ['e', 4], ['f', 5], ['g', 6], ['h', 7], ['i', 8], ['k', 9], ['l', 10]]);
  const columnStartingYs = new Map([['a', 5], ['b', 4], ['c', 3], ['d', 2], ['e', 1], ['f', 0], ['g', 1], ['h', 2], ['i', 3], ['k', 4], ['l', 5]]);
  //split the string into an array
  const chessPositionArray = chessPosition.split('');
  //get the first element of the arrayq
  let column = chessPositionArray[0];
  column = column.toLowerCase();
  //get the second element of the array
  const row = chessPositionArray[1];
  if (column == undefined)
    return;
  const startingY = columnStartingYs.get(column);
  if (startingY == undefined)
    return;
  console.log("row = " + (startingY + parseInt(row) - 1))
  console.log("column = " + columnStartingXs.get(column))
  return "hex" + columnStartingXs.get(column) + (startingY + parseInt(row) - 1);
}

function convertFromChessToXY(chessPosition: string): number[] {
  //convert from chess notation to hexagon notation

  const columnStartingXs = new Map([['a', 0], ['b', 1], ['c', 2], ['d', 3], ['e', 4], ['f', 5], ['g', 6], ['h', 7], ['i', 8], ['k', 9], ['l', 10]]);
  const columnStartingYs = new Map([['a', 5], ['b', 4], ['c', 3], ['d', 2], ['e', 1], ['f', 0], ['g', 1], ['h', 2], ['i', 3], ['k', 4], ['l', 5]]);
  //split the string into an array
  const chessPositionArray = chessPosition.split('');
  //get the first element of the arrayq
  let column = chessPositionArray[0];
  column = column.toLowerCase();
  //get the second element of the array
  const row = chessPositionArray[1];
  if (column == undefined)
    return [];
  const startingY = columnStartingYs.get(column);
  if (startingY == undefined)
    return [];
  const colx = columnStartingXs.get(column);
  if (colx == undefined)
    return [];
  const xValue = colx - 1;
  const yValue = startingY + parseInt(row) - 1;
  return [xValue, yValue];
}