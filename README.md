# Team For All

This application aims to assemble random teams with the names of the players who registered in the application.


## Installation

To install all development dependencies:

```
npm install
```

## Usage example

To start the application use the command:

```
npm start
```

### Routes

Post: /players:
Send player name

Get: /players:
Recover all created players

Post: /teamname
Send team name

Get: /teamname
Recover all created teams names

Post: /teams
Create teams and reserve list with all players registered in the system

Get: /teams
Recover all created teams

Get: /teams/reservelist
Recover reserve list players



#### Data

all the players and teams data in mongoDB expires at 00:00:00 hours

