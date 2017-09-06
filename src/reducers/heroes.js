import * as types from "../constants";

const initialState = [
  {
    id: 76360,
    name: "Jesse Tomchak",
    avatar_url: "https://avatars0.githubusercontent.com/u/76360?v=4",
    bio:
      "Firm believer that technology is awesome, the the ability to create and contribute to software is possible from anyone. "
  },
  {
    id: 150330,
    name: "Kyle Simpson",
    avatar_url: "https://avatars0.githubusercontent.com/u/150330?v=4",
    bio:
      "I teach JavaScript and I'd love to come help your team's developers. If that's interesting to you, please reach out to me getify@gmail.com."
  }
];
export default function heroes(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_HERO:
      const heroIndex = state.map(o => o.id).indexOf(action.id);
      return [
        ...state.slice(0, heroIndex),
        { ...state[heroIndex], name: action.name },
        ...state.slice(heroIndex + 1, state.length)
      ];
    case types.ADD_HERO:
      const hero = action.hero;
      return [
        ...state,
        {
          id: hero.id,
          name: hero.name,
          avatar_url: hero.avatar_url,
          bio: hero.bio
        }
      ];

    default:
      return state;
  }
}
