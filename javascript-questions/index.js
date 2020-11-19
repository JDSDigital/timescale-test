const superHeroes = require("./super-heroes.json");

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = heroes => {
  return heroes.filter(hero => hero.publisher === "Marvel Comics");
};

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = heroes => {
  return heroes.map(hero => ({
    ...hero,
    characters: hero.characters.split(", ")
  }));
};

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = heroes => {
  return heroes.reduce((group, hero) => {
    group[hero.publisher] = [...(group[hero.publisher] || []), hero];

    return group;
  }, {});
};

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = heroes => {
  return convertCharactersToArray(heroes).filter(hero => hero.characters.length > 1);
};

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher
};
