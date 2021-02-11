export const initialState = {
  userProfile: null,
  activeUser: null,
  viewPosts: "allPosts",
  users: [
    {
      name: "Вася",
      subscription: ["Кирилл"],
      subscribers: ["Кирилл", "Иван", "Ксюша"],
      active: false,
    },
    {
      name: "Кирилл",
      subscription: ["Вася", "Кирилл"],
      subscribers: ["Иван"],
      active: false,
    },
    {
      name: "Иван",
      subscription: ["Вася"],
      subscribers: ["Кирилл"],
      active: false,
    },
  ],
  allPosts: [
    {
      id: 0,
      textPost: "Привет я работаю в quizLab",
      authorPost: "Вася",
      likePost: ["Вася"],
    },

    {
      id: 1,
      textPost: "Привет Угадайте мальчик я или девочка",
      authorPost: "Кирилл",
      likePost: ["Кирилл"],
    },

    {
      id: 2,
      textPost: "Привет я лишился работы",
      authorPost: "Иван",
      likePost: ["Вася", "Кирилл", "Иван"],
    },
  ],
};
