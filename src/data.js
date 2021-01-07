import jpg1 from "images/main/1.jpg";
import jpg2 from "images/main/2.jpg";
import jpg3 from "images/main/3.jpg";
import jpg4 from "images/main/4.jpg";
import logo from "images/logo_removedbg.png";

export default {
  title: "Речевой центр Эльвиры Зайцевой",
  logo: logo,
  blocks: [
    {
      photo: jpg1,
      title: "Наши Услуги",
      anchor: "services",
    },
    {
      photo: jpg2,
      title: "О работе центра",
      anchor: "about-work",
    },
    {
      photo: jpg3,
      title: "О центре",
      anchor: "about",
    },
    {
      photo: jpg4,
      title: "Миссия центра",
      anchor: "mission",
    },
    {
      photo: null,
      title: "Наши Специалисты",
      anchor: "specialists",
    },
    {
      photo: null,
      title: "Отзывы",
      anchor: "feedback",
    },
    {
      photo: null,
      title: "Контакты",
      anchor: "contacts",
    },
  ],
};
